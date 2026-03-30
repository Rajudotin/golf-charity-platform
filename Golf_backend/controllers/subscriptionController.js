const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const pool = require("../config/db");

exports.createCheckoutSession = async (req, res) => {
  try {
    const { plan } = req.body; // 'monthly' or 'yearly'
    const priceId =
      plan === "yearly"
        ? process.env.STRIPE_PRICE_YEARLY
        : process.env.STRIPE_PRICE_MONTHLY;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/subscribe`,
      customer_email: req.user.email,
      metadata: {
        userId: req.user.id.toString(),
      },
      subscription_data: {
        trial_period_days: 7, // PRD not, but nice
      },
    });

    res.json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ msg: "Subscription error" });
  }
};

exports.webhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const userId = parseInt(session.metadata.userId);
      await pool.query(
        "UPDATE users SET stripe_customer_id = $1, subscription_status = $2 WHERE id = $3",
        [session.customer, "active", userId],
      );
    }

    if (
      event.type === "customer.subscription.deleted" ||
      event.type === "invoice.payment_failed"
    ) {
      const subscription = event.data.object;
      const userId = parseInt(subscription.metadata.userId);
      await pool.query(
        "UPDATE users SET subscription_status = $2 WHERE stripe_customer_id = $1 OR id = $3",
        [subscription.customer, "inactive", userId],
      );
    }

    res.json({ received: true });
  } catch (err) {
    res.status(400).send(`Webhook handler failed.`);
  }
};

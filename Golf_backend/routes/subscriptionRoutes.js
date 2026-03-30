const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const subscriptionController = require("../controllers/subscriptionController");

router.post("/subscribe", auth, subscriptionController.createCheckoutSession);
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  subscriptionController.webhook,
);

module.exports = router;

const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validate
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    // 2. Check existing user
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // 3. Hash password
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. Insert user
    const newUser = await pool.query(
      `INSERT INTO users (name, email, password, subscription_status, role)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, hashedPassword, "inactive", "user"],
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

//login user and return token
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check user
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 3. Generate token
    const token = jwt.sign(
      {
        id: user.rows[0].id,
        role: user.rows[0].role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.json({ token, user: user.rows[0] });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Removed getUsers for production - use admin routes

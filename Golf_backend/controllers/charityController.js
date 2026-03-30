const pool = require("../config/db");

exports.getCharities = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM charities");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
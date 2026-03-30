const pool = require("../config/db");

exports.addScore = async (req, res) => {
  try {
    const userId = req.user.id;
    const { score, date } = req.body;

    // 1. Validation
    if (!score || !date) {
      return res.status(400).json({ msg: "Score and date required" });
    }

    if (score < 1 || score > 45) {
      return res.status(400).json({ msg: "Score must be between 1–45" });
    }

    // 2. Get existing scores
    const existing = await pool.query(
      "SELECT * FROM scores WHERE user_id = $1 ORDER BY date ASC",
      [userId],
    );

    // 3. If already 5 → delete oldest
    if (existing.rows.length >= 5) {
      const oldest = existing.rows[0];

      await pool.query("DELETE FROM scores WHERE id = $1", [oldest.id]);
    }

    // 4. Insert new score
    const newScore = await pool.query(
      `INSERT INTO scores (user_id, score, date)
       VALUES ($1, $2, $3) RETURNING *`,
      [userId, score, date],
    );

    res.json(newScore.rows[0]);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getScores = async (req, res) => {
  try {
    const userId = req.user.id;

    const scores = await pool.query(
      "SELECT * FROM scores WHERE user_id = $1 ORDER BY date DESC",
      [userId],
    );

    res.json(scores.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

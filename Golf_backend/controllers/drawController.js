const pool = require("../config/db");

exports.runDraw = async (req, res) => {
  try {
    // 1. Generate 5 random numbers (1–45)
    const drawNumbers = [];
    while (drawNumbers.length < 5) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!drawNumbers.includes(num)) {
        drawNumbers.push(num);
      }
    }

    // 2. Save draw
    const draw = await pool.query(
      "INSERT INTO draws (numbers) VALUES ($1) RETURNING *",
      [drawNumbers],
    );

    // 3. Get all users
    const users = await pool.query("SELECT id FROM users");

    const winners = [];

    // 4. Loop users
    for (let user of users.rows) {
      const scoresRes = await pool.query(
        "SELECT score FROM scores WHERE user_id = $1",
        [user.id],
      );

      const userScores = scoresRes.rows.map((s) => s.score);

      // 5. Count matches
      const matches = userScores.filter((score) =>
        drawNumbers.includes(score),
      ).length;

      // 6. If >=3 matches → winner
      if (matches >= 3) {
        winners.push({
          user_id: user.id,
          match_count: matches,
        });

        await pool.query(
          "INSERT INTO winners (user_id, match_count, prize) VALUES ($1, $2, $3)",
          [user.id, matches, 0], // prize dummy
        );
      }
    }

    res.json({
      draw: draw.rows[0],
      winners,
    });
  } catch (err) {
    res.status(500).json({ msg: "Draw error" });
  }
};

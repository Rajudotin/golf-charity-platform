const pool = require("../config/db");

exports.getUsers = async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT id, name, email, subscription_status, role, created_at FROM users ORDER BY created_at DESC",
    );
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getCharities = async (req, res) => {
  try {
    const charities = await pool.query("SELECT * FROM charities ORDER BY name");
    res.json(charities.rows);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createCharity = async (req, res) => {
  try {
    const { name, description, image, percent_default } = req.body;
    const newCharity = await pool.query(
      "INSERT INTO charities (name, description, image, percent_default) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, image, percent_default],
    );
    res.status(201).json(newCharity.rows[0]);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateCharity = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, image, percent_default } = req.body;
    const updated = await pool.query(
      "UPDATE charities SET name=$1, description=$2, image=$3, percent_default=$4 WHERE id=$5 RETURNING *",
      [name, description, image, percent_default, id],
    );
    res.json(updated.rows[0]);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteCharity = async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query("DELETE FROM charities WHERE id = $1", [id]);
    res.json({ msg: "Charity deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getDraws = async (req, res) => {
  try {
    const draws = await pool.query("SELECT * FROM draws ORDER BY date DESC");
    res.json(draws.rows);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getWinners = async (req, res) => {
  try {
    const winners = await pool.query(`
      SELECT w.*, u.name, d.numbers, d.date 
      FROM winners w 
      JOIN users u ON w.user_id = u.id 
      JOIN draws d ON w.draw_id = d.id 
      ORDER BY d.date DESC
    `);
    res.json(winners.rows);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

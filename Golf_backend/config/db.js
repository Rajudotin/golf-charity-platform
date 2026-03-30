const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// 🔥 CRITICAL: prevent crash
pool.on("error", (err) => {
  console.error("🔥 DB Pool Error (handled):", err.message);
});

// optional: log connect
pool.on("connect", () => {
  console.log("New DB connection established");
});

module.exports = pool;

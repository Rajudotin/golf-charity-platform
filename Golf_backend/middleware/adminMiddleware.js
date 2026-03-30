const authMiddleware = require("./authMiddleware");

module.exports = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Admin access required" });
    }
    next();
  });
};

const controller = require("../controllers/authController");
const { runDraw } = require("../controllers/drawController");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.post("/run", auth, admin, runDraw);
router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;

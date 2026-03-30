const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const adminController = require("../controllers/adminController");

router.get("/users", adminMiddleware, adminController.getUsers);
router.get("/charities", adminMiddleware, adminController.getCharities);
router.post("/charities", adminMiddleware, adminController.createCharity);
router.put("/charities/:id", adminMiddleware, adminController.updateCharity);
router.delete("/charities/:id", adminMiddleware, adminController.deleteCharity);
router.get("/draws", adminMiddleware, adminController.getDraws);
router.get("/winners", adminMiddleware, adminController.getWinners);

module.exports = router;

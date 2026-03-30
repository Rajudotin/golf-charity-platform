const express = require("express");
const router = express.Router();
const { getCharities } = require("../controllers/charityController");

router.get("/", getCharities);

module.exports = router;
const express = require("express");
const router = express.Router();
const axios = require("axios");
const checkAuth = require("../middleware/checkAuth");

const DataController = require("../controllers/availability");

router.get("/", checkAuth, DataController.getAvailabilityData);

module.exports = router;

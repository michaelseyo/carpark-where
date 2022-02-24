const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');

const DetailsController = require("../controllers/details");

router.get('/:memberId', checkAuth, DetailsController.getMemberDetails);

module.exports = router;
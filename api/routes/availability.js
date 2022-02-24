const express = require('express');
const router = express.Router();
const axios = require('axios');

const checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, async (req, res, next) => {
    try {
        const dataRes = await axios.get('https://api.data.gov.sg/v1/transport/carpark-availability');
        const data = dataRes.data;
        console.log(data);
        res.status(200).json({
            message: 'Current carpark availabilites were fetched',
            data: data
        });
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;
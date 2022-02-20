const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Car park availabilites were fetched'
    })
});

module.exports = router;
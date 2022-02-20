const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /details'
    });
})

router.get('/:memberId', (req, res, next) => {
    const id = req.params.memberId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You got the special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id: id
        });
    }
});

module.exports = router;
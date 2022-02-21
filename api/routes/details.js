const express = require('express');
const router = express.Router();

const Member = require('../models/member');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /details'
    });
})

router.get('/:memberId', (req, res, next) => {
    const id = req.params.memberId;
    Member.findById(id)
        .exec()
        .then(doc => {
            console.log("From db", doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err});
        });
});

module.exports = router;
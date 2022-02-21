const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Member = require('../models/member');

router.post('/', async (req, res, next) => {
    const member = new Member({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    try {
        result = await member.save();
        console.log(result);
        res.status(201).json({
            message: 'POST request: Account created',
            createdMember: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err});
    }
});

module.exports = router;
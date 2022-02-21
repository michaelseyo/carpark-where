const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Member = require('../models/member');

router.post('/', (req, res, next) => {
    const member = new Member({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    member
        .save()
        .then(result => {
            console.log(result);
         })
        .catch(error => console.log(error))

    res.status(201).json({
        message: 'Account created',
        createdMember: member
    })
});

module.exports = router;
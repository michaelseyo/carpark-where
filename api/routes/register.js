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
        password: req.body.password,
        contactNumber: req.body.contactNumber
    });
    try {
        result = await member.save();
        console.log(result);
        res.status(201).json({
            message: 'POST request: Account created',
            createdMember: {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                request: {
                    type: 'GET',
                    description: 'Get details of member',
                    url: 'http://localhost:3000/details/' + result._id
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err});
    }
});

module.exports = router;
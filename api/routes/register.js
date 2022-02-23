const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Member = require('../models/member');

router.post('/', async (req, res, next) => {
    const member = await Member.find({email: req.body.email}).exec();
    if (member.length >= 1) {
        return res.status(422).json({
            message: 'Email already exists'
        });
    } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                const createdMember = new Member({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash, 
                    contactNumber: req.body.contactNumber
                });
                
                try {
                    result = await createdMember.save();
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
            }
        });
    }
});

module.exports = router;
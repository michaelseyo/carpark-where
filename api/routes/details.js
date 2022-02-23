const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');

const Member = require('../models/member');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /details'
    });
})

router.get('/:memberId', checkAuth, async (req, res, next) => {
    const id = req.params.memberId;
    try {
        const doc = await Member.findById(id)
                                .select('firstName lastName email password contactNumber')
                                .exec();
        if (doc) {
            console.log('From db', doc);
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided id'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err});
    }
});

router.delete('/:memberId', checkAuth, async (req, res, next) => {
    const id = req.params.memberId;
    try {
        result = await Member.remove({_id: id}).exec();
        res.status(200).json({
            message: 'Account deleted',
            request: {
                type: 'POST',
                description: 'Create an account',
                url: 'http://localhost:3000/register',
                body: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String',
                    password: 'String'
                }
            }
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        });
    }
});

router.patch('/:memberId', checkAuth, async (req, res, next) => {
    const id = req.params.memberId;
    const updateOps = {};
    // get params to update
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }

    try {
        result = await Member.updateOne({_id: id}, { $set: updateOps }).exec();
        console.log(result);
        res.status(200).json({
            message: 'Member updated',
            request: {
                type: 'GET',
                description: 'Get updated details here',
                url: 'http://localhost:3000/details/' + id
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: err})
    }
});

module.exports = router;
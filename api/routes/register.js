const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const account = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    res.status(201).json({
        message: 'Account created',
        account: account
    })
});

module.exports = router;
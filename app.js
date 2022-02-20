const express = require('express');
const app = express();

const detailRoutes = require('./api/routes/details');
const registerRoutes = require('./api/routes/register');
const loginRoutes = require('./api/routes/login');
const availabilityRoutes = require('./api/routes/availability');

app.use('/details', detailRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/availability', availabilityRoutes);

module.exports = app;
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const detailRoutes = require('./api/routes/details');
const registerRoutes = require('./api/routes/register');
const loginRoutes = require('./api/routes/login');
const availabilityRoutes = require('./api/routes/availability');

mongoose.connect(
    'mongodb+srv://michaelseyo:' + 
    process.env.MONGO_ATLAS_PW + 
    '@carpark-where.iwmau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    }
);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization"'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes to handle requests
app.use('/details', detailRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/availability', availabilityRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
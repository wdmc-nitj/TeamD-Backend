const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const mainRouter = require('./routes');

const app = express();
const Token = require('./models/token');

// Environment variables for database username and password
const dbUser = process.env.atlasUser;
const dbPass = process.env.atlasPassword;
const clusterName = process.env.atlasClusterName;
const dbName = process.env.atlasDBName;
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${clusterName}/${dbName}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(PORT);
        console.log(`Listening on port ${PORT}...`);
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(morgan('dev'));

// add access control headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next(); 
});

// Token authentication for non GET requests
app.use((req, res, next) => {

    if (req.method === 'GET') {
        return next();
    }

    // fetch required token from database    
    Token.findOne({ name: 'BearerToken' })
        .then((requiredToken) => {
            // check if token is valid if it exists
            if (!req.headers.authorization) {
                return res.status(401).json('Token not found');
            }
            if (req.headers.authorization.split(' ')[1] !== requiredToken.value) {
                return res.status(401).json('Invalid token');
            }
            next();
            
        })
        .catch((err) => {
            console.log(err);
        });

});

// health check
app.get('/health-check', (req, res) => res.send('OK'));

// routes
app.use(mainRouter);

// 404 error
app.use((req, res) => res.status(404).json(`Cannot ${req.method} ${req.url}`));

// error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json('Internal server error');
});

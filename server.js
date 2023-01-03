const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const admissionsRoutes = require('./routes/admissionsRoutes');
const MoURoutes = require('./routes/MoURoutes');
const researchRoutes = require('./routes/researchRoutes');
const recruitmentsRoutes = require('./routes/recruitmentsRoutes');

// Environment variables for database username and password
const dbUser = process.env.atlasUser;
const dbPass = process.env.atlasPassword;
const clusterName = process.env.atlasClusterName;
const dbName = process.env.atlasDBName;
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${clusterName}/${dbName}?retryWrites=true&w=majority`;

// express app
const app = express();

// connect to MongoDB
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(morgan('dev'));

// routes

// add access control headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next(); 
});

app.get('/health-check', (req, res) => res.send('OK'));

app.use('/admissions', admissionsRoutes);
app.use('/MoU', MoURoutes);
app.use('/research', researchRoutes);
app.use('/recruitments', recruitmentsRoutes);

// 404 page
app.use((req, res) => res.status(404).send(`Cannot ${req.method} ${req.url} <br>Refer to docs.`));

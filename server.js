const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const ugUpdateRoutes = require('./routes/ugUpdateRoutes');

// Environment variables for database username and password
const dbUser = process.env.atlasUser;
const dbPass = process.env.atlasPassword;

const dbName = 'admissions';

// express App
const App = express();

// connect to MongoDB
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5swxwob.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
    .then((resutlt) => {
        App.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

App.set('view engine', 'ejs');
App.use(express.static('public'));
App.use(express.urlencoded({ extended: true }));
App.use(morgan('dev'));

// routes

App.get('/', (req, res) => {
    res.redirect('/admissions/ug/updates');
    // res.status(404).render('404', { err: 'Please go to /admissions'});
});

App.get('/health-check', (req, res) => {
    res.send('OK');
});

App.get('/admissions', (req, res) => {
    res.redirect('/admissions/ug/updates');
});

App.use('/admissions/ug/updates', ugUpdateRoutes);

App.use((req, res) => {
    res.status(404).render('404');;
});
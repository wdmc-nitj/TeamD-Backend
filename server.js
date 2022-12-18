const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const ugUpdateRoutes = require('./routes/ugUpdateRoutes');

// Environment variables for database username and password
const dbUser = process.env.atlasUser;
const dbPass = process.env.atlasPassword;
const dbName = 'admissions';
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5swxwob.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// express app
const app = express();

// connect to MongoDB
mongoose.connect(dbURI)
    .then((resutlt) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes

app.get('/health-check', (req, res) => {
    res.send('OK');
});

app.get('/', (req, res) => {
    res.redirect('/admissions/ug/updates/all');
});

app.use('/admissions/ug/updates', ugUpdateRoutes);

app.use((req, res) => {
    res.status(404).render('404');;
});

//create new route for 404 page
app.get('*', (req, res) => {
    res.status(404).render('404');
});
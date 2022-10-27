const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const updateRoutes = require('./routes/updateRoutes');

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://dohit:dohit@cluster0.5swxwob.mongodb.net/admissions-ug?retryWrites=true&w=majority'
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
app.get('/', (req, res) => {
    res.redirect('/updates');
});

app.use('/updates', updateRoutes);
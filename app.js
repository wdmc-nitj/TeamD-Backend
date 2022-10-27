const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Update = require('./models/update');

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

app.get('/updates', (req, res) => {
    Update.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { updates: result });
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/create', (req, res) => {
    const update = new Update(req.body);

    update.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
    
    res.redirect('/');
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    Update.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/' });
        })
        .catch((err) => {
            console.log(err);
        });
});
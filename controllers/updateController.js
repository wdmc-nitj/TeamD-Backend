const Update = require('../models/update');

const update_index = (req, res) => {
    Update.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { updates: result });
        })
        .catch((err) => {
            console.log(err);
        })
};

const update_create_get = (req, res) => {
    res.render('create');
};

const update_create_post = (req, res) => {
    const update = new Update(req.body);

    update.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
    
    res.redirect('/');
};

const update_delete = (req, res) => {
    const id = req.params.id;
    Update.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/' });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    update_index,
    update_create_get,
    update_create_post,
    update_delete
};
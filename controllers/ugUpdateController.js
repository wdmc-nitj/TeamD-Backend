const ugUpdate = require('../models/ugUpdate');

const ug_update_list = (req, res) => {
    ugUpdate.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { updates: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

const ug_update_create_get = (req, res) => {
    res.render('create');
};

const ug_update_create_post = (req, res) => {
    const update = new ugUpdate(req.body);

    update.save()
        .then((result) => {
            res.redirect('/admissions');
        })
        .catch((err) => {
            console.log(err);
        });
};


const ug_update_details = (req, res) => {
    const id = req.params.id;
    ugUpdate.findById(id)
        .then((result) => {
            res.render('details', {update: result})
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404');
        });
};

const ug_update_delete = (req, res) => {
    const id = req.params.id;
    ugUpdate.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/' });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    ug_update_list,
    ug_update_create_get,
    ug_update_create_post,
    ug_update_details,
    ug_update_delete
};
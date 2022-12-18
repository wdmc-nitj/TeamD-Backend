const ugUpdate = require('../models/ugUpdate');

const ug_update_list = (req, res, enabled) => {
    ugUpdate.find({ enabled: enabled }).sort({ updatedAt: -1 })
        .then((result) => {
            res.render('index', { updates: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

const ug_update_list_enabled = (req, res) => {
    ug_update_list(req, res, true);
};

const ug_update_list_disabled = (req, res) => {
    ug_update_list(req, res, false);
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
            res.render('details', { update: result });
        })
        .catch((err) => {
            console.log(err);
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

const ug_update_put = (req, res) => {
    const id = req.params.id;
    ugUpdate.updateOne(
        {
            _id: id
        },
        {
            title: req.body.title,
            content: req.body.content,
            enabled: req.body.enabled
        })
        .then((result) => {
            if(req.body.enabled === 'true'){
                destination = 'disabled';
            }
            else{
                destination = 'all';
            }

            res.json({ redirect: `/admissions/ug/updates/${destination}` });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    ug_update_list,
    ug_update_list_enabled,
    ug_update_list_disabled,
    ug_update_create_get,
    ug_update_create_post,
    ug_update_details,
    ug_update_delete,
    ug_update_put
};
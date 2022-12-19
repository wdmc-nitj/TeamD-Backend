const ugUpdate = require('../models/admissionUpdate');

const ug_update_list = (req, res) => {
    let filter = {};

    if (req.params.toggle === 'enabled') {
        filter.enabled = true;
    }
    else if (req.params.toggle === 'disabled'){   
        filter.enabled = false;
    }

    ugUpdate.find(filter)
        .sort({ updatedAt: -1 })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

const ug_update_create = (req, res) => {
    const update = new ugUpdate(req.body);

    update.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};


const ug_update_details = (req, res) => {
    const id = req.params.id;
    // check ID validity
    ugUpdate.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

const ug_update_delete = (req, res) => {
    const id = req.params.id;
    ugUpdate.findByIdAndDelete(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

const ug_update_patch = (req, res) => {
    const id = req.params.id;
    req.body.updatedAt = Date.now();
    ugUpdate.updateOne(
        {
            _id: id
        },
        req.body)
        .then((result) => {
            if (req.body.enabled === 'true') {
                destination = 'disabled';
            }
            else {
                destination = 'all';
            }

            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

module.exports = {
    ug_update_list,
    ug_update_create,
    ug_update_details,
    ug_update_delete,
    ug_update_patch
};
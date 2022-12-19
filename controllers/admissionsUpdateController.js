const admissionUpdate = require('../models/admissions')['update'];


const sendError = (res, err) => {
    // used to send error to client and console
    console.log(err);
    res.status(404).json(err);
};

const ug_update_list = (req, res) => {
    let filter = { degree: req.params.degree };

    if (req.params.toggle === 'enabled') {
        filter.enabled = true;
    }
    else if (req.params.toggle === 'disabled') {
        filter.enabled = false;
    }

    admissionUpdate.find(filter)
        .sort({ updatedAt: -1 })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            sendError(res, err);
        });
};

const ug_update_create = (req, res) => {
    const update = new admissionUpdate(req.body);

    update.save()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            sendError(res, err);
        });
};


const ug_update_details = (req, res) => {
    const id = req.params.id;
    
    admissionUpdate.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            sendError(res, err);
        });
};

const ug_update_delete = (req, res) => {
    const id = req.params.id;
    admissionUpdate.findByIdAndDelete(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            sendError(res, err);
        });
};

const ug_update_patch = (req, res) => {
    const id = req.params.id;
    req.body.updatedAt = Date.now();
    admissionUpdate.updateOne(
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
            sendError(res, err);
        });
};

module.exports = {
    ug_update_list,
    ug_update_create,
    ug_update_details,
    ug_update_delete,
    ug_update_patch
};
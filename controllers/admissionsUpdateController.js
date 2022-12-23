const admissionUpdate = require('../models/admissions')['update'];
const mongoose = require('mongoose');


const sendError = (res, err) => {
    // used to send error to client and console
    console.log(err);
    res.status(404).json('Error: ' + err);
};

const validateID = (id) => {
    // used to validate id
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        // return the error as string to be used in catch
        return Promise.reject('Invalid ID, must be 12 bytes or a string of 24 hex characters');
    }
    return Promise.resolve();
};

const createUpdate = (req, res) => {
    const update = new admissionUpdate(req.body);

    update.save()
        .then((createdUpdate) => res.json(createdUpdate))
        .catch((err) => sendError(res, err));
};

const getUpdates = (req, res) => {
    let filter = {};

    if(req.params.degree !== 'all') {
        filter.degree = req.params.degree;
    }

    if (req.params.visible === 'visible') {
        filter.visible = true;
    }
    else if (req.params.visible === 'hidden') {
        filter.visible = false;
    }

    admissionUpdate.find(filter)
        .sort({ updatedAt: -1 })
        .then((updates) => res.json(updates))
        .catch((err) => sendError(res, err));
};

const getUpdateById = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => 
    {
        admissionUpdate.findById(id)
        .then((update) => res.json(update))
        .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));    
};

const editUpdate = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => 
    {
        req.body.updatedAt = Date.now();
        admissionUpdate.updateOne({ _id: id }, req.body) 
        .then((result) => res.json(result))
        .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
};

const hideUpdate = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => 
    {
        admissionUpdate.findById(id)
        .then((update) => res.json(update))
        .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
};

const deleteUpdate = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => 
    {
        admissionUpdate.findByIdAndDelete(id)
        .then((deletedUpdate) => res.json(deletedUpdate))
        .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
};

module.exports = {
    createUpdate,
    getUpdates,
    getUpdateById,
    editUpdate,
    hideUpdate,
    deleteUpdate,
    
};
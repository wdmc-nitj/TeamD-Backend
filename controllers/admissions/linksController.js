const admissionLink = require('../../models/admissions').link;
const mongoose = require('mongoose');

const sendError = (res, err) => {
    // used to send error to client and console
    console.log(err);
    res.status(404).json('Error: ' + err);
}

const validateID = (id) => {
    // used to validate id
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        // return the error as string to be used in catch
        return Promise.reject('Invalid ID, must be 12 bytes or a string of 24 hex characters');
    }
    return Promise.resolve();
}

const createLink = (req, res) => {
    const link = new admissionLink(req.body);

    link.save()
        .then((createdLink) => res.json(createdLink))
        .catch((err) => sendError(res, err));
}

const getLinks = (req, res) => {
    let filter = {};

    if (req.params.visible === 'visible') {
        filter.visible = true;
    }
    else if (req.params.visible === 'hidden') {
        filter.visible = false;
    }

    admissionLink.find(filter)
        .sort({ updatedAt: -1 })
        .then((links) => res.json(links))
        .catch((err) => sendError(res, err));
}

const getLinkById = (req, res) => {

    const id = req.params.id;
    validateID(id).then(() => 
    {
        admissionLink.findById(id)
        .then((link) => res.json(link))
        .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
}

const editLink = (req, res) => {

    const id = req.params.id;
    validateID(id).then(() => 
    {
        admissionLink.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
            .then((updatedLink) => res.json(updatedLink))
            .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
}

const hideLink = (req, res) => {

    const id = req.params.id;
    validateID(id).then(() =>
    {
        admissionLink.findByIdAndUpdate(id, { visible: false }, { new: true, runValidators: true })
            .then((updatedLink) => res.json(updatedLink))
            .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
}

const deleteLink = (req, res) => {
    
        const id = req.params.id;
        validateID(id).then(() => 
        {
            admissionLink.findByIdAndDelete(id)
            .then((deletedLink) => res.json(deletedLink))
            .catch((err) => sendError(res, err));
        })
        .catch((err) => sendError(res, err));
}

module.exports = {
    createLink,
    getLinks,
    getLinkById,
    editLink,
    hideLink,
    deleteLink
}

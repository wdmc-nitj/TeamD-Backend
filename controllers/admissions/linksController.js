const admissionLink = require('../../models/admissions').link;
const { sendError, validateID } = require('../../utils');

const createLink = (req, res) => {
    const link = new admissionLink(req.body);

    link.save()
        .then((createdLink) => res.status(201).json(createdLink))
        .catch((err) => sendError(res, err));
}

const getLinks = (req, res) => {
    let filter = {};

    if (req.query.visible === 'visible') {
        filter.visible = true;
    } else if (req.query.visible === 'hidden') {
        filter.visible = false;
    }

    admissionLink.find(filter)
        .sort({ updatedAt: -1 })
        .then((links) => res.json(links))
        .catch((err) => sendError(res, err));
}

const getLinkById = (req, res) => {

    const id = req.query.id;
    validateID(id).then(() => {
        admissionLink.findById(id)
            .then((link) => res.json(link))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
}

const editLink = (req, res) => {

    const id = req.query.id;
    validateID(id).then(() => {
        req.body.updatedAt = Date.now();
        admissionLink.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
            .then((updatedLink) => res.json(updatedLink))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
}

const toggleLinkVisiblity = (req, res) => {
    const id = req.query.id;
    validateID(id).then(() => {
        admissionLink.findById(id)
            .then((link) => {
                link.visible = !link.visible;
                link.disabledAt = !link.visible ? Date.now() : null;
                link.save()
                    .then((updatedLink) => res.json(updatedLink))
                    .catch((err) => sendError(res, err));
            })
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
}

const deleteLink = (req, res) => {

    const id = req.query.id;
    validateID(id).then(() => {
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
    toggleLinkVisiblity,
    deleteLink
}

const { sendError, validateID } = require('../../utils');
const RefereedResearch = require('../../models/researchPublications').RefereedResearch;

// GET all refereed researches
const getAllRefereedResearches = (req, res, next) => {
    // filter by req.params.visible if it is not 'all'
    let filter = {};

    if (req.params.visible === 'visible') {
        filter.visible = true;
    }
    else if (req.params.visible === 'hidden') {
        filter.visible = false;
    } else if (req.params.visible !== 'all') {
        return sendError(res, `Invalid value for visible: ${req.params.visible}`);
    }

    RefereedResearch
        .find(filter)
        .then((refereedResearches) => res.json(refereedResearches))
        .catch((err) => sendError(res, err));
};

// Create a new refereed research
const createRefereedResearch = (req, res) => {
    const newRefereedResearch = new RefereedResearch(req.body);

    newRefereedResearch.save()
        .then((createdRefereedResearch) => res.status(201).json(createdRefereedResearch))
        .catch((err) => sendError(res, err));
};

// Edit a refereed research
const editRefereedResearch = (req, res) => {
    const id = req.params.id;

    validateID(id)
        .then(() => {
            req.body.updatedAt = Date.now();
            RefereedResearch.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
                .then((updatedRefereedResearch) => res.json(updatedRefereedResearch))
                .catch((err) => sendError(res, err));
        })
        .catch((err) => sendError(res, err));
};

// Get a refereed research by id
const getRefereedResearchById = (req, res) => {
    const id = req.params.id;
    validateID(id)
        .then(() => RefereedResearch
            .findById(id)
            .then((refereedResearch) => res.json(refereedResearch))
            .catch((err) => sendError(res, err)))
        .catch((err) => sendError(res, err));
};

// Hide a refereed research
const hideRefereedResearch = (req, res) => {
    const id = req.params.id;

    validateID(id)
        .then(() => RefereedResearch
            .findByIdAndUpdate(id, { visible: false }, { new: true })
            .then((hiddenRefereedResearch) => res.json(hiddenRefereedResearch))
            .catch((err) => sendError(res, err)))
        .catch((err) => sendError(res, err));
};

// Delete a refereed research
const deleteRefereedResearch = (req, res) => {
    const id = req.params.id;

    validateID(id)
        .then(() => RefereedResearch.findByIdAndDelete(id))
        .then((deletedRefereedResearch) => res.json(deletedRefereedResearch))
        .catch((err) => sendError(res, err));
};


module.exports = {
    getAllRefereedResearches,
    createRefereedResearch,
    editRefereedResearch,
    getRefereedResearchById,
    hideRefereedResearch,
    deleteRefereedResearch
};
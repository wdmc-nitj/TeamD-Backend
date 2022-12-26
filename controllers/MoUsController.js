const MoU = require('../models/MoUs');
const { sendError, validateID } = require('../utils');


const createMoU = (req, res) => {
    const newMoU = new MoU(req.body);

    newMoU.save()
        .then((createdMoU) => res.status(201).json(createdMoU))
        .catch((err) => sendError(res, err));
};

const getMoUs = (req, res) => {
    let filter = {};

    // filter by req.params.category if it is not 'all'
    if (req.params.category !== 'all') {
        filter.category = req.params.category;
    }

    if (req.params.visible === 'visible') {
        filter.visible = true;
    } else if (req.params.visible === 'hidden') {
        filter.visible = false;
    } else if (req.params.visible !== 'all') {
        return sendError(res, `Invalid value for visible: ${req.params.visible}`);
    }

    MoU.find(filter)
        .then((MoUs) => res.json(MoUs))
        .catch((err) => sendError(res, err));
};

const getMoUById = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => {
        MoU.findById(id)
            .then((MoU) => res.json(MoU))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

const editMoU = (req, res) => {

    const id = req.params.id;
    validateID(id).then(() => {
        req.body.updatedAt = Date.now();
        MoU.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
            .then((updatedMoU) => res.json(updatedMoU))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

const hideMoU = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => {
        MoU.findByIdAndUpdate(id, { visible: false }, { new: true })
            .then((updatedMoU) => res.json(updatedMoU))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

const deleteMoU = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() => {
        MoU.findByIdAndDelete(id)
            .then((deletedMoU) => res.json(deletedMoU))
            .catch((err) => sendError(res, err));
    })
        .catch((err) => sendError(res, err));
};

module.exports = {
    createMoU,
    getMoUs,
    getMoUById,
    editMoU,
    hideMoU,
    deleteMoU
};
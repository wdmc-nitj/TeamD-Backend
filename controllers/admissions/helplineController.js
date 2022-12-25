const admissionHelpline = require('../../models/admissions').helpline;
const { sendError, validateID } = require('../../myFuncs');

const createHelpline = (req, res) => {
    const helpline = new admissionHelpline(req.body);

    helpline.save()
        .then((createdHelpline) => res.status(201).json(createdHelpline))
        .catch((err) => sendError(res, err));
}

const getHelplines = (req, res) => {
    let filter = {};
    // filter by req.params.degree if it is not 'all'
    if (req.params.degree !== 'all') {
        filter.degree = req.params.degree;
    }

    // filter by req.params.visible if it is not 'all'
    if (req.params.visible === 'visible') {
        filter.visible = true;
    } else if (req.params.visible === 'hidden') {
        filter.visible = false;
    }

    admissionHelpline.find(filter)
        .sort({ updatedAt: -1 })
        .then((helplines) => res.json(helplines))
        .catch((err) => sendError(res, err));
}

const getHelplineById = (req, res) => {
        const id = req.params.id;
        validateID(id).then(() => 
        {
            admissionHelpline.findById(id)
            .then((helpline) => res.json(helpline))
            .catch((err) => sendError(res, err));
        })
        .catch((err) => sendError(res, err));
}

const editHelpline = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() =>
    {
        req.body.updatedAt = Date.now();
        admissionHelpline.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
            .then((helpline) => res.json(helpline))
            .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
}

const hideHelpline = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() =>
    {
        admissionHelpline.findByIdAndUpdate(id, { visible: false }, { new: true })
            .then((helpline) => res.json(helpline))
            .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
}

const deleteHelpline = (req, res) => {
    const id = req.params.id;
    validateID(id).then(() =>
    {
        admissionHelpline.findByIdAndDelete(id)
            .then((deletedHelpline) => res.json(deletedHelpline))
            .catch((err) => sendError(res, err));
    })
    .catch((err) => sendError(res, err));
}

module.exports = {
    createHelpline,
    getHelplines,
    getHelplineById,
    editHelpline,
    hideHelpline,
    deleteHelpline
}
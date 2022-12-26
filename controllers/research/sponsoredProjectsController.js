const {sendError, validateID } = require('../../utils');
const SponsoredProject = require('../../models/research/sponsoredProjects');

const createSponsoredProject = (req, res) => {
    const newSponsoredProject = new SponsoredProject(req.body);

    newSponsoredProject.save()
        .then(sponsoredProject => res.json(sponsoredProject))
        .catch(err => sendError(res, err));
};

const getAllSponsoredProjects = (req, res) => {
    let filter = {};
 
    if (req.params.visible === 'visible') {
        filter.visible = true;
    } else if (req.params.visible === 'hidden') {
        filter.visible = false;
    } else if (req.params.visible !== 'all') {
        return sendError(res, `Invalid value for visible: ${req.params.visible}`);
    }

    SponsoredProject
        .find(filter)
        .then(sponsoredProjects => res.json(sponsoredProjects))
        .catch(err => sendError(res, err));
};

const getVisibleSponsoredProjectsSortedByYear = (req, res) => {
    SponsoredProject
        .find({ visible: true })
        .sort({ yearOfSanctionStart: -1 })
        .then(sponsoredProjects => res.json(sponsoredProjects))
        .catch(err => sendError(res, err));
};

const getSponsoredProjectByID = (req, res) => {
    const id = req.params.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    SponsoredProject
        .findById(id)
        .then(sponsoredProject => {
            if (!sponsoredProject) {
                return sendError(res, `Sponsored Project not found with ID: ${id}`);
            }

            res.json(sponsoredProject);
        })
        .catch(err => sendError(res, err));
};

const updateSponsoredProjectByID = (req, res) => {
    const id = req.params.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }
    
    req.body.updatedAt = Date.now();
    SponsoredProject
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(sponsoredProject => {
            if (!sponsoredProject) {
                return sendError(res, `Sponsored Project not found with ID: ${id}`);
            }

            res.json(sponsoredProject);
        })
        .catch(err => sendError(res, err));
};

const hideSponsoredProjectByID = (req, res) => {
    const id = req.params.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    SponsoredProject
        .findByIdAndUpdate(id, { visible: false }, { new: true })
        .then(sponsoredProject => {
            if (!sponsoredProject) {
                return sendError(res, `Sponsored Project not found with ID: ${id}`);
            }

            res.json(sponsoredProject);
        })
        .catch(err => sendError(res, err));
};

const deleteSponsoredProjectByID = (req, res) => {
    const id = req.params.id;

    if (!validateID(id)) {
        return sendError(res, `Invalid ID: ${id}`);
    }

    SponsoredProject
        .findByIdAndDelete(id)
        .then(sponsoredProject => {
            if (!sponsoredProject) {
                return sendError(res, `Sponsored Project not found with ID: ${id}`);
            }

            res.json(sponsoredProject);
        })
        .catch(err => sendError(res, err));
};

module.exports = {
    createSponsoredProject,
    getAllSponsoredProjects,
    getVisibleSponsoredProjectsSortedByYear,
    getSponsoredProjectByID,
    updateSponsoredProjectByID,
    hideSponsoredProjectByID,
    deleteSponsoredProjectByID
};
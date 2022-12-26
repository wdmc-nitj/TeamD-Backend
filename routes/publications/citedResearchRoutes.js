const express = require('express');
const citedResearchRouter = express.Router();
const citedResearchController = require('../../controllers/publications/citedResearchController');

// routes for /publications/citedReasearch
citedResearchRouter.route('/create')
    .post(citedResearchController.createCitedResearch);

citedResearchRouter.route('/top10')
    .get(citedResearchController.getTop10CitedResearches);

citedResearchRouter.route('/all/:visible')
    .get(citedResearchController.getAllCitedResearches);

citedResearchRouter.route('/id/:id')
    .get(citedResearchController.getCitedResearchById)
    .patch(citedResearchController.editCitedResearch)
    .delete(citedResearchController.hideCitedResearch)
    .put(citedResearchController.deleteCitedResearch);

module.exports = citedResearchRouter;

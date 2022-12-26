const express = require('express');
const sponsoredProjectsRouter = express.Router();
const sponsoredProjectsController = require('../../controllers/research/sponsoredProjectsController');

sponsoredProjectsRouter.route('/create')
    .post(sponsoredProjectsController.createSponsoredProject);

sponsoredProjectsRouter.route('/all/:visible')
    .get(sponsoredProjectsController.getAllSponsoredProjects);

sponsoredProjectsRouter.route('/sortedByYear')
    .get(sponsoredProjectsController.getVisibleSponsoredProjectsSortedByYear);

sponsoredProjectsRouter.route('/id/:id')
    .get(sponsoredProjectsController.getSponsoredProjectByID)
    .patch(sponsoredProjectsController.updateSponsoredProjectByID)
    .delete(sponsoredProjectsController.hideSponsoredProjectByID)
    .put(sponsoredProjectsController.deleteSponsoredProjectByID);

module.exports = sponsoredProjectsRouter;
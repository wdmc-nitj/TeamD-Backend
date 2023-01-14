// router for /admissions/links
const linksRouter = require('express').Router();

const linksController = require('../../controllers/admissions/linksController');


linksRouter.route('/create').post(linksController.createLink);

linksRouter.route('/id/:id')
    .get(linksController.getLinkById)
    .patch(linksController.editLink)
    .delete(linksController.hideLink)
    .put(linksController.deleteLink);

linksRouter.route('/get/:visible').get(linksController.getLinks); // visible can be 'visible', 'hidden' or 'all'


module.exports = linksRouter;

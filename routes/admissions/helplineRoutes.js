// router for /admissions/helplines
const helplineRouter = require('express').Router();

const helplineController = require('../../controllers/admissions/helplineController');


helplineRouter.route('/create').post(helplineController.createHelpline);

helplineRouter.route('/id/:id')
    .get(helplineController.getHelplineById)
    .patch(helplineController.editHelpline)
    .delete(helplineController.hideHelpline)
    .put(helplineController.deleteHelpline);

helplineRouter.route('/:degree/:visible').get(helplineController.getHelplines); // visible can be 'visible', 'hidden' or 'all'

module.exports = helplineRouter;

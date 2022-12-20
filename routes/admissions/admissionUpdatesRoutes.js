const express = require('express');
const updatesController = require('../../controllers/admissionsUpdateController');

// router for /admissions/updates
const updatesRouter = express.Router();


updatesRouter.route('/create').post(updatesController.createUpdate);

updatesRouter.route('/:degree/:visible').get(updatesController.getUpdates); // visible can be 'visible', 'hidden' or 'all'

updatesRouter.route('/:id')
    .get(updatesController.getUpdateById)
    .patch(updatesController.editUpdate)
    .delete(updatesController.hideUpdate)
    .put(updatesController.deleteUpdate);

module.exports = updatesRouter;

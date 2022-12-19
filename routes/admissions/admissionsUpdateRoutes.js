const express = require('express');
const updatesRouter = express.Router();
const ugUpdateController = require('../../controllers/admissionsUpdateController');

updatesRouter.get(`/:degree/:toggle`, ugUpdateController.ug_update_list); // enabled/disabled/all
updatesRouter.post(`/create`, ugUpdateController.ug_update_create);
updatesRouter.get(`/:id`, ugUpdateController.ug_update_details);
updatesRouter.delete(`/:id`, ugUpdateController.ug_update_delete);
updatesRouter.patch(`/:id`, ugUpdateController.ug_update_patch);

module.exports = updatesRouter;
const express = require('express');
const recruitmentUpdateRouter = express.Router();
const recruitmentUpdateController = require('../../controllers/recruitmentUpdateController');

recruitmentUpdateRouter.route('/create')
    .post(recruitmentUpdateController.createRecruitmentUpdate);

recruitmentUpdateRouter.route('/all/:visible')
    .get(recruitmentUpdateController.getAllRecruitmentUpdates);

recruitmentUpdateRouter.route('/category/:category')
    .get(recruitmentUpdateController.getVisibleRecruitmentUpdatesByCategory);

recruitmentUpdateRouter.route('/id/:id')
    .get(recruitmentUpdateController.getRecruitmentUpdateByID)
    .patch(recruitmentUpdateController.editRecruitmentUpdateByID)
    .delete(recruitmentUpdateController.hideRecruitmentUpdateByID)
    .put(recruitmentUpdateController.deleteRecruitmentUpdateByID);

module.exports = recruitmentUpdateRouter;

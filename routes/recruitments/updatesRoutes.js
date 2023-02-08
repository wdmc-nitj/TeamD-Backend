const express = require('express');
const recruitmentUpdateRouter = express.Router();
const recruitmentUpdateController = require('../../controllers/recruitmentUpdateController');

recruitmentUpdateRouter.route('/create')
    .post(recruitmentUpdateController.createRecruitmentUpdate);

recruitmentUpdateRouter.route('/get')
    .get(recruitmentUpdateController.getAllRecruitmentUpdates);

recruitmentUpdateRouter.route('/categorised')
    .get(recruitmentUpdateController.getVisibleRecruitmentUpdatesByCategory);

recruitmentUpdateRouter.route('/update')
    .get(recruitmentUpdateController.getRecruitmentUpdateByID)
    .patch(recruitmentUpdateController.editRecruitmentUpdateByID)
    .delete(recruitmentUpdateController.hideRecruitmentUpdateByID)
    .put(recruitmentUpdateController.deleteRecruitmentUpdateByID);

module.exports = recruitmentUpdateRouter;

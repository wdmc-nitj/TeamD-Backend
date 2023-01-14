const express = require('express');
const ConsultancyRouter = express.Router();
const consultancyController = require('../../controllers/research/consultancyController');

ConsultancyRouter.route('/get/:visible')
    .get(consultancyController.getAllConsultancies);

ConsultancyRouter.route('/year/:startYear')
    .get(consultancyController.getVisibleConsultanciesInStartYear);

ConsultancyRouter.route('/groupByYear')
    .get(consultancyController.getVisibleConsultanciesGroupedByStartYear);

ConsultancyRouter.route('/create')
    .post(consultancyController.createConsultancy);

ConsultancyRouter.route('/id/:id')
    .get(consultancyController.getConsultancyByID)
    .patch(consultancyController.updateConsultancyByID)
    .delete(consultancyController.hideConsultancyByID)
    .put(consultancyController.deleteConsultancyByID);

module.exports = ConsultancyRouter;
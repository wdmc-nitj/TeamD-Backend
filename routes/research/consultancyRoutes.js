const express = require('express');
const ConsultancyRouter = express.Router();
const consultancyController = require('../../controllers/research/consultancyController');

ConsultancyRouter.route('/all/:visible')
    .get(consultancyController.getAllConsultancies);

ConsultancyRouter.route('/sortByStartYear')
    .get(consultancyController.getVisibleConsultanciesSortedByStartYear);

ConsultancyRouter.route('/create')
    .post(consultancyController.createConsultancy);

ConsultancyRouter.route('/id/:id')
    .get(consultancyController.getConsultancyByID)
    .patch(consultancyController.updateConsultancyByID)
    .delete(consultancyController.hideConsultancyByID)
    .put(consultancyController.deleteConsultancyByID);

module.exports = ConsultancyRouter;
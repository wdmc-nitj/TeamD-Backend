// routes for /MoU

const express = require('express');
const MoURouter = express.Router();
const MoUsController = require('../controllers/MoUsController');

MoURouter.route('/create')
    .post(MoUsController.createMoU);

MoURouter.route('/MOU')
    .get(MoUsController.getMoUById)
    .patch(MoUsController.editMoU)
    .delete(MoUsController.hideMoU)
    .put(MoUsController.deleteMoU);

MoURouter.route('/get')
    .get(MoUsController.getMoUs); // visible can be 'visible', 'hidden' or 'all

module.exports = MoURouter;

const express = require('express');
const upcomingEventController = require('../../controllers/research/upcomingEventController');
const upcomingEventRouter = express.Router();

upcomingEventRouter.route('/all/:visible')
    .get( upcomingEventController.getAllUpcomingEvents);

upcomingEventRouter.route('/create')
    .post( upcomingEventController.createUpcomingEvent);

upcomingEventRouter.route('/id/:id')
    .get( upcomingEventController.getUpcomingEventByID)
    .patch( upcomingEventController.updateUpcomingEventByID)
    .delete( upcomingEventController.hideUpcomingEventByID)
    .put( upcomingEventController.deleteUpcomingEventByID);

module.exports = upcomingEventRouter;
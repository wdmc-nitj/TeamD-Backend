const express = require('express');
const upcomingEventController = require('../../controllers/research/upcomingEventController');
const upcomingEventRouter = express.Router();

upcomingEventRouter.route('/get')
    .get( upcomingEventController.getAllUpcomingEvents);

upcomingEventRouter.route('/create')
    .post( upcomingEventController.createUpcomingEvent);

upcomingEventRouter.route('/event')
    .get( upcomingEventController.getUpcomingEventByID)
    .patch( upcomingEventController.updateUpcomingEventByID)
    .delete( upcomingEventController.hideUpcomingEventByID)
    .put( upcomingEventController.deleteUpcomingEventByID);

module.exports = upcomingEventRouter;
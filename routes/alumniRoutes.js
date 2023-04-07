// routes for /MoU

const express = require('express');
const AlumniRouter = express.Router();
const {
    createAlumni,
    deleteAlumni,
    searchAlumni,
    landingPageData,
    editLandingPageData,
    recentEvents,
    givingBack,
    editRecentEvents,
    editGivingBack,
} = require('../controllers/AlumniController');

AlumniRouter.route('/create').post(createAlumni);
AlumniRouter.route('/hide/:alumniId').post(deleteAlumni);
AlumniRouter.route('/search').get(searchAlumni);
AlumniRouter.route('/landing-page').get(landingPageData);
AlumniRouter.route('/recent-events').get(recentEvents);
AlumniRouter.route('/giving-back').get(givingBack);
AlumniRouter.route('/edit/landing-page').get(editLandingPageData);
AlumniRouter.route('/edit/recent-events').get(editRecentEvents);
AlumniRouter.route('/edit/giving-back').get(editGivingBack);

module.exports = AlumniRouter;

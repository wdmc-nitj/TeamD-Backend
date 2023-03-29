// routes for /MoU

const express = require('express');
const AlumniRouter = express.Router();
const {
    createAlumni,
    deleteAlumni,
    searchAlumni,
} = require('../controllers/AlumniController');

AlumniRouter.route('/create').post(createAlumni);
AlumniRouter.route('/hide/:alumniId').post(deleteAlumni);
AlumniRouter.route('/search').get(searchAlumni);

module.exports = AlumniRouter;

// routes for /MoU

const express = require('express');
const AlumniRouter = express.Router();
const { createAlumni } = require('../controllers/AlumniController');

AlumniRouter.route('/create').post(createAlumni);

module.exports = AlumniRouter;

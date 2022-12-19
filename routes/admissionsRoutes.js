const express = require('express');
const router = express.Router();
const admissionsUpdateRouter = require('./admissions/admissionUpdatesRoutes');

router.use('/updates', admissionsUpdateRouter);

module.exports = router;
const express = require('express');
const router = express.Router();
const admissionsUpdateRouter = require('./admissions/admissionsUpdateRoutes');

router.use('/updates', admissionsUpdateRouter);

module.exports = router;
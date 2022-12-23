// router for /admissions
const admissionsRouter = require('express').Router();

const admissionsLinkRouter = require('./admissions/linksRoutes');
const admissionsUpdateRouter = require('./admissions/updatesRoutes');


admissionsRouter.use('/links', admissionsLinkRouter);
admissionsRouter.use('/updates', admissionsUpdateRouter);

module.exports = admissionsRouter;
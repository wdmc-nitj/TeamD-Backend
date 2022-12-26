const express = require('express');
const researchRouter = express.Router();

const citedResearchRouter = require('./research/citedResearchRoutes');
researchRouter.use('/publications/citedResearch', citedResearchRouter);

const refereedResearchRouter = require('./research/refreedResearchRoutes');
researchRouter.use('/publications/refereedResearch', refereedResearchRouter);

const consultancyRouter = require('./research/consultancyRoutes');
researchRouter.use('/consultancy', consultancyRouter);

const upcomingEventRouter = require('./research/upcomingEventRoutes');
researchRouter.use('/upcomingEvents', upcomingEventRouter);

module.exports = researchRouter;
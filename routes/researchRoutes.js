const express = require('express');
const researchRouter = express.Router();

const citedResearchRouter = require('./research/citedResearchRoutes');
const refereedResearchRouter = require('./research/refreedResearchRoutes');
const consultancyRouter = require('./research/consultancyRoutes');
const upcomingEventsRouter = require('./research/upcomingEventsRoutes');
const sponsoredProjectsRouter = require('./research/sponsoredProjectsRoutes');


researchRouter.use('/publications/citedResearch', citedResearchRouter);

researchRouter.use('/publications/refereedResearch', refereedResearchRouter);

researchRouter.use('/consultancy', consultancyRouter);

researchRouter.use('/upcomingEvents', upcomingEventsRouter);

researchRouter.use('/sponsoredProjects', sponsoredProjectsRouter);

module.exports = researchRouter;
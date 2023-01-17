const express = require('express');
const researchRouter = express.Router();

const citedResearchesRouter = require('./research/citedResearchesRoutes');
const refereedResearchesRouter = require('./research/refreedResearchesRoutes');
const consultanciesRouter = require('./research/consultanciesRoutes');
const upcomingEventsRouter = require('./research/upcomingEventsRoutes');
const sponsoredProjectsRouter = require('./research/sponsoredProjectsRoutes');


researchRouter.use('/publications/citedResearches', citedResearchesRouter);

researchRouter.use('/publications/refereedResearches', refereedResearchesRouter);

researchRouter.use('/consultancies', consultanciesRouter);

researchRouter.use('/upcomingEvents', upcomingEventsRouter);

researchRouter.use('/sponsoredProjects', sponsoredProjectsRouter);

module.exports = researchRouter;
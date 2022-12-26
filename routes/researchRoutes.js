const express = require('express');
const researchRouter = express.Router();
const citedResearchRouter = require('./research/citedResearchRoutes');
const refereedResearchRouter = require('./research/refreedResearchRoutes');

researchRouter.use('/publications/citedResearch', citedResearchRouter);
researchRouter.use('/publications/refereedResearch', refereedResearchRouter);

module.exports = researchRouter;
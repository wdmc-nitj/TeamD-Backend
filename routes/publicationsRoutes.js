const express = require('express');
const publicationsRouter = express.Router();
const citedResearchRouter = require('./publications/citedResearchRoutes');

publicationsRouter.use('/citedResearch', citedResearchRouter);

module.exports = publicationsRouter;
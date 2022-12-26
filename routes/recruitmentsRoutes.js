const express = require('express');
const recruitmentsRouter = express.Router();

const recruitmentUpdatesRouter = require('./recruitments/recruitmentUpdatesRoutes');
recruitmentsRouter.use('/updates', recruitmentUpdatesRouter);

module.exports = recruitmentsRouter;
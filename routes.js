const mainRouter = require('express').Router();

// routes
const admissionsRoutes = require('./routes/admissionsRoutes');
const researchRoutes = require('./routes/researchRoutes');
const recruitmentsRoutes = require('./routes/jobsRoutes');
const alumniRoutes = require('./routes/alumniRoutes');

mainRouter.use('/admissions', admissionsRoutes);
mainRouter.use('/research', researchRoutes);
mainRouter.use('/recruitments', recruitmentsRoutes);
mainRouter.use('/alumni', alumniRoutes);

module.exports = mainRouter;

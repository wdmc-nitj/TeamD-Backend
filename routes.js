const mainRouter = require('express').Router();

// routes
const admissionsRoutes = require('./routes/admissionsRoutes');
const MOUsRoutes = require('./routes/MOUsRoutes');
const researchRoutes = require('./routes/researchRoutes');
const recruitmentsRoutes = require('./routes/recruitmentsRoutes');
const alumniRoutes = require('./routes/alumniRoutes');

mainRouter.use('/admissions', admissionsRoutes);
mainRouter.use('/MOUs', MOUsRoutes);
mainRouter.use('/research', researchRoutes);
mainRouter.use('/recruitments', recruitmentsRoutes);
mainRouter.use('/alumni', alumniRoutes);

module.exports = mainRouter;

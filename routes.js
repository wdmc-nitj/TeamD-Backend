const mainRouter = require('express').Router();

// routes
const admissionsRoutes = require('./routes/admissionsRoutes');
const MOUsRoutes = require('./routes/MOUsRoutes');
const researchRoutes = require('./routes/researchRoutes');
const recruitmentsRoutes = require('./routes/recruitmentsRoutes');

mainRouter.use('/admissions', admissionsRoutes);
mainRouter.use('/MOUs', MOUsRoutes);
mainRouter.use('/research', researchRoutes);
mainRouter.use('/recruitments', recruitmentsRoutes);

module.exports = mainRouter;
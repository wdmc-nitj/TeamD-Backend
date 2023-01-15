const express = require('express');
const app = express();


const admissionsRoutes = require('./routes/admissionsRoutes');
const MoURoutes = require('./routes/MoURoutes');
const researchRoutes = require('./routes/researchRoutes');
const recruitmentsRoutes = require('./routes/recruitmentsRoutes');


// routes
app.use('/admissions', admissionsRoutes);
app.use('/MoU', MoURoutes);
app.use('/research', researchRoutes);
app.use('/recruitments', recruitmentsRoutes);


module.exports = app;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniLandingPageSchema = new Schema({
    description: {
        type: String,
    },
    totalAlumni: {
        type: String,
    },
    chapters: {
        type: String,
    },
    highestDonation: {
        type: String,
    },
});

const AlumniLandingPage = mongoose.model(
    'AlumniLandingPage',
    AlumniLandingPageSchema
);
module.exports = AlumniLandingPage;

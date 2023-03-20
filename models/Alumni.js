const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passingYear: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    currentCompany: {
        type: String,
    },
    positionInCurrentCompany: {
        type: String,
    },
    socials: {
        type: String,
    },
    permanentAddress: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    dateOfBirth: {
        type: String, // DD-MM-YYYY
    },
});

const Alumni = mongoose.model('Alumni', AlumniSchema);
module.exports = Alumni;

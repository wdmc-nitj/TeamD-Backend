const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recruitmentUpdateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['faculty', 'nonFaculty', 'faculty-contract', 'nonFaculty-contract']
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
});

const RecruitmentUpdate = mongoose.model('RecruitmentUpdate', recruitmentUpdateSchema);

module.exports = RecruitmentUpdate;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniGivingBackSchema = new Schema(
    {
        purposes: {
            type: [String],
        },
        utilizations: {
            infrastructure: {
                major: {
                    type: [{ title: String, description: String }],
                },
                minor: {
                    type: [{ title: String, description: String }],
                },
            },
            facilities: {
                type: [{ title: String, description: String }],
            },
            students: {
                type: [{ title: String, description: String }],
            },
            academics: {
                type: [{ title: String, description: String }],
            },
            collaboration: {
                type: [{ title: String, description: String }],
            },
            establishmentOfCentreOfExcellence: {
                type: [{ title: String, description: String }],
            },
            innovationPrograms: {
                type: [{ title: String, description: String }],
            },

            communityOutreach: {
                type: [{ title: String, description: String }],
            },
            facultyWelfare: {
                type: [{ title: String, description: String }],
            },
            environmentPrograms: {
                type: [{ title: String, description: String }],
            },
        },
    },
    { timestamps: true }
);

const AlumniGivingBack = mongoose.model(
    'AlumniGivingBack',
    AlumniGivingBackSchema
);
module.exports = AlumniGivingBack;

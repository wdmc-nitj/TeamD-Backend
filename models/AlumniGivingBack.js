const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniGivingBackSchema = new Schema(
    {
        purposes: {
            type: [String],
        },
        utilizations: {
            type: [{ title: String, subTitle: String, description: String }],
        },
    },
    { timestamps: true }
);

const AlumniGivingBack = mongoose.model(
    'AlumniGivingBack',
    AlumniGivingBackSchema
);
module.exports = AlumniGivingBack;

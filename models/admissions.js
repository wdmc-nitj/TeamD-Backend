const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    visible: {
        type: Boolean,
        default: true
    },
    degree: {
        type: String,
        required: true,
        enum: ['BTECH', 'MTECH-CCMT', 'MTECH-SELF', 'MSC', 'MBA', 'PHD', 'FOREIGN']
    }
}, { timestamps: true });

const linkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const update = mongoose.model('admissionUpdate', updateSchema);
const link = mongoose.model('admissionLink', linkSchema);

module.exports = {
    update,
    link
}
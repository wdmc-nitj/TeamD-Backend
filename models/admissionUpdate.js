const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ugUpdateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    enabled: {
        type: Boolean,
        default: true
    },
    degree: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ugUpdate = mongoose.model('ugUpdate', ugUpdateSchema);
module.exports = ugUpdate;
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
    enabled: {
        type: Boolean,
        default: true
    },
    degree: {
        type: String,
        required: true
    }
}, { timestamps: true });

const update = mongoose.model('update', updateSchema);
module.exports = {
    update
}
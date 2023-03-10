const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SponsoredProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    yearOfSanctionStart: {
        type: Number,
        required: true
    },
    fundingAgency: {
        type: String,
        required: true
    },
    amountInLakhs: {
        type: Number,
        required: true
    },
    visible: {
        type: Boolean,
        default: true
    }
    }, { timestamps: true });

const SponsoredProject = mongoose.model('SponsoredProject', SponsoredProjectSchema);

module.exports = SponsoredProject;
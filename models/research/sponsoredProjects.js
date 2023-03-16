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
    },
    disabledAt:{
        type: Date,
        default: null
    },
    srcName:{
        type:String,
        default: null
    },
    srcDept:{
        type:String,
        default:null
    },
    srcDes :{
        type:String,
        default: null
    },
    srcEmail :{
        type:String,
        default:null
    },
    order :{
        type:Number,
        default:0
    }
    }, { timestamps: true });

const SponsoredProject = mongoose.model('SponsoredProject', SponsoredProjectSchema);

module.exports = SponsoredProject;
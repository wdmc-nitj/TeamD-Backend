const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsultancySchema = new Schema({
    facultyName: {
        type: String,
        required: true
    },
    clientOrg: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    amountDigits: {
        type: Number,
        required: true
    },
    amountWords: {
        type: String,
        required: true
    },
    startYear: {
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
    order :{
        type:Number,
        default:0
    }
}, { timestamps: true });

const Consultancy = mongoose.model('Consultancy', ConsultancySchema);

module.exports = Consultancy;
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
});

const RecruitmentUpdate = mongoose.model('RecruitmentUpdate', recruitmentUpdateSchema);

module.exports = RecruitmentUpdate;
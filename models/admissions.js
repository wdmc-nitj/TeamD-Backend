const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    title: {
        type: String,
        required: true,
        notEmpty: true
    },
    link: {
        type: String,
        // validates as a URL if is not empty
        validate: {
            validator: function (v) {
                return v.length == 0 || /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    visible: {
        type: Boolean,
        default: true,
        required: true,
        // validates as a boolean
        validate: {
            validator: function (v) {
                return typeof v === 'boolean';
            },
            message: props => `${props.value} is not a valid boolean!`
        }
    },
    degree: {
        type: String,
        required: true,
        notEmpty: true,
        enum: ['BTECH', 'MTECH-CCMT', 'MTECH-SELF', 'MSC', 'MBA', 'PHD', 'FOREIGN'],        
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

const linkSchema = new Schema({
    title: {
        type: String,
        required: true,
        notEmpty: true
    },
    link: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    visible: {
        type: Boolean,
        default: true,
        required: true,
        notEmpty: true,
        // validates as a boolean
        validate: {
            validator: function (v) {
                return typeof v === 'boolean';
            },
            message: props => `${props.value} is not a valid boolean!`
        }
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

const helplineSchema = new Schema({
    degree: {
        type: String,
        required: true,
        notEmpty: true,
        enum: ['BTECH', 'MTECH-CCMT', 'MTECH-SELF', 'MSC', 'MBA', 'PHD', 'FOREIGN']
    },
    number: {
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    name: {
        type: String,
        required: true,
        notEmpty: true
    },
    languages: {
        type: [String],
        required: true,
        // validates as an array of strings
        validate: {
            validator: function (v) {
                return Array.isArray(v) && v.every((item) => typeof item === 'string' && item.length > 0);
            },
            message: props => `${props.value} is not a valid array of strings!`
        }
    },
    startTime: {
        // 12 hour format
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return /\d{2}:\d{2} [AP]M/.test(v);
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
    endTime: {
        // 12 hour format
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return /\d{2}:\d{2} [AP]M/.test(v);
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
    visible: {
        type: Boolean,
        required: true,
        default: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return typeof v === 'boolean';
            },
            message: props => `${props.value} is not a valid boolean!`
        }
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

const helpline = mongoose.model('admissionHelpline', helplineSchema);
const link = mongoose.model('admissionLink', linkSchema);
const update = mongoose.model('admissionUpdate', updateSchema);


module.exports = {
    helpline,
    link,
    update
}
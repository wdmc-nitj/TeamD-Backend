const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


const link = mongoose.model('admissionLink', linkSchema);


module.exports = link;
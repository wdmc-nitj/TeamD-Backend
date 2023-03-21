const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    visibilityChangedAt: {
        type: Date,
        default: null
    },
    srcName: {
        type: String,
        default: null
    },
    srcDept: {
        type: String,
        default: null
    },
    srcDes: {
        type: String,
        default: null
    },
    srcEmail: {
        type: String,
        default: null
    },
    order: {
        type: Number,
        default: 0
    },
    new: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const helpline = mongoose.model('admissionHelpline', helplineSchema);

module.exports = helpline;
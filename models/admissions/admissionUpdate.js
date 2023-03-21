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

const update = mongoose.model('admissionUpdate', updateSchema);

module.exports = update;
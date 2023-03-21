const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoUSchema = new Schema({
    orgName: {  // name of the organization
        type: String,
        required: true,
        notEmpty: true
    },
    dateOfMoU: {     // date of MoU
        type: String,
        required: true,
        notEmpty: true,
        validate: {
            // dd-mm-yyyy
            validator: function (v) {
                const dateRegex = /^\d{1,2}-\d{1,2}-\d{4}$/;
                return dateRegex.test(v);
            },
            message: props => `${props.value} is not a valid date! Please enter in dd-mm-yyyy format.`
        }
    },
    validity: {    // validity of MoU
        type: String,
        required: true,
        notEmpty: true
    },
    category: {     // category of MoU
        type: String,
        required: true,
        notEmpty: true,
        enum: ['industries', 'indian_institutes', 'international_institutes']
    },
    visible: {  // visibility of MoU
        type: Boolean,
        default: true,
        required: true,
        notEmpty: true,
        validate: {
            validator: function (v) {
                return typeof v === 'boolean';
            }
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
    newGIF: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('MoU', MoUSchema);

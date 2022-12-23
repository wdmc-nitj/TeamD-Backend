const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    title: {
        type: String,
        required: true,
        validator: {
            validator: function (v) {
                return v.length > 0;
            },
            message: props => `${props.value} is not a valid title!`
        }
    },
    link: {
        type: String,
        // validates as a URL if is not empty
        validator: {
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
        validator: {
            validator: function (v) {
                return typeof v === 'boolean';
            },
            message: props => `${props.value} is not a valid boolean!`
        }
    },
    degree: {
        type: String,
        required: true,
        enum: ['BTECH', 'MTECH-CCMT', 'MTECH-SELF', 'MSC', 'MBA', 'PHD', 'FOREIGN'],
        validator: {
            validator: function (v) {
                return v.length > 0;
            },
            message: props => `${props.value} is not a valid degree!`
        }
    },
}, { timestamps: true });

const linkSchema = new Schema({
    title: {
        type: String,
        required: true,
        validator: {
            validator: function (v) {
                return v.length > 0;
            },
            message: props => `${props.value} is not a valid title!`
        }
    },
    link: {
        type: String,
        required: true,
        validator: {
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
        // validates as a boolean
        validator: {
            validator: function (v) {
                return typeof v === 'boolean';
            },
            message: props => `${props.value} is not a valid boolean!`
        }
    },
}, { timestamps: true });

const update = mongoose.model('admissionUpdate', updateSchema);
const link = mongoose.model('admissionLink', linkSchema);

module.exports = {
    update,
    link
}
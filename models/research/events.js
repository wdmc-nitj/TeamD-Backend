const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {   // title of event
        type: String,
        required: true
    },
    dateTime: {   // date and time of event
        type: Date,
        required: true
    },
    venue: {   // venue of event
        type: String,
        required: true
    },
    organiser: {   // organiser of event
        type: String,
        required: true
    },
    category: {     // category of Events
        type: String,
        required: true,
        enum: ['conference', 'seminar', 'stc_fdp', 'workshop']
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
});

const event = mongoose.model('event', eventSchema);

module.exports = event;
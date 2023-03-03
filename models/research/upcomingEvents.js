const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upcomingEventSchema = new Schema({
    title: {   // title of event
        type: String,
        required: true
    },
    dateOfEvent: {
        type: String,
        required: true,
        validate: {
            // dd-mm-yyyy
            validator: function (v) {
                const dateRegex = /^\d{1,2}-\d{1,2}-\d{4}$/;
                return dateRegex.test(v);
            },
            message: props => `${props.value} is not a valid date! Please enter in dd-mm-yyyy format.`
        }

    },
    venue: {   // venue of event
        type: String,
        required: true
    },
    organiser: {   // organiser of event
        type: String,
        required: true
    },
    timeOfEvent: {   // time of event
        type: String,
        required: true,
        validate: {
            // hh:mm 12 hour format with AM/PM
            validator: function (v) {
                const timeRegex = /^(1[0-2]|0?[1-9]):([0-5]?[0-9])\s?(AM|PM|am|pm)$/;
                return timeRegex.test(v);
            },
            message: props => `${props.value} is not a valid time! Pleae enter in hh:mm fomat with AM/PM.`
        }
    },
    category: {     // category of Events
        type: String,
        required: true,
        enum: ['conferences','seminars' ,'stc_fdp','workshops']
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
});

const UpcomingEvent = mongoose.model('UpcomingEvent', upcomingEventSchema);

module.exports = UpcomingEvent;
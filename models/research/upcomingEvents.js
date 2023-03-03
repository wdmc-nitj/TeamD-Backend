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
            // hh:mm
            validator: function (v) {
                const timeRegex = /^\d{1,2}:\d{2}$/;
                return timeRegex.test(v);
            },
            message: props => `${props.value} is not a valid time! Please enter in hh:mm format.`
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
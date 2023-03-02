const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upcomingEventSchema = new Schema({
    title: {   // title of event
        type: String,
        required: true
    },
    dateofEvent: {
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
    timeofEvent: {   // time of event
        type: String,
        required: true
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
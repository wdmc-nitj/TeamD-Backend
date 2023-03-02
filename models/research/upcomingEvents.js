const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upcomingEventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
});

const UpcomingEvent = mongoose.model('UpcomingEvent', upcomingEventSchema);

module.exports = UpcomingEvent;
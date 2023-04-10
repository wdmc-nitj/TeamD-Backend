const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniEventsSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        },
        venue: {
            type: String,
        },
    },
    { timestamps: true }
);

const AlumniEvents = mongoose.model('AlumniEvent', AlumniEventsSchema);
module.exports = AlumniEvents;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const API_KeySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    key: {
        type: String,
        required: true
    }
});

const API_Key = mongoose.model('API_Key', API_KeySchema);

module.exports = API_Key;
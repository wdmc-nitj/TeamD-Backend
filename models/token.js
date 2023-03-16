const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true
    }
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;
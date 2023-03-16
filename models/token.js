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
    },
    disabledAt:{
        type: Date,
        default: null
    },
    srcName:{
        type:String,
        default: null
    },
    srcDept:{
        type:String,
        default:null
    },
    srcDes :{
        type:String,
        default: null
    },
    order :{
        type:Number,
        default:0
    }
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;
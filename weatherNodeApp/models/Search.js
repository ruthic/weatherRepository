const mongoose = require('mongoose');
const User = require('./User')
const searchSchema = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    dt: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


})
module.exports = mongoose.model("Search", searchSchema)
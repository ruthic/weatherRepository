const mongoose = require('mongoose');
const Search=require('./Search')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    searchesHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Search'
        }
    ]
})

module.exports = mongoose.model('User', userSchema)

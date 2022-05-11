'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewUserSchema = new Schema({
    username: {
        type: String,
        required: 'Enter username'
    },
    useremail: {
        type: String,
        required: 'Enter useremail'
    },
    userpassword: {
        type: String,
        required: 'Enter userpassword'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('NewUsers', NewUserSchema);
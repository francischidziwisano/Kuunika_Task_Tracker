'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NameTestSchema = new Schema({
    name: {
        type: String,
        required: 'Enter Firstname'
    },
    email: {
        type: String,
        required: 'Enter email'
    },
    password: {
        type: String,
        required: 'Enter Physical Address'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('NamesTest', NameTestSchema);
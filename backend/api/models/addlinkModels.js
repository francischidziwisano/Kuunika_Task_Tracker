'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddLinkSchema = new Schema({
    Category: {
        type: String,
        required: 'Category'
    },
    Group_Name: {
        type: String,
        required: 'Group_Name'
    },
    URL: {
        type: String,
        required: 'URL'
    },
    Date_Added: {
        type: Date,
        default: Date.now
    },    
    User: {
        type: String,
        required: 'Email'
    },    
    Phone_Number: {
        type: String,
        required: 'Email'
    },    
    Email: {
        type: String,
        required: 'Email'
    },    
    members: {
        type: String,
        
    },    
    Status: {
        type: String 
    }
});

module.exports = mongoose.model('AddLinks', AddLinkSchema);
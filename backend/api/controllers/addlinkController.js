'use strict'

const mongoose = require('mongoose');
const AddLink = mongoose.model('AddLinks');

exports.list_all_addlinks = function (req, res) {
    AddLink.find({}, function(err, addlink) {
        if (err)
        res.send(err);
        res.json(addlink);
    });
};

exports.create_a_addlink = function (req, res) {
    try {
        const addlink = new AddLink(
            req.body
        );
        addlink.save(function(err, addlink){
            if (err)
            res.send(err);
            res.json(addlink)
        }); 
    }catch (error) {

    }
};

exports.read_a_addlink = function (req, res) {
    AddLink.findById(req.params.addlinkId, function(err, addlink){
        if (err)
        res.send(err);
        res.json(addlink);
    });
};
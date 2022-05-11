'use strict'

const mongoose = require('mongoose');
const NameTest = mongoose.model('NamesTest');

exports.list_all_namestest = function (req, res) {
    NameTest.find({}, function(err, nametest) {
        if (err)
        res.send(err);
        res.json(nametest);
    });
};

exports.create_a_nametest = function (req, res) {
    try {
        const nametest = new NameTest(
            req.body
        );
        nametest.save(function(err, nametest){
            if (err)
            res.send(err);
            res.json(nametest)
        }); 
    }catch (error) {

    }
};

exports.read_a_nametest = function (req, res) {
    NameTest.findById(req.params.nametestId, function(err, nametest){
        if (err)
        res.send(err);
        res.json(nametest);
    });
};
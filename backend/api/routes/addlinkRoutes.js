'use strict'

module.exports = function(app){
    const addlink = require('../controllers/addlinkController')

    app.route('/addlinks')
    .get(addlink.list_all_addlinks)
    .post(addlink.create_a_addlink);

    app.route('addlinks/:addlinkId')
    .get(addlink.read_a_addlink);
};
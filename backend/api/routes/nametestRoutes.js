'use strict'

module.exports = function(app){
    const nametest = require('../controllers/nametestController')
    const addlink = require('../controllers/addlinkController')
    const adduser = require('../controllers/adduserController')
    const login = require('../controllers/loginController')

    app.route('/namestest')
    .get(nametest.list_all_namestest)
    .post(nametest.create_a_nametest);

    app.route('namestest/:nametestId')
    .get(nametest.read_a_nametest);

    //Adding group links
    app.route('/addlinks')
    .get(addlink.list_all_addlinks)
    .post(addlink.create_a_addlink);

    app.route('addlinks/:addlinkId')
    .get(addlink.read_a_addlink);

    //Adding users
    app.route('/adduser')
    .get(adduser.list_all_users)
    .post(adduser.create_a_adduser);

    app.route('adduser/:adduserId')
    .get(adduser.read_a_user);

    app.route('/login')
    .post(login.login_user)
    .get(login.login_user)
};
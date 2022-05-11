const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nametestRoutes = require('./api/routes/nametestRoutes');
const nametestModels = require('./api/models/nametestModels');
const addlinkModels = require('./api/models/addlinkModels');
const newuserModels = require('./api/models/newuserModels');
const bodyParser = require('body-parser');

const app = express();

app.use(cors())

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SCS');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/nametestRoutes');
nametestRoutes(app);
//addlinkRoutes(app);

app.listen(port);
console.log('User list started  on:' + port);






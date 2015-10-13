// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var config = require('./config'); // get our config file
var User   = require('./app/models/user');
var Channel   = require('./app/models/channel');
var apiRoutes = express.Router();

//api
var channels = require('./app/api/channels');
var auth = require('./app/api/auth');
var users = require('./app/api/users');

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
var dbURI = config.database;
mongoose.connect(dbURI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected, ',dbURI);
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// auth api
app.get('/', auth.home);
apiRoutes.post('/auth', auth.authenticate);
apiRoutes.post('/register', auth.register);
apiRoutes.get('/me', auth.isAuth, auth.me );

// users
apiRoutes.get('/users', auth.isAuth, users.getUsers );

// channels
apiRoutes.get('/channels', auth.isAuth , channels.getList);
apiRoutes.post('/channels', auth.isAuth, channels.postChannel);
apiRoutes.get('/channels/:id', auth.isAuth, channels.getChannelId);
apiRoutes.delete('/channels/:id', auth.isAuth, channels.deleteChannelId);

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);

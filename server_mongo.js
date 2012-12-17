var express = require('express')
  , connect = require('connect')
  , io = require('socket.io')
  , hbs = require('hbs')
  , pg = require('pg')
  , mongo = require('mongodb')
  , mongoose = require('mongoose')
  , mongooseTypes = require('mongoose-types')
  , passport = require('passport')
  , passport_local = require('passport-local')
  , crypto = require('crypto')
  , nodemailer = require('nodemailer')
  , uuid = require('node-uuid')
  , routes = require('./routes');

mongoose.connect('');
mongooseTypes.loadTypes(mongoose);

var MODE = process.env.NODE_ENV || 'development';

var Email = mongoose.SchemaTypes.Email
  , URL = mongoose.SchemaTypes.Url
  , LocalStrategy = passport_local.Strategy;

var server = module.exports = express.createServer()
  , io = io.listen(server);

// Configuration

server.configure(function(){
  server.set('views', __dirname + '/views');
  server.set('view engine', 'hbs');
  server.use(express.bodyParser());
  server.use(express.methodOverride());
  server.use(express.cookieParser());
  server.use(express.session({ secret: 'your secret here' }));
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(server.router);
  server.use(express.static(__dirname + '/public'));
});

server.configure('development', function(){
  server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

server.configure('production', function(){
  server.use(express.errorHandler());
});

// Mongoose

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
  
function validatePresenceOf(value) {
  return value && value.length;
}

var UserSchema = new Schema({
    email                 : {
      type                  : Email
    , validate              : [ validatePresenceOf, 'An email is required.']
    , index                 : { unique: true }
    , required              : true
    }
  , hashed_password         : String
  , salt                    : String
  , displayName             : String
  , givenName               : String
  , familyName              : String
  , middleName              : String
  , created_date            : Date
  , modified_date           : Date
  , type                    : String
  , api_code                : String
  , workspaces              : [{ type: ObjectId, ref: 'Workspace' }]
  , connections             : [{ type: ObjectId, ref: 'User'}]
  , activiy                 : [{}]
});

var WorkspaceSchema = new Schema({
    title                   : String
  , created_date            : Date
  , modified_date           : Date
  , created_by              : { type: ObjectId, ref: 'User' }
  , type                    : String
  , users                   : [{ type: ObjectId, ref: 'User' }]
  , projects                : [{ type: ObjectId, ref: 'Project' }]
  , activity                : [{}]
});

var ProjectSchema = new Schema({
    title                   : String
  , created_date            : Date
  , modified_date           : Date
  , created_by              : { type: ObjectId, ref: 'User' }
  , start_date              : Date
  , end_date                : Date
  , desc                    : {}
  , tags                    : [ String ]
  , activity                : [{}]
  , complete                : Boolean
  , status                  : String
  , archive                 : Boolean
  , privacy                 : String
  , workspace               : { type: ObjectId, ref: 'Workspace' }
  , users                   : [{ type: ObjectId, ref: 'User' }]
  , followers               : [{ type: ObjectId, ref: 'User' }]
  , tasks                   : [{ type: ObjectId, ref: 'Task' }]
  , links                   : []
  , activity                : [{}]
});

var TaskSchema = new Schema({
    title                   : String
  , created_date            : Date
  , modified_date           : Date
  , created_by              : { type: ObjectId, ref: 'User' }
  , start_date              : Date
  , end_date                : {}
  , tags                    : [ String ]
  , notes                   : {}
  , complete                : Boolean
  , status                  : String
  , milestone               : Boolean
  , project                 : { type: ObjectId, ref: 'Project' }
  , assignees               : [{ type: ObjectId, ref: 'User' }]
  , followers               : [{ type: ObjectId, ref: 'User' }]
  , children                : [{ type: ObjectId, ref: 'Task' }]
  , links                   : []
  , activity                : [{}]
});

UserSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.method('authenticate', function(plainText) {
  return this.encryptPassword(plainText) === this.hashed_password;
});

UserSchema.method('makeSalt', function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
});

UserSchema.method('encryptPassword', function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
});

UserSchema.pre('save', function(next) {
  if(!validatePresenceOf(this.hashed_password)) next(new Error('Invalid Password'));
  else {
    next();
  }
});

// Models

var mUser = mongoose.model('User', UserSchema)
  , mWorkspace = mongoose.model('Workspace', WorkspaceSchema)
  , mProject = mongoose.model('Project', ProjectSchema)
  , mTask = mongoose.model('Task', TaskSchema);

// Authenticate

passport.use(new LocalStrategy(
  function(email, pw, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      if (!user.authenticate(pw)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
));

// Actions

// Socket.io

// Routes

server.get('/', routes.index);

server.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", server.address().port, server.settings.env);
});
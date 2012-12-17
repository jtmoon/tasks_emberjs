var express = require('express')
  , connect = require('connect')
  , io = require('socket.io')
  , hbs = require('hbs')
  , fs = require('fs')
  , pg = require('pg')
  , passport = require('passport')
  , passport_local = require('passport-local')
  , crypto = require('crypto')
  , nodemailer = require('nodemailer')
  , uuid = require('node-uuid')
  , aws2js = require('aws2js')
  , routes = require('./routes')
  , initDB = require('./db/init');

var MODE = process.env.NODE_ENV || 'development';

var LocalStrategy = passport_local.Strategy;

var server = module.exports = express.createServer()
  , io = io.listen(server);


//Database url
if(MODE === 'production') {
  //production
  var connectionString = "";
}
else if(MODE === 'development') {
  //dev
  var connectionString = "";
}

var client = new pg.Client(connectionString);
var AWSAccessKeyID = ''
  , AWSSecretKey = '';

var s3 = aws2js.load('s3', AWSAccessKeyID, AWSSecretKey);
var files = {}; //For file uploads

s3.setBucket('');
s3Path = '';

// Nodemailer
var sesTransport = nodemailer.createTransport('SES', {
      AWSAccessKeyID:       AWSAccessKeyID
    , AWSSecretKey:         AWSSecretKey
    , ServiceURL:           ''
});

function sendInviteEmail(targetEmail, sender, callback) {
  var messageHtml = ''
    , subject = 'Invitation from ' + sender.fullName
    , inviteEmailOptions = {
        from                    : ''
      , to                      : targetEmail
      , subject                 : subject
      , generateTextFromHTML    : true
      , html                    : messageHtml
      };
  sesTransport.sendMail(inviteEmailOptions, function(err, response) {
    if(err) callback(err);
    else callback(err, response);
  });
}

client.connect();

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

// Authenticate

passport.serializeUser(function(user, done) {
  done(null, user.user_id);
});

passport.deserializeUser(function(user_id, done) {
  //Confirm user is the authorized user
  findUserById(user_id, function(err, user) {
    return done(null, user);
  });
});

passport.use(new passport_local.Strategy(
  {
    usernameField           : 'email'
  , passwordField           : 'pw'
  }
, function(email, password, done) {
    findUserByEmailAdmin(email, function(err, user) {
      if(err) return done(err);
      if(!user) return done(null, false, { message: 'Unknown User' });
      if(!authenticate(password, user.salt, user.hashed_password)) {
        return done(null, false, { message: 'Invalid Password' });
      }
      delete user.salt;
      delete user.hashed_password;
      return done(null, user);
    });
  }
));

function restrictToSelf(req, res, next) {
  if(req.params.user_id === req.user.user_id) next();
  else res.redirect('/');
}

// Actions

function generateInviteCode(userId) {
  var salt = Math.round((new Date().valueOf() * Math.random())) + ''
    , hmac = crypto.createHmac('sha1', salt)
    , code = hmac.digest('hex');
  return code;
}

function makeSalt() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
}

function encryptPassword(password, salt) {
  return crypto.createHmac('sha1', salt).update(password).digest('hex');
}

function authenticate(password, salt, hashed_password) {
  return encryptPassword(password, salt) === hashed_password;
}

function generateOrConditional(column_name, ids) {
  var result = [];
  for(var x=0; x<ids.length;x++) {
    var string = column_name + " " + "=" + " '" + ids[x] + "'";
    result.push(string);
  }
  return result.join(" OR ");
}

function keysToString(hash) {
  var stringArray = []
    , string = '';
  for(var key in hash) {
    stringArray.push("'" + key + "'");
  }
  string = stringArray.join(", ");
  return string;
}

function keyValsToArray(hash) {
  var array = [];
  for(var key in hash) {
    array.push(hash[key]);
  }
  return array;
}

function keyValsString(hash) {
  var stringArray = []
    , string = '';
  for(var key in hash) {
    if(hash[key] === null || hash[key] === 'null') stringArray.push(key + "=" + hash[key]);
    else if(key === 'title' || key === 'notes' || 'description') stringArray.push(key + "=" + "$$" + hash[key] + "$$");
    else stringArray.push(key + "=" + "'" + hash[key] + "'");
  }
  string = stringArray.join(", ");
  return string;
}

function generateValPlaceholders(length) {
  var placeholdersArray = []
    , placeholders = '';
  for(var x=1; x<=length; x++) {
    placeholdersArray.push('$' + x);
  }
  placeholders = 'values(' + placeholdersArray.join(", ") + ')';
  return placeholders;
}

function addObjectId(array, key, value) {
  var newArray = array;
  for(var x=0; x<array.length; x++) {
    newArray[x][key] = value;
  }
  return newArray;
}

function acceptWorkspaceInvitation(invite) {
  var acceptQuery = [
        "INSERT INTO workspaceUsers("
      , "user_id_fk,"
      , "workspace_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ")
    , deleteQuery = [
        "DELETE FROM workspaceInvitations"
      , "WHERE"
      , "invitation_id = $1"
      ].join(" ");
  client.query({
    text            : acceptQuery
  , values          : [
      invite.sent_to_id
    , invite.workspace_id_fk
    ]
  }
  , function(err, result) {
      if(err) console.log(err);
      client.query({
        text          : deleteQuery
      , values        : [
          invite.invitation_id
        ]
      });
  });
}

//CRUD actions
//CREATE
function createUser(email, pw, callback) {
  var user_id = uuid.v4()
    , salt = makeSalt()
    , created_date = new Date()
    , api_code = uuid.v4()
    , hashed_password = encryptPassword(pw, salt)
    , createNewUserQuery = [
        "INSERT INTO users("
      , "user_id,"
      , "salt,"
      , "created_date,"
      , "api_code,"
      , "email,"
      , "user_type,"
      , "hashed_password"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4,"
      , "$5,"
      , "$6,"
      , "$7"
      , ")"
      ].join(" ");
  client.query({
    name            : 'create new user'
  , text            : createNewUserQuery
  , values          : [
      user_id
    , salt
    , created_date
    , api_code
    , email
    , 'user'
    , hashed_password
    ]
  }
  , function(err, result) {
      var personalWorkspace = {
            workspace_id        : uuid.v4()
          , title               : 'Personal'
          , created_by_fk       : user_id
          , created_date        : new Date
          };
      console.log(err);
      console.log(result);
      createWorkspace(personalWorkspace, function(err, result) {
        if(err) console.log(err);
      });
      callback(err, result);
  });
}

function createWorkspace(newWorkspace, callback) {
  //Creates a new workspace for the user.
  //Default values are set on the client-side.
  //TODO:
  //2012.10.8   Check to make sure the uuid of the workspace is unique.
  //            If not unique, generate a new uuid and check again.
  var createNewWorkspaceQuery = [
        "INSERT INTO workspaces("
      , "workspace_id,"
      , "title,"
      , "created_by_fk,"
      , "created_date"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4"
      , ")"
      ].join(" ")
    , createWorkspaceUserQuery = [
        "INSERT INTO workspaceUsers("
      , "user_id_fk,"
      , "workspace_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ");
  client.query({
    name            : 'create new workspace'
  , text            : createNewWorkspaceQuery
  , values          : [
        newWorkspace.workspace_id
      , newWorkspace.title
      , newWorkspace.created_by_fk
      , newWorkspace.created_date
    ]
  }
  , function(err, result) {
      client.query({
        text          : createWorkspaceUserQuery
      , name          : 'create new workspace user'
      , values        : [
            newWorkspace.created_by_fk
          , newWorkspace.workspace_id
        ]
      });
      callback(err, result);
  });
}

function createProject(newProject, callback) {
  var createNewProjectQuery = [
        "INSERT INTO projects("
      , "project_id,"
      , "title,"
      , "created_by_fk,"
      , "created_date,"
      , "workspace_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4,"
      , "$5"
      , ")"
      ].join(" ")
    , createWorkspaceProjectQuery = [
        "INSERT INTO workspaceProjects("
      , "workspace_id_fk,"
      , "project_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ");
  client.query({
    name              : 'create new project'
  , text              : createNewProjectQuery
  , values            : [
      newProject.project_id
    , newProject.title
    , newProject.created_by_fk
    , newProject.created_date
    , newProject.workspace_id_fk
    ]
  }
  , function(err, result) {
      client.query({
        text            : createWorkspaceProjectQuery
      , values          : [
          newProject.workspace_id_fk
        , newProject.project_id
        ]
      });
      callback(err, result);
  });
}

function createTask(newTask, callback) {
  console.log(newTask);
  var createNewTaskQuery = [
        "INSERT INTO tasks("
      , "task_id,"
      , "title,"
      , "created_by_fk,"
      , "created_date,"
      , "project_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4,"
      , "$5"
      , ")"
      ].join(" ")
    , createProjectTaskQuery = [
        "INSERT INTO projectTasks("
      , "project_id_fk,"
      , "task_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ");
  client.query({
    name              : 'create new task'
  , text              : createNewTaskQuery
  , values            : [
      newTask.task_id
    , newTask.title
    , newTask.created_by_fk
    , newTask.created_date
    , newTask.project_id_fk
    ]
  }
  , function(err, result) {
    client.query({
      text            : createProjectTaskQuery
    , values          : [
        newTask.project_id_fk
      , newTask.task_id
      ]
    });
    callback(err, result);
  });
}

function createFile(file, callback) {
  var createNewFileQuery = [
        "INSERT INTO files("
      , "file_id,"
      , "path,"
      , "filename,"
      , "file_type,"
      , "file_size,"
      , "created_date,"
      , "owner_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4,"
      , "$5,"
      , "$6,"
      , "$7"
      , ")"
      ].join(" ");
  client.query({
    name              : 'create new file'
  , text              : createNewFileQuery
  , values            : [
      file.file_id
    , file.path
    , file.filename
    , file.file_type
    , file.file_size
    , file.created_date
    , file.owner_id_fk
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result);
  });
}

function createProjectFile(file_id, project_id, callback) {
  var query = [
        "INSERT INTO projectFiles("
      , "file_id_fk,"
      , "project_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ");
  client.query({
    text              : query
  , values            : [
      file_id
    , project_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result);
  });
}

function createTaskFile(file_id, task_id, callback) {
  var query = [
        "INSERT INTO taskFiles("
      , "file_id_fk,"
      , "task_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ");
  client.query({
    text              : query
  , values            : [
      file_id
    , task_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result);
  });
}

function createEvent(event, callback) {
}

function createComment(comment, callback) {
}

function createConnection(firstUser, secondUser, callback) {
  var createNewConnectionQuery = [
        "INSERT INTO userConnections("
      , "first_user_id_fk,"
      , "second_user_id_fk"
      , ")"
      , "values("
      , "$1,"
      , "$2"
      , ")"
      ].join(" ");
  client.query({
    name              : 'create new user connection'
  , text              : createNewConnectionQuery
  , values            : [
      firstUser.user_id
    , secondUser.user_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result);
  });
}

function createWorkspaceInvitation(invitation, callback) {
  var createNewInvitationQuery = [
        "INSERT INTO workspaceInvitations("
      , "invitation_id,"
      , "from_fk,"
      , "sent_to,"
      , "workspace_id_fk,"
      , "created_date,"
      , "read"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4,"
      , "$5,"
      , "$6"
      , ")"
      ].join(" ");
  client.query({
    name              : 'create new workspace invitation'
  , text              : createNewInvitationQuery
  , values            : [
      invitation.invitation_id
    , invitation.from_fk
    , invitation.sent_to
    , invitation.workspace_id_fk
    , invitation.created_date
    , invitation.read
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result);
  });
}

function createProjectInvitation(invitation, callback) {
  var createNewInvitationQuery = [
        "INSERT INTO projectInvitations("
      , "invitation_id,"
      , "from_fk,"
      , "sent_to,"
      , "project_id_fk,"
      , "created_date,"
      , "read"
      , ")"
      , "values("
      , "$1,"
      , "$2,"
      , "$3,"
      , "$4,"
      , "$5,"
      , "$6"
      , ")"
      ].join(" ");
  client.query({
    name              : 'create new project invitation'
  , text              : createNewInvitationQuery
  , values            : [
      invitation.invitation_id
    , invitation.from_fk
    , invitation.sent_to
    , invitation.project_id_fk
    , invitation.created_date
    , invitation.read
    ]
  }
  , function(err, result) {
      console.log(err);
      console.log(result);
      if(err) callback(err);
      else callback(err, result);
  });
}

//READ
function findUserByEmailAdmin(email, callback) {
  var query = [
        "SELECT"
      , "user_id,"
      , "email,"
      , "givenName,"
      , "familyName,"
      , "middleName,"
      , "displayName,"
      , "created_date,"
      , "modified_date,"
      , "user_type,"
      , "api_code,"
      , "salt,"
      , "hashed_password"
      , "FROM users WHERE email = $1"
      ].join(" ");
  client.query(
    query
  , [ email ]
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findUserByEmail(email, callback) {
  var query = [
        "SELECT"
      , "user_id,"
      , "email,"
      , "givenName,"
      , "familyName,"
      , "middleName,"
      , "displayName,"
      , "created_date,"
      , "modified_date,"
      , "user_type"
      , "FROM users WHERE email = $1"
      ].join(" ");
  client.query(
    query
  , [ email ]
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findUserByIdAdmin(user_id, callback) {
  var query = [
        "SELECT"
      , "user_id,"
      , "email,"
      , "givenName,"
      , "familyName,"
      , "middleName,"
      , "displayName,"
      , "created_date,"
      , "modified_date,"
      , "user_type,"
      , "api_code,"
      , "salt,"
      , "hashed_password"
      , "FROM users WHERE user_id = $1"
      ].join(" ");
  client.query(
    query
  , [ user_id ]
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findUserById(user_id, callback) {
  var query = [
        "SELECT"
      , "user_id,"
      , "email,"
      , "givenName,"
      , "familyName,"
      , "middleName,"
      , "displayName,"
      , "created_date,"
      , "modified_date,"
      , "user_type,"
      , "api_code"
      , "FROM users WHERE user_id = $1"
      ].join(" ");
  client.query(
    query
  , [ user_id ]
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findUserWorkspaces(user_id, callback) {
  client.query("")
  var query = [
        "SELECT"
      , "*"
      , "FROM"
      , "workspaces"
      , "WHERE"
      , "workspace_id"
      , "IN("
      , "SELECT"
      , "workspace_id_fk"
      , "FROM workspaceUsers"
      , "WHERE"
      , "user_id_fk = $1"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      user_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findUserInvitations(user_id, callback) {
  var query = [
        "SELECT wi.*,"
      , "users.email AS from_email,"
      , "users.givenName AS from_givenName,"
      , "users.familyName AS from_familyName,"
      , "context.title AS context_title"
      , "FROM"
      , "workspaceInvitations wi"
      , "JOIN users"
      , "ON users.user_id = wi.from_fk"
      , "JOIN workspaces context"
      , "ON context.workspace_id = wi.workspace_id_fk"
      , "WHERE"
      , "wi.sent_to"
      , "IN("
      , "SELECT users.email"
      , "FROM users"
      , "WHERE users.user_id = $1"
      , ")"
      , "UNION"
      , "SELECT wi.*,"
      , "users.email AS from_email,"
      , "users.givenName AS from_givenName,"
      , "users.familyName AS from_familyName,"
      , "context.title AS context_title"
      , "FROM"
      , "workspaceInvitations wi"
      , "JOIN users"
      , "ON users.user_id = wi.from_fk"
      , "JOIN workspaces context"
      , "ON context.workspace_id = wi.workspace_id_fk"
      , "WHERE"
      , "wi.from_fk"
      , "IN("
      , "SELECT users.user_id"
      , "FROM users"
      , "WHERE users.user_id = $1"
      , ")"
      , "UNION"
      , "SELECT pi.*,"
      , "users.email AS from_email,"
      , "users.givenName AS from_givenName,"
      , "users.familyName AS from_familyName,"
      , "context.title AS context_title"
      , "FROM"
      , "projectInvitations pi"
      , "JOIN users"
      , "ON users.user_id = pi.from_fk"
      , "JOIN projects context"
      , "ON context.project_id = pi.project_id_fk"
      , "WHERE"
      , "pi.sent_to"
      , "IN("
      , "SELECT users.email"
      , "FROM users"
      , "WHERE users.user_id = $1"
      , ")"
      , "UNION"
      , "SELECT pi.*,"
      , "users.email AS from_email,"
      , "users.givenName AS from_givenName,"
      , "users.familyName AS from_familyName,"
      , "context.title AS context_title"
      , "FROM"
      , "projectInvitations pi"
      , "JOIN users"
      , "ON users.user_id = pi.from_fk"
      , "JOIN projects context"
      , "ON context.project_id = pi.project_id_fk"
      , "WHERE"
      , "pi.from_fk"
      , "IN("
      , "SELECT users.user_id"
      , "FROM users"
      , "WHERE users.user_id = $1"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      user_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findUserConnections(user_id, callback) {
  var query = [
        "SELECT"
      , "users.user_id,"
      , "users.email,"
      , "users.givenName,"
      , "users.familyName"
      , "FROM"
      , "users"
      , "WHERE"
      , "user_id"
      , "IN("
      , "SELECT"
      , "first_user_id_fk"
      , "FROM"
      , "userConnections"
      , "WHERE"
      , "second_user_id_fk = '" + user_id + "'"
      , ")"
      , "UNION"
      , "SELECT"
      , "users.user_id,"
      , "users.email,"
      , "users.givenName,"
      , "users.familyName"
      , "FROM"
      , "users"
      , "WHERE"
      , "user_id"
      , "IN("
      , "SELECT"
      , "second_user_id_fk"
      , "FROM"
      , "userConnections"
      , "WHERE"
      , "first_user_id_fk = '" + user_id + "'"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findUserConnectionIds(user_id, callback) {
  var query = [
        "SELECT"
      , "first_user_id_fk AS connection_id"
      , "FROM"
      , "userConnections"
      , "WHERE"
      , "second_user_id_fk = '" + user_id + "'"
      , "UNION"
      , "SELECT"
      , "second_user_id_fk AS connection_id"
      , "FROM"
      , "userConnections"
      , "WHERE"
      , "first_user_id_fk = '" + user_id + "'"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findWorkspace(workspace_id, callback) {
  var query = [
        "SELECT"
      , "*"
      , "FROM"
      , "workspaces"
      , "WHERE"
      , "workspace_id = $1"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      workspace_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findWorkspaceUsers(workspace_id, callback) {
  var query = [
        "SELECT"
      , "users.user_id,"
      , "users.email,"
      , "users.givenName,"
      , "users.familyName,"
      , "workspaces.workspace_id"
      , "FROM"
      , "workspaceUsers"
      , "JOIN"
      , "users"
      , "ON"
      , "users.user_id = workspaceUsers.user_id_fk"
      , "JOIN"
      , "workspaces"
      , "ON"
      , "workspaces.workspace_id = workspaceUsers.workspace_id_fk"
      , "WHERE"
      , "workspaceUsers.workspace_id_fk = $1"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      workspace_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else {
        callback(err, result.rows);
      }
  });
}

function findWorkspaceUsersIds(workspace_id, callback) {
  var query = [
        "SELECT"
      , "user_id_fk"
      , "FROM"
      , "workspaceUsers"
      , "WHERE"
      , "workspace_id_fk = '" + workspace_id + "'"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findWorkspaceInvitations(workspace_id, callback) {
  var query = [
        "SELECT"
      , "*"
      , "FROM"
      , "workspaceInvitations"
      , "WHERE"
      , "workspace_id_fk = $1"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      workspace_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findWorkspaceProjects(workspace_id, callback) {
    var query = [
        "SELECT"
      , "*"
      , "FROM"
      , "projects"
      , "WHERE"
      , "project_id"
      , "IN("
      , "SELECT"
      , "project_id_fk"
      , "FROM workspaceProjects"
      , "WHERE"
      , "("
      , "workspace_id_fk = $1"
      , ")"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      workspace_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findWorkspacesProjects(workspace_ids, callback) {
  var orConditional = generateOrConditional('workspace_id_fk', workspace_ids)
    , query = [
        "SELECT"
      , "*"
      , "FROM"
      , "projects"
      , "WHERE"
      , "project_id"
      , "IN("
      , "SELECT"
      , "project_id_fk"
      , "FROM workspaceProjects"
      , "WHERE"
      , "("
      , orConditional
      , ")"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findProject(project_id, callback) {
  var query = [
        "SELECT"
      , "*"
      , "FROM projects"
      , "WHERE"
      , "project_id = $1"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findProjectUsers(project_id, callback) {
  var query = [
        "SELECT"
      , "users.user_id,"
      , "users.email,"
      , "users.givenName,"
      , "users.familyName,"
      , "projects.project_id"
      , "FROM"
      , "projectUsers"
      , "JOIN"
      , "users"
      , "ON"
      , "users.user_id = projectUsers.user_id_fk"
      , "JOIN"
      , "projects"
      , "ON"
      , "projects.project_id = projectUsers.project_id_fk"
      , "WHERE"
      , "projectUsers.project_id_fk = $1"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      project_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else {
        callback(err, result.rows);
      }
  });
}

function findProjectUsersIds(project_id, callback) {
  var query = [
        "SELECT"
      , "user_id_fk"
      , "FROM"
      , "projectUsers"
      , "WHERE"
      , "project_id_fk = '" + project_id + "'"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else {
        callback(err, result.rows);
      }
  });
}

function findProjectInvitations(project_id, callback) {
  var query = [
        "SELECT"
      , "*"
      , "FROM"
      , "projectInvitations"
      , "WHERE"
      , "project_id_fk = $1"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      project_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findProjectFiles(project_id, callback) {
  var query = [
        "SELECT"
      , "files.*,"
      , "users.email AS owner_email,"
      , "users.givenName AS owner_givenName,"
      , "users.familyName AS owner_familyName,"
      , "projectFiles.project_id_fk AS project_id,"
      , "tasks.task_id AS task_id"
      , "FROM"
      , "projectFiles"
      , "JOIN"
      , "files"
      , "ON"
      , "files.file_id = projectFiles.file_id_fk"
      , "LEFT OUTER JOIN"
      , "users"
      , "ON"
      , "users.user_id = files.owner_id_fk"
      , "JOIN"
      , "projects"
      , "ON"
      , "projects.project_id = projectFiles.project_id_fk"
      , "LEFT OUTER JOIN"
      , "tasks"
      , "ON"
      , "tasks.task_id = files.file_id"
      , "WHERE"
      , "projectFiles.project_id_fk = $1"
      , "UNION"
      , "SELECT"
      , "files.*,"
      , "users.email AS owner_email,"
      , "users.givenName AS owner_givenName,"
      , "users.familyName AS owner_familyName,"
      , "projects.project_id AS project_id,"
      , "taskFiles.task_id_fk AS task_id"
      , "FROM"
      , "taskFiles"
      , "JOIN"
      , "files"
      , "ON"
      , "files.file_id = taskFiles.file_id_fk"
      , "LEFT OUTER JOIN"
      , "users"
      , "ON"
      , "users.user_id = files.owner_id_fk"
      , "LEFT OUTER JOIN"
      , "projects"
      , "ON"
      , "projects.project_id = $1"
      , "WHERE"
      , "taskFiles.task_id_fk"
      , "IN("
      , "SELECT"
      , "t.*"
      , "FROM"
      , "("
      , "SELECT"
      , "pf.task_id"
      , "FROM"
      , "("
      , "SELECT"
      , "tasks.*"
      , "FROM"
      , "projectTasks"
      , "JOIN"
      , "tasks"
      , "ON"
      , "tasks.task_id = projectTasks.task_id_fk"
      , "WHERE projectTasks.project_id_fk = $1"
      , ") AS pf"
      , ") AS t"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      project_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findProjectTasks(project_id, callback) {
    var query = [
        "SELECT"
      , "pt.*,"
      , "users.email AS assignee_email,"
      , "users.givenName AS assignee_givenName,"
      , "users.familyName AS assignee_familyName"
      , "FROM"
      , "("
      , "SELECT"
      , "tasks.*"
      , "FROM"
      , "projectTasks"
      , "JOIN"
      , "tasks"
      , "ON"
      , "tasks.task_id = projectTasks.task_id_fk"
      , "WHERE"
      , "projectTasks.project_id_fk = $1"
      , ")"
      , "AS"
      , "pt"
      , "LEFT OUTER JOIN"
      , "users"
      , "ON"
      , "users.user_id = pt.assignee_fk"
      ].join(" ");
  client.query({
    text            : query
  , values          : [
      project_id
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findProjectsTasks(project_ids, callback) {
  var orConditional = generateOrConditional('project_id_fk', project_ids)
    , query = [
        "SELECT"
      , "tasks.*,"
      , "users.email AS assignee_email,"
      , "users.givenName AS assignee_givenName,"
      , "users.familyName AS assignee_familyName"
      , "FROM"
      , "tasks"
      , "LEFT OUTER JOIN"
      , "users"
      , "ON"
      , "users.user_id = tasks.assignee_fk"
      , "WHERE"
      , "task_id"
      , "IN("
      , "SELECT"
      , "task_id_fk"
      , "FROM projectTasks"
      , "WHERE"
      , "("
      , orConditional
      , ")"
      , ")"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows);
  });
}

function findCodeCount(code, callback) {
  var query = [
        "SELECT"
      , "count(*)"
      , "FROM"
      , "codeUsers"
      , "WHERE"
      , "code_fk = '" + code + "'"
      ].join(" ");
  client.query({
    text              : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function findCode(code, callback) {
  var query = [
        "SELECT"
      , "*"
      , "FROM"
      , "codes"
      , "WHERE"
      , "code = '" + code + "'"
      ].join(" ");
  client.query({
    text              : query
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

function createCode(limit, callback) {
  var query = [
        "INSERT INTO codes("
      , "code,"
      , "usageLimit,"
      , "created_date"
      , ")"
      , "values($1, $2, $3)"
      , "RETURNING *"
      ].join(" ");
  client.query({
    text              : query
  , values            : [
      generateInviteCode()
    , limit
    , new Date()
    ]
  }
  , function(err, result) {
      if(err) callback(err);
      else callback(err, result.rows[0]);
  });
}

// UPDATE
function updateUser(user_id, updatedUser, callback) {
  var updateString = keyValsString(updatedUser)
    , query = [
        'UPDATE'
      , "users"
      , "SET"
      , updateString
      , "WHERE"
      , "user_id = '" + user_id + "'"
      , "RETURNING"
      , "user_id,"
      , "email,"
      , "givenName,"
      , "familyName,"
      , "middleName,"
      , "displayName,"
      , "created_date,"
      , "modified_date,"
      , "user_type,"
      , "api_code"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      console.log(err);
      console.log(result);
      callback(err, result.rows[0]);
  });
}

function updateUserConnectionCount(user_id, count, callback) {
  var query = [
        "UPDATE"
      , "users"
      , "SET"
      , "connection_count = connection_count + 1"
      , "WHERE"
      , "user_id = '" + user_id + "'"
      , "RETURNING connection_count"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result.rows[0]);
  });
}

function updateWorkspace(workspace_id, updatedWorkspace, callback) {
  var updateString = keyValsString(updatedWorkspace)
    , query = [
        'UPDATE'
      , "workspaces"
      , "SET"
      , updateString
      , "WHERE"
      , "workspace_id = '" + workspace_id + "'"
      , "RETURNING *"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result.rows[0]);
  });
}

function updateProject(project_id, updatedProject, callback) {
  var updateString = keyValsString(updatedProject)
    , query = [
        'UPDATE'
      , "projects"
      , "SET"
      , updateString
      , "WHERE"
      , "project_id = '" + project_id + "'"
      , "RETURNING *"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result.rows[0]);
  });
}

function updateTask(task_id, updatedTask, callback) {
  var updateString = keyValsString(updatedTask)
    , query = [
        "UPDATE"
      , "tasks"
      , "SET"
      , updateString
      , "WHERE"
      , "task_id = '" + task_id + "'"
      , "RETURNING *"
      ].join(" ")
    , updatedQuery = [
        "SELECT"
      , "tasks.*,"
      , "users.email AS assignee_email,"
      , "users.givenName AS assignee_givenName,"
      , "users.familyName AS assignee_familyName"
      , "FROM"
      , "tasks"
      , "LEFT OUTER JOIN"
      , "users"
      , "ON"
      , "users.user_id = tasks.assignee_fk"
      , "WHERE"
      , "tasks.task_id = $1"
      , ""
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      client.query({
        text        : updatedQuery
      , values      : [
          task_id
        ]
      }
      , function(taskErr, task) {
          callback(taskErr, task.rows[0]);
      });
  });
}

// DESTROY

function destroyUser(user_id, callback) {
  var query = [
        "DELETE FROM users"
      , "WHERE user_id = '" + user_id + "'"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result);
  });
}

function destroyWorkspace(workspace_id, callback) {
  var query = [
        "DELETE FROM workspaces"
      , "WHERE workspace_id = '" + workspace_id + "'"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result);
  });
}

function destroyProject(project_id, callback) {
  var query = [
        "DELETE FROM projects"
      , "WHERE project_id = '" + project_id + "'"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result);
  });
}

function destroyTask(task_id, callback) {
  var projectTasksQuery = [
        "DELETE FROM projectTasks"
      , "WHERE task_id_fk = '" + task_id + "'"
      ].join(" ")
    , taskQuery = [
        "DELETE FROM tasks"
      , "WHERE task_id = '" + task_id + "'"
      ].join(" ");
  client.query({
    text          : projectTasksQuery
  }
  , function(projectTaskErr, projectTaskResult) {
      if(projectTaskErr !== null) callback(projectTaskErr);
      else {
        client.query({
          text          : taskQuery
        }
        , function(taskErr, taskResult) {
            callback(taskErr);
        });
      }
  });
}

function destroyConnection(target_id, user_id, callback) {
  var query = [
        "DELETE FROM userConnections"
      , "WHERE"
      , "("
      , "first_user_id_fk = '" + target_id + "'"
      , "AND second_user_id_fk = '" + user_id + "'"
      , ")"
      , "OR"
      , "("
      , "first_user_id_fk = '" + user_id + "'"
      , "AND second_user_id_fk = '" + target_id + "'"
      , ")"
      ].join(" ");
  client.query({
    text          : query
  }
  , function(err, result) {
      callback(err, result);
  });
}

function destroyInvitation(type, invitation_id, callback) {
  var workspaceQuery = [
        "DELETE FROM workspaces"
      , "WHERE invitation_id = '" + invitation_id + "'"
      ].join(" ")
    , projectQuery = [
        "DELETE FROM projects"
      , "WHERE invitation_id = '" + invitation_id + "'"
      ].join(" ");
  if(type === 'workspace') {
    client.query({
      text          : workspaceQuery
    }
    , function(err, result) {
        callback(err, result);
    });
  }
  else if(type === 'project') {
    client.query({
      text          : projectQuery
    }
    , function(err, result) {
        callback(err, result);
    });
  }
  else callback(err);
}

function destroyWorkspaceUser(workspace_id, user_id, callback) {
  var query = [
        "DELETE FROM workspaceUsers"
      , "WHERE"
      , "workspace_id_fk = '" + workspace_id + "'"
      , "AND user_id_fk = '" + user_id + "'"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      callback(err, result);
  });
}

function destroyProjectUser(project_id, user_id, callback) {
  var query = [
        "DELETE FROM projectUsers"
      , "WHERE"
      , "project_id_fk = '" + project_id + "'"
      , "AND user_id_fk = '" + user_id + "'"
      ].join(" ");
  client.query({
    text            : query
  }
  , function(err, result) {
      callback(err, result);
  });
}

// Socket.io

io.sockets.on('connection', function(socket) {
  //Rooms
  socket.on('joinUser', function(user_id) {
    //Unique room for the user
    socket.join(user_id);
  });

  socket.on('joinWorkspace', function(workspace_id) {
    socket.join(workspace_id);
    socket.emit('joinedWorkspace', workspace_id);
  });

  socket.on('joinProject', function(project_id) {
    socket.join(project_id)
    socket.emit('joinedProject', project_id);
  });

  socket.on('joinTask', function(task_id) {
    socket.join(task_id);
    socket.emit('joinedTask', task_id);
  });

  //Invitation
  socket.on('newWorkspaceInvitation', function(newInvitation) {
    createWorkspaceInvitation(newInvitation, function(err, invitation) {
      findUserByEmail(newInvitation.sent_to, function(err, targetUser) {
        if(targetUser) {
          socket.broadcast.to(targetUser.user_id).emit('receivedNewInvitation', newInvitation);
        }
        else {
          console.log('No');
        }
      });
    });
  });

  socket.on('acceptWorkspaceInvitation', function(invitation) {
    acceptWorkspaceInvitation(invitation);
    findUserByEmail(invitation.sent_to, function(err, targetUser) {
      findUserById(invitation.from_fk, function(err, secondUser) {
        createConnection(targetUser, secondUser, function(err, connection) {
          console.log(err);
          console.log(connection);
        });
      });
      findWorkspace(invitation.workspace_id_fk, function(err, workspace) {
        var addUser = targetUser;
        addUser.workspace_id = workspace.workspace_id;
        socket.emit('addWorkspace', workspace);
        socket.broadcast.to(workspace.workspace_id).emit('addWorkspaceUser', addUser);
        io.sockets.in(invitation.workspace_id_fk).emit('removeInvitation', invitation.invitation_id);
        socket.emit('removeInvitation', invitation.invitation_id);
        findWorkspaceUsers(workspace.workspace_id, function(err, workspaceUsers) {
          if(workspaceUsers.length > 0) {
            socket.emit('addWorkspaceUsers', workspaceUsers);
          }
        });
        findWorkspaceProjects([workspace.workspace_id], function(err, projects) {
          socket.emit('addProjects', projects);
          if(projects) {
            if(projects.length > 0 ) {
              var project_ids = [];
              for(var b=0; b<projects.length; b++) {
                //Grab the project ids
                project_ids.push(projects[b].project_id);
              }
              findProjectTasks(project_ids, function(err, tasks) {
                if(tasks) {
                  if(tasks.length > 0) {
                    socket.emit('addTasks', tasks);
                  }
                }
              });
            }
          }
        });
      });
    });
  });

  //CREATE
  socket.on('newWorkspace', function(newWorkspace) {
    createWorkspace(newWorkspace, function(err, result) {
      socket.emit('createdNewWorkspace', newWorkspace);
    });
  });

  socket.on('newProject', function(newProject) {
    createProject(newProject, function(err, result) {
      socket.broadcast.to(newProject.workspace_id_fk).emit('createdNewProject', newProject);
    });
  });

  socket.on('newTask', function(newTask) {
    createTask(newTask, function(err, result) {
      socket.broadcast.to(newTask.project_id_fk).emit('createdNewTask', newTask);
    });
  });

  //READ
  socket.on('findUserInfo', function(user_id) {
    var userInfo = {};
    findUserConnections(user_id, function(err, connections) {
      userInfo.connections = connections;
      socket.emit('foundUserInfo', userInfo);
    });
  });

  socket.on('findWorkspaces', function(user_id) {
    findUserWorkspaces(user_id, function(err, workspaces) {
      socket.emit('foundWorkspaces', workspaces);
    });
  });

  socket.on('findWorkspaceInfo', function(workspace_id) {
    var workspaceInfo = {};
    workspaceInfo.workspace_id = workspace_id;
    findWorkspaceUsers(workspace_id, function(err, workspaceUsers) {
      workspaceInfo.workspaceUsers = workspaceUsers;
      findWorkspaceInvitations(workspace_id, function(err, workspaceInvitations) {
        workspaceInfo.workspaceInvitations = workspaceInvitations;
        socket.emit('foundWorkspaceInfo', workspaceInfo);
      });
    });
  });

  socket.on('findWorkspace', function(workspace_id) {
    var workspace = {};
    workspace.workspace_id = workspace_id;
    findWorkspaceUsers(workspace_id, function(err, workspaceUsers) {
      workspace.workspaceUsers = workspaceUsers;
      findWorkspaceInvitations(workspace_id, function(err, workspaceInvitations) {
        workspace.workspaceInvitations = workspaceInvitations;
        findWorkspaceProjects(workspace_id, function(err, workspaceProjects) {
          workspace.workspaceProjects = workspaceProjects;
          socket.emit('foundWorkspace', workspace);
        });
      });
    });
  });

  socket.on('findProject', function(project_id) {
    var project = {};
    project.project_id = project_id;
    findProjectTasks(project_id, function(err, projectTasks) {
      project.projectTasks = projectTasks;
      findProjectUsers(project_id, function(err, projectUsers) {
        project.projectUsers = projectUsers;
        findProjectFiles(project_id, function(err, projectFiles) {
          project.projectFiles = projectFiles;
          socket.emit('foundProject', project);
        });
      });
    });
  });

  socket.on('findProjectInfo', function(project_id) {
    var projectInfo = {};
    projectInfo.project_id = project_id;
    findProjectUsers(project_id, function(err, projectUsers) {
      projectInfo.projectUsers = projectUsers;
      findProjectInvitations(project_id, function(err, projectInvitations) {
        projectInfo.projectInvitations = projectInvitations;
        socket.emit('foundProjectInfo', projectInfo);
      });
    });
  });

  //UPDATE
  socket.on('updateUser', function(user_id, updatedUser) {
    updateUser(user_id, updatedUser, function(err, user) {
      findUserConnectionIds(user_id, function(err, ids) {
        for(var x=0; x<ids.length; x++) {
          socket.broadcast.to(ids[x].connection_id).emit('updatedUser', user);
        }
      });
    });
  });

  socket.on('updateProject', function(project_id, updatedProject) {
    updateProject(project_id, updatedProject, function(err, project) {
      findProjectUsersIds(project_id, function(err, ids) {
        if(ids) {
          for(var x=0; x<ids.length; x++) {
            socket.broadcast.to(ids[x].user_id_fk).emit('updatedProject', project);
          }
        }
        else io.sockets.in(project_id).emit('updatedProject', project);
      });
    });
  });

  socket.on('updateTask', function(task_id, updatedTask) {
    updateTask(task_id, updatedTask, function(err, task) {
      io.sockets.in(task.project_id_fk).emit('updatedTask', task);
    });
  });

  socket.on('updateWorkspace', function(workspace_id, updatedWorkspace) {
    updateWorkspace(workspace_id, updatedWorkspace, function(err, workspace) {
      findWorkspaceUsersIds(workspace_id, function(err, ids) {
        for(var x=0; x<ids.length; x++) {
          socket.broadcast.to(ids[x].user_id_fk).emit('updatedWorkspace', workspace);
        }
      });
    });
  });

  //DESTROY
  socket.on('destroyTask', function(task) {
    destroyTask(task.task_id, function(err) {
      if(err) socket.emit('error', err);
      else {
        findProjectUsersIds(task.project_id_fk, function(err, ids) {
          if(ids) {
            for(var x=0; x<ids.length; x++) {
              socket.broadcast.to(ids[x].user_id_fk).emit('destroyedTask', task);
            }
          }
          else io.sockets.in(task.project_id_fk).emit('destroyedTask', task);
        });
      }
    });
  });

  //Uploads

  socket.on('startUpload', function(filename, filesize, targetPath) {
    //Need to deal with targetPath
    console.log(targetPath);
    var name = filename
      , temp = targetPath.split('/')
      , tempPath = temp.join("");
    files[name] = {  //Create a new Entry in The Files Variable
       filesize   : filesize,
       data       : "",
       downloaded : 0,
       targetPath : targetPath
    }
    var place = 0;
    try{
       var stat = fs.statSync( __dirname + '/tmp/' + tempPath + name);
       if(stat.isFile())
       {
          files[name]['downloaded'] = stat.size;
          place = stat.size / 524288;
       }
    }
    catch(er){} //It's a New File
    fs.open(__dirname + '/tmp/' + tempPath + name, 'a', 0755, function(err, fd){
       if(err)
       {
          console.log(err);
       }
       else
       {
          files[name]['handler'] = fd; //We store the file handler so we can write to it later
          socket.emit('moreData', { 'place' : place, percent : 0 });
       }
    });
  });

  socket.on('uploadFile', function(data, newFile, meta) {
    var name = data['name'];
    files[name]['downloaded'] += data['data'].length;
    files[name]['data'] += data['data'];
    if(files[name]['downloaded'] == files[name]['filesize']) //If File is Fully Uploaded
    {
      fs.write(files[name]['handler'], files[name]['data'], null, 'binary', function(err, written){
        var targetPath = files[name]['targetPath']
          , temp = targetPath.split('/')
          , tempPath = temp.join("");
        s3.putFile(targetPath + '/' + name, __dirname + '/tmp/' + tempPath + name, 'public-read', {}, function(err, result) {
          fs.unlink(__dirname + '/tmp/' + tempPath + name, function() {
            createFile(newFile, function(err, result) {
              console.log(err);
              if(meta.type === 'project') {
                createProjectFile(newFile.file_id, meta.id, function(projectErr, projectResult) {
                  console.log(projectErr);
                });
                newFile.project_id = meta.id;
              }
              else if(meta.type === 'task') {
                createTaskFile(newFile.file_id, meta.id, function(taskErr, taskResult) {
                  console.log(taskErr);
                });
                newFile.task_id = meta.id;
                newFile.project_id = meta.project_id;
              }
              io.sockets.in(meta.broadcast_id).emit('finishedUpload', newFile);
            });
          });
        });
      });
    }
    else if(files[name]['data'].length > 10485760){ //If the Data Buffer reaches 10MB
      fs.write(files[name]['handler'], files[name]['data'], null, 'binary', function(err, written){
        files[name]['data'] = ""; //Reset The Buffer
        var place = files[name]['downloaded'] / 524288;
        var percent = (files[name]['downloaded'] / files[name]['filesize']) * 100;
        socket.emit('moreData', { 'place' : place, 'percent' :  percent});
      });
    }
    else
    {
      var place = files[name]['downloaded'] / 524288;
      var percent = (files[name]['downloaded'] / files[name]['filesize']) * 100;
      socket.emit('moreData', { 'place' : place, 'percent' :  percent});
    }
  });

  //Beta Code
  socket.on('checkBetaCode', function(betaCode) {
    findCode(betaCode, function(err, code) {
      var valid = false;
      if(code) {
        findCodeCount(betaCode, function(err, count) {
          if(count.count < code.usagelimit) {
            if(code) valid = true;
            socket.emit('checkedBetaCode', valid, null);
          }
          else socket.emit('checkedBetaCode', valid, 'Code limit reached.');
        });
      }
      else socket.emit('checkedBetaCode', valid, 'Invalid Beta Code.');
    });
  });

});

// Routes

server.get('/', routes.index);

server.get('/admin', function(req, res) {
  var code = generateInviteCode();
  res.render('admin', { layout: 'adminLayout', code: code });
});

//Create new user
server.post('/register', function(req, res) {
  if(req.user) req.logOut();
  else {
    createUser(req.body.email, req.body.pw, function(err, result) {
      if(err) res.send(err);
      else {
        findUserByEmail(req.body.email, function(error, user) {
          if(error) res.send(error);
          else {
            req.logIn(user, function(err) {
              if(err) res.send(err);
              else {
                findUserWorkspaces(req.user.user_id, function(err, workspaces) {
                  findUserInvitations(req.user.user_id, function(err, invitations) {
                    var initUser = {
                          user            : req.user
                        , workspaces      : workspaces
                        };
                    if(invitations) initUser.invitations = invitations;
                    res.send(initUser);
                  });
                });
              }
            });
          }
        });
      }
    });
  } 
});

server.post(
  '/login'
, passport.authenticate(
    'local'
  )
, function(req, res) {
    findUserWorkspaces(req.user.user_id, function(err, workspaces) {
      findUserInvitations(req.user.user_id, function(err, invitations) {
        var initUser = {
              user              : req.user
            , workspaces        : workspaces
            };
        if(invitations) initUser.invitations = invitations;
        res.send(initUser);
      });
    });
});

server.post(
  '/auth'
, function(req, res) {
    //Confirm req is made by authorized user
    // TODO: Redirect app to login on fail
    console.log(req.body);
    if(req.user) {
      if(req.body.user_id === req.user.user_id) {
        var initUser = {};
        initUser.user = req.user;
        findUserWorkspaces(req.user.user_id, function(err, workspaces) {
          if(workspaces.length > 0) {
            initUser.workspaces = workspaces;
            if(req.body.project_id) {
              var workspace_ids = [];
              for(var x=0; x<workspaces.length; x++) {
                var wid = workspaces[x].workspace_id;
                workspace_ids.push(wid);
              }
              findWorkspacesProjects(workspace_ids, function(err, projects) {
                if(projects.length > 0) {
                  initUser.projects = projects;
                  if(req.body.task_id) {
                    var project_ids = [];
                    for(var y=0; y<projects.length; y++) {
                      var pid = projects[x].project_id;
                      project_ids.push(pid);
                    }
                    findProjectsTasks(project_ids, function(err, tasks) {
                      if(tasks.length > 0) {
                        initUser.tasks = tasks;
                        res.send(initUser);
                      }
                      else res.send(initUser);
                    });
                  }
                  else res.send(initUser);
                }
                else res.send(initUser);
              });
            }
            else res.send(initUser);
          }
          else res.send(initUser);
        });
      }
    }
    else res.send('Incorrect user.');
});

server.post('/logout', function(req, res) {
  req.logOut();
  res.redirect('/');
});

server.post(
  '/attachment'
, function(req, res) {
    //Fetches the file from S3
    //TODO:
    //Additional security by checking if user can access target file.
    var path = req.body.path
      , file_id = req.body.file_id
      , filename = req.body.filename
      , folder = encodeURI(path + '/' + filename)
      , time = new Date();
    time.setMinutes(time.getMinutes() + 60);
    var tempUrl = s3.setBucket('').signUrl('https', 'GET', folder, time);
    res.send(tempUrl);
});

server.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", server.address().port, server.settings.env);
});
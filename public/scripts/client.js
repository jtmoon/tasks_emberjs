App = Em.Application.create();

App.Task = Em.Object.extend({
  task_id           : null
, title             : null
, created_date      : null
, modified_date     : null
, created_by_fk     : null
, start_date        : null
, due_date          : null
, soft_date         : null
, notes             : null
, complete          : null
, task_status       : null
, milestone         : null
, project_id_fk     : null
, assignee_fk       : null
, activity_feed_fk  : null
, selected          : false
, selectedObserver  : function() {
    var selectedTask = App.selectedTaskController.selectedTask;
    if(selectedTask) {
      if(selectedTask.task_id === this.task_id) this.set('selected', true);
      else this.set('selected', false);
    }
    else this.set('selected', false);
  }.observes('App.selectedTaskController.selectedTask')
, stringDueDate     : function() {
    if(this.due_date) {
      var date = new Date(this.due_date)
        , day = date.getDate()
        , month = date.getMonth() + 1
        , year = date.getFullYear()
        , string = month + '/' + day + '/' + year;
      return string.trim();
    }
  }.property('due_date')
});

App.Project = Em.Object.extend({
  project_id              : null
, title                   : null
, created_date            : null
, modified_date           : null
, created_by_fk           : null
, start_date              : null
, end_date                : null
, description             : null
, archived                : null
, project_status          : null
, project_privacy         : null
, workspace_id_fk         : null
, activity_feed_fk        : null
, tasks_order_by_priority : null
});

App.Workspace = Em.Object.extend({
  workspace_id            : null
, title                   : null
, created_date            : null
, modified_date           : null
, created_by_fk           : null
, workspace_type          : null
, activity_feed_fk        : null
, user_count              : 0
});

App.User = Em.Object.extend({
  user_id                 : null
, email                   : null
, displayName             : null
, givenName               : null
, familyName              : null
, middleName              : null
, created_date            : null
, modified_date           : null
, user_type               : null
, api_code                : null
, activity_feed_fk        : null
});

App.Invitation = Em.Object.extend({
  invitation_id           : null
, from_fk                 : null
, sent_to                 : null
, created_date            : null
, read                    : null
});

App.File = Em.Object.extend({
  file_id                 : null
, path                    : null
, filename                : null
, filetype                : null
, filesize                : null
, created_date            : null
, modified_date           : null
, owner_id_fk             : null
, url                     : function() {
    var s3 = '';
    return s3 + this.path + '/' + this.filename;
}.property('path', 'filename')
});

// Data

var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

var selectedFile
  , fReader = new FileReader();

function uploadFile(file, meta, targetPath) {
  if(window.File && window.FileReader) {
    selectedFile = file;
    var newFile = {};
    newFile.file_id = uuid.v4();
    newFile.path = targetPath;
    newFile.filename = file.name;
    newFile.file_size = file.size;
    newFile.file_type = file.type;
    newFile.created_date = new Date();
    newFile.owner_id_fk = App.authController.authUser.user_id;
    fReader.onload = function(event) {
      file.data = event.target.result;
      socket.emit('uploadFile', file, newFile, meta);
    }
    socket.emit('startUpload', file.name, file.size, targetPath);
  }
}

function elapsedTime(startDate, type) {
  var now = Date.now()
    , start = Date.parse(startDate)
    , elapsed = now - start
    , day = 24*60*60*1000
    , hour = 60*60*1000
    , min = 60*1000
    , sec = 1000;
  switch(type) {
    case 'day':
      return elapsed/day;
    break;
    case 'hour':
      return elapsed/hour;
    break;
    case 'min':
      return elapsed/min;
    break;
    case 'sec':
      return elapsed/sec;
    break;
  }
}

function convertWorkspaces(workspaces) {
  var convertedWorkspaces = [];
  for(var x=0; x<workspaces.length; x++) {
    var modelWorkspace = App.Workspace.create(workspaces[x]);
    convertedWorkspaces.push(modelWorkspace);
  }
  return convertedWorkspaces;
}

function convertProjects(projects) {
  var convertedProjects = [];
  for(var x=0; x<projects.length; x++) {
    var modelProject = App.Project.create(projects[x]);
    convertedProjects.push(modelProject);
  }
  return convertedProjects;
}

function convertTasks(tasks) {
  var convertedTasks = [];
  for(var x=0; x<tasks.length; x++) {
    var modelTask = App.Task.create(tasks[x]);
    convertedTasks.push(modelTask);
  }
  return convertedTasks;
}

function convertInvitations(invitations) {
  var convertedInvitations = [];
  for(var x=0; x<invitations.length; x++) {
    var modelInvitation = App.Invitation.create(invitations[x]);
    convertedInvitations.push(modelInvitation);
  }
  return convertedInvitations;
}

function convertUsers(users) {
  var convertedUsers = [];
  for(var x=0; x<users.length; x++) {
    var modelUser = App.User.create(users[x]);
    convertedUsers.push(modelUser);
  }
  return convertedUsers;
}

function convertFiles(files) {
  var convertedFiles = [];
  for(var x=0; x<files.length; x++) {
    var modelFile = App.File.create(files[x]);
    convertedFiles.push(modelFile);
  }
  return convertedFiles;
}

function initializeUser(initUser, params) {
  var authUser = App.User.create(initUser.user)
    , convertedWorkspaces = convertWorkspaces(initUser.workspaces);
  App.authController.setAuthUser(authUser);
  App.workspacesDataController.set('content', convertedWorkspaces);
  if(initUser.projects) {
    var convertedProjects = convertProjects(initUser.projects);
    App.projectsDataController.set('content', convertedProjects);
  }
  if(initUser.tasks) {
    var convertedTasks = convertTasks(initUser.tasks);
    App.tasksDataController.set('content', convertedTasks);
  }
  if(initUser.invitations) {
    var convertedInvitations = convertInvitations(initUser.invitations);
    App.invitationsDataController.set('content', convertedInvitations);
  }
  if(initUser.workspaceUsers) {
    var convertedUsers = convertUsers(initUser.workspaceUsers);
    App.workspaceUsersDataController.set('content', convertedUsers);
  }
  if(params) {
    if(params.workspace_id) {
      var workspace = App.workspacesDataController.fetch('workspace_id', params.workspace_id);
      App.selectedWorkspaceController.select(workspace);
    }
    if(params.project_id) {
      var project = App.projectsDataController.fetch('project_id', params.project_id);
      App.selectedProjectController.select(project);
    }
    if(params.task_id) {
      var task = App.tasksDataController.fetch('task_id', params.task_id);
      App.selectedTaskController.select(task);
    }
  }
  App.authController.set('isLoaded', true);
  socket.emit('joinUser', initUser.user.user_id);
}

function DBArrayToJSArray(dbArray) {
  var string = dbArray.replace('{', '')
    , jsArray = [];
  string = string.replace('}', '');
  jsArray = string.split(',');
  return jsArray;
}

function JSArrayToDBArray(jsArray) {
  var dbArray = jsArray.join(',');
  dbArray = '{' + dbArray + '}';
  return dbArray;
}

function getIds(array, key) {
  var ids_array = [];
  for(var x=0; x<array.length; x++) {
    ids_array.push(array[x][key]);
  }
  return ids_array;
}

function initUsersTypeahead(target, array, task_id) {
  var labels = []
    , mapped = {};
  $(target).typeahead({
    source                  : function(query, process) {
      $.each(array, function(i, item) {
        var fullName = item.get('givenname') + ' ' + item.get('familyname')
          , query = fullName + ' (' + item.email + ')';
        if(!mapped[query]) {
          mapped[query] = { user_id: item.user_id, fullName: fullName };
          labels.push(query);
        }
      });
      process(labels);
    }
  , updater                 : function(item) {
      var object = mapped[item];
      $(target).attr('assignee_fk', object.user_id);
      initTasksTooltip();
      var updatedTask = {};
      updatedTask.modified_date = new Date();
      updatedTask.assignee_fk = object.user_id;
      socket.emit('updateTask', task_id, updatedTask);
      return object.fullName;
    }
  });
}

function initTasksTooltip() {
  $('[rel="tooltip"][tooltipFor="task"]').tooltip();
}

function initInfoTooltip() {
  $('[rel="tooltip"][tooltipFor="taskInfo"]').tooltip();
}

function initDatepicker(target) {
  $(target).datepicker({
    dateFormat          : 'mm/dd/yy'
  , defaultDate         : 0
  });
}

function updateUserInControllers(updatedUser) {
  //Checks if updated user is in the controllers and updates them
  App.usersDataController.update(updatedUser);
  App.workspaceUsersDataController.update(updatedUser);
  App.projectUsersDataController.update(updatedUser);
  App.connectionsDataController.update(updatedUser);
}

App.workspacesDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(workspace) {
    var exists = this.filterProperty('workspace_id', workspace.workspace_id).get('length');
    if(exists === 0) {
      var modelWorkspace = App.Workspace.create(workspace);
      this.pushObject(modelWorkspace);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedWorkspace) {
    var oldWorkspace = this.findProperty('workspace_id', updatedWorkspace.workspace_id);
    if(oldWorkspace) {
      for(var key in updatedWorkspace) {
        Em.set(oldWorkspace, key, updatedWorkspace[key]);
      }
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.projectsDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(project) {
    var exists = this.filterProperty('project_id', project.project_id).get('length');
    if(exists === 0) {
      var modelProject = App.Project.create(project);
      this.pushObject(modelProject);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedProject) {
    var oldProject = this.findProperty('project_id', updatedProject.project_id)
      , selectedProject = App.selectedProjectController.selectedProject;
    if(oldProject) {
      for(var key in updatedProject) {
        Em.set(oldProject, key, updatedProject[key]);
      }
      if(selectedProject) App.selectedProjectController.notifyPropertyChange('selectedProject');
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.tasksDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(task) {
    var exists = this.filterProperty('task_id', task.task_id).get('length');
    if(exists === 0) {
      var modelTask = App.Task.create(task);
      this.pushObject(modelTask);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedTask) {
    var oldTask = this.findProperty('task_id', updatedTask.task_id);
    if(oldTask) {
      for(var key in updatedTask) {
        Em.set(oldTask, key, updatedTask[key]);
      }
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.workspaceUsersDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(user) {
    var existing = this.filterProperty('user_id', user.user_id)
      , modelUser = App.User.create(user);
    if(existing.get('length') === 0) this.pushObject(modelUser);
    else {
      var exists = existing.filterProperty('workspace_id', user.workspace_id);
      if(exists.get('length') === 0) this.pushObject(modelUser);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedUser) {
    var oldUser = this.findProperty('user_id', updatedUser.user_id);
    if(oldUser) {
      for(var key in updatedUser) {
        Em.set(oldUser, key, updatedUser[key]);
      }
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.projectUsersDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(user) {
    var existing = this.filterProperty('user_id', user.user_id)
      , modelUser = App.User.create(user);
    if(existing.get('length') === 0) this.pushObject(modelUser);
    else {
      var exists = existing.filterProperty('project_id', user.project_id);
      if(exists.get('length') === 0) this.pushObject(modelUser);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedUser) {
    var oldUser = this.findProperty('user_id', updatedUser.user_id);
    if(oldUser) {
      for(var key in updatedUser) {
        Em.set(oldUser, key, updatedUser[key]);
      }
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.connectionsDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(user) {
    var exists = this.filterProperty('user_id', user.user_id).get('length');
    if(exists === 0) {
      var modelUser = App.User.create(user);
      this.pushObject(modelUser);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedUser) {
    var oldUser = this.findProperty('user_id', updatedUser.user_id);
    if(oldUser) {
      for(var key in updatedUser) {
        Em.set(oldUser, key, updatedUser[key]);
      }
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.usersDataController = Em.ArrayProxy.create({
  content                 : []
, add                     : function(user) {
    var exists = this.filterProperty('user_id', user.user_id).get('length');
    if(exists === 0) {
      var modelUser = App.User.create(user);
      this.pushObject(modelUser);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedUser) {
    var oldUser = this.findProperty('user_id', updatedUser.user_id);
    if(oldUser) {
      for(var key in updatedUser) {
        Em.set(oldUser, key, updatedUser[key]);
      }
    }
  }
, updateMany              : function(array) {
    for(var x=0; x<array.length; x++) {
      this.update(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.invitationsDataController = Em.ArrayProxy.create({
  content                 : []
, remove                  : function(id) {
    var target = this.findProperty('invitation_id', id);
    this.removeObject(target);
  }
, add                     : function(invitation) {
    var exists = this.filterProperty('invitation_id', invitation.invitation_id).get('length');
    if(exists === 0) {
      var modelInvitation = App.Invitation.create(invitation);
      this.pushObject(modelInvitation);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.filesDataController = Em.ArrayProxy.create({
  content                 : []
, remove                  : function(id) {
    var target = this.findProperty('file_id', id);
    this.removeObject(target);
  }
, add                     : function(file) {
    var exists = this.filterProperty('file_id', file.file_id).get('length');
    if(exists === 0) {
      var modelFile = App.File.create(file);
      this.pushObject(modelFile);
    }
  }
, addMany                 : function(array) {
    for(var x=0; x<array.length; x++) {
      this.add(array[x]);
    }
  }
, update                  : function(updatedFile) {
    var oldFile = this.filterProperty('file_id', updatedFile.file_id);
    if(oldFile) {
      for(var key in updatedFile) {
        Em.set(oldFile, key, updatedFile[key]);
      }
    }
  }
, destroy                 : function(property, value) {
    var target = this.findProperty(property, value);
    this.removeObject(target);
  }
, fetch                   : function(property, value) {
    var object = this.findProperty(property, value);
    return object;
  }
});

App.selectedWorkspaceController = Em.Object.create({
  selectedWorkspace       : null
, select                  : function(workspace) {
    this.set('selectedWorkspace', workspace);
  }
, clearSelected           : function() {
    this.set('selectedWorkspace', null);
  }
, filterUsersBy           : function(key, value) {
    this.set('users', App.workspaceUsersDataController.filterProperty(key, value));
  }
, filterInvitationsBy     : function(key, value) {
    this.set('invitations', App.invitationsDataController.filterProperty(key, value));
  }
, users                   : []
, selectedWorkspaceObserver           : function() {
    if(this.selectedWorkspace) {
      this.filterUsersBy('workspace_id', this.selectedWorkspace.workspace_id);
      this.filterInvitationsBy('workspace_id_fk', this.selectedWorkspace.workspace_id);
      socket.emit('joinWorkspace', this.selectedWorkspace.workspace_id);
    }
  }.observes('selectedWorkspace')
, workspaceUsersObserver              : function() {
    if(this.selectedWorkspace) {
      this.filterUsersBy('workspace_id', this.selectedWorkspace.workspace_id);
    }
  }.observes('App.workspaceUsersDataController.[]')
, workspaceInvitationsObserver        : function() {
    if(this.selectedWorkspace) {
      this.filterInvitationsBy('workspace_id_fk', this.selectedWorkspace.workspace_id);
    }
  }.observes('App.invitationsDataController.[]')
, userCount               : function() {
    return this.get('users').get('length');
  }.property('users.@each')
, invitations             : []
, hasInvites              : false
, hasError                : false
, errorMessage            : null
, invitationsObserver     : function() {
    if(this.invitations.length > 0) {
      this.set('hasInvites', true);
    }
    else this.set('hasInvites', false);
  }.observes('invitations.@each')
, prepInvite              : function(event) {
    var invitation = {};
    invitation.from_fk = App.authController.authUser.user_id
    invitation.invitation_id = uuid.v4()
    invitation.workspace_id_fk = App.selectedWorkspaceController.selectedWorkspace.workspace_id
    invitation.sent_to = event.view.invitationTo;
    invitation.created_date = new Date();
    invitation.read = false;
    invitation.from_email = App.authController.authUser.email;
    invitation.from_givenName = App.authController.authUser.givenName;
    invitation.from_familyName = App.authController.authUser.familyName;
    invitation.context_title = this.selectedWorkspace.title;
    var exists = this.invitations.filterProperty('to', invitation.sent_to);
    if(exists.length === 0) {
      this.set('hasError', false);
      this.set('errorMessage', null);
      var newInvite = App.Invitation.create(invitation);
      this.invitations.addObject(newInvite);
      App.invitationsDataController.addObject(newInvite);
      socket.emit('newWorkspaceInvitation', invitation);
      event.view.set('invitationTo', null);
    }
    else {
      this.set('hasError', true);
      this.set('errorMessage', invitation.sent_to + ' has already been invited.');
    }
  }
, update                  : function(updatedWorkspace) {
    var workspace_id = this.selectedWorkspace.workspace_id;
    socket.emit('updateWorkspace', workspace_id, updatedWorkspace);
  }
});

App.selectedProjectController = Em.Object.create({
  selectedProject         : null
, select                  : function(project) {
    this.set('selectedProject', project);
  }
, clearSelected           : function() {
    this.set('selectedProject', null);
  }
, filterUsersBy           : function(key, value) {
    this.set('users', App.projectUsersDataController.filterProperty(key, value));
  }
, filterInvitationsBy     : function(key, value) {
    this.set('invitations', App.invitationsDataController.filterProperty(key, value));
  }
, users                   : []
, selectedProjectObserver           : function() {
    if(this.selectedProject) {
      this.filterUsersBy('project_id', this.selectedProject.project_id);
      this.filterInvitationsBy('project_id_fk', this.selectedProject.project_id);
      socket.emit('joinProject', this.selectedProject.project_id);
    }
  }.observes('selectedProject')
, projectUsersObserver              : function() {
    if(this.selectedProject) {
      this.filterUsersBy('project_id', this.selectedProject.project_id);
    }
  }.observes('App.projectUsersDataController.[]')
, projectInvitationsObserver        : function() {
    if(this.selectedProject) {
      this.filterInvitationsBy('project_id_fk', this.selectedProject.project_id);
    }
  }.observes('App.invitationsDataController.[]')
, statusList              : [
    'Planning'
  , 'In Progress'
  , 'On Hold'
  , 'Late'
  , 'Blocked'
  , 'Pending'
  , 'Under Review'
  , 'Canceled'
  , 'Complete'
  ]
, userCount               : function() {
    return this.get('users').get('length');
  }.property('users.@each')
, invitations             : []
, hasInvites              : false
, hasError                : false
, errorMessage            : null
, invitationsObserver     : function() {
    if(this.invitations.length > 0) {
      this.set('hasInvites', true);
    }
    else this.set('hasInvites', false);
  }.observes('invitations.@each')
, prepInvite              : function(event) {
    var invitation = {};
    invitation.from_fk = App.authController.authUser.user_id
    invitation.invitation_id = uuid.v4()
    invitation.project_id_fk = App.selectedProjectController.selectedProject.project_id
    invitation.sent_to = event.view.invitationTo;
    invitation.created_date = new Date();
    invitation.read = false;
    invitation.from_email = App.authController.authUser.email;
    invitation.from_givenName = App.authController.authUser.givenName;
    invitation.from_familyName = App.authController.authUser.familyName;
    invitation.context_title = this.selectedProject.title;
    var exists = this.invitations.filterProperty('to', invitation.sent_to);
    if(exists.length === 0) {
      this.set('hasError', false);
      this.set('errorMessage', null);
      var newInvite = App.Invitation.create(invitation);
      this.invitations.addObject(newInvite);
      App.invitationsDataController.addObject(newInvite);
      socket.emit('newProjectInvitation', invitation);
      event.view.set('invitationTo', null);
    }
    else {
      this.set('hasError', true);
      this.set('errorMessage', invitation.sent_to + ' has already been invited.');
    }
  }
, update                  : function(updatedProject) {
    var project_id = this.selectedProject.project_id;
    socket.emit('updateProject', project_id, updatedProject);
  }
});

App.selectedTaskController = Em.Object.create({
  selectedTask            : null
, select                  : function(task) {
    this.set('selectedTask', task);
  }
, clearSelected           : function() {
    this.set('selectedTask', null);
  }
, statusList              : [
    'Planning'
  , 'In Progress'
  , 'On Hold'
  , 'Late'
  , 'Blocked'
  , 'Pending'
  , 'Under Review'
  , 'Canceled'
  , 'Complete'
  ]
, selectedTaskObserver    : function() {
    if(this.selectedTask) {
      socket.emit('joinTask', this.selectedTask.task_id);
    }
  }.observes('selectedTask')
});

// Controllers

App.ApplicationController = Em.Controller.extend();

App.LoadingController = Em.Controller.extend();

App.authController = Em.Object.create({
  authUser                : null
, hasError                : false
, errorMessage            : ''
, email                   : ''
, pw                      : ''
, registerEmail           : ''
, registerPw              : ''
, checkPw                 : ''
, betaCode                : ''
, notValid                : true
, notMatching             : true
, isLoaded                : false
, validBetaCode           : false
, validate                : function() {
    if(this.get('validBetaCode') && !this.get('notMatching')) {
      this.set('notValid', false);
    }
  }.observes('notMatching', 'validBetaCode')
, pwChecker               : function() {
    if(this.get('registerPw') === this.get('checkPw')) {
      this.set('notMatching', false);
    }
  }.observes('this.registerPw', 'this.checkPw')
, setAuthUser             : function(user) {
    this.set('hasError', false);
    this.set('errorMessage', '');
    this.set('authUser', user);
  }
, setError                : function(errorMessage) {
    this.set('hasError', true);
    this.set('errorMessage', errorMessage);
  }
, attemptLogin            : function() {
    var email = this.get('email')
      , pw = this.get('pw');
    $.ajax('/login', {
      data                  : {
        email                 : email
      , pw                    : pw
      }
    , type                  : 'POST'
    })
    .done(function(initUser) {
      initializeUser(initUser);
      App.get('router').transitionTo('workspaces');
    })
    .fail(function(jqXHR) {
      var err = jqXHR.responseText;
      App.authController.setError(err);
    });
  }
, authorize               : function(params, callback) {
    $.ajax('/auth', {
      data                  : params
    , type                    : 'POST'
    })
    .done(function(initUser) {
      initializeUser(initUser, params);
    })
    .fail(function(jqXHR) {
      var err = jqXHR.responseText;
      App.authController.setError(err);
    });
  }
, logout                  : function() {
    $.ajax('/logout', {
      data                  : {}
    , type                  : 'POST'
    })
    .done(function() {
      App.get('router').transitionTo('authenticate');
      location.reload(true);
    });
  }
, showModal             : function() {
    $('div#registerModal').modal('toggle');
  }
, newUser                 : function() {
    var email = this.get('registerEmail')
      , pw = this.get('registerPw')
      , checkPw = this.get('checkPw');
    $.ajax('/register', {
      data                  : {
        email                 : email
      , pw                    : pw
      }
    , type                    : 'POST'
    })
    .done(function(initUser) {
      initializeUser(initUser);
      App.get('router').transitionTo('workspaces');
    })
    .fail(function(jqXHR) {
      var err = jqXHR.responseText;
      App.authController.setError(err);
    });
  }
, update                  : function(updatedUser) {
    var authUser = this.get('authUser');
    for(var key in updatedUser) {
      Em.set(authUser, key, updatedUser[key]);
    }
    socket.emit('updateUser', authUser.user_id, updatedUser);
  }
, givenNameBinding        : 'this.authUser.givenname'
, familyNameBinding       : 'this.authUser.familyname'
, fullName                : function() {
    if(this.get('givenName') && this.get('familyName')) {
      return this.get('givenName') + ' ' + this.get('familyName');
    }
    else return null;
  }.property('givenName', 'familyName')
});

App.NavBarController = Em.Controller.extend({
});

App.InvitationsController = Em.ArrayProxy.extend({
  contentBinding          : 'App.invitationsDataController.content'
, filterBy                : function(key, value) {
    this.set('content', App.invitationsDataController.filterProperty(key, value));
  }
, invitationCount         : function() {
    return this.get('length');
  }.property('@each')
, invitationsToMe         : []
, filterMyInvitations     : function() {
    this.set('invitationsToMe', App.invitationsDataController.filterProperty('sent_to', App.authController.authUser.email));
  }.observes('App.invitationsDataController.[]')
, invitationsFromMe       : []
, filterSentInvitations   : function() {
    this.set('invitationsFromMe', App.invitationsDataController.filterProperty('from_fk', App.authController.authUser.user_id));
  }.observes('App.invitationsDataController.[]')
, myInvitationCount       : function() {
    return this.get('invitationsToMe').get('length');
  }.property('invitationsToMe.@each')
, sentInvitationCount     : function() {
    return this.get('invitationsFromMe').get('length');
  }.property('invitationsFromMe.@each')
, hasUnreadReceived       : false
, hasUnreadSent           : false
, unreadReceivedObserver  : function() {
    var unreadCount = this.invitationsToMe.filterProperty('read', false).get('length');
    if(unreadCount > 0) this.set('hasUnreadReceived', true);
    else this.set('hasUnreadReceived', false);
  }.observes('invitationsToMe.@each')
});

App.WorkspacesController = Em.Controller.extend({
  contentBinding          : 'App.workspacesDataController.content'
});

App.WorkspaceController = Em.Controller.extend({
  content                 : []
});

App.WorkspacesNavController = Em.ArrayProxy.extend({
  contentBinding          : 'App.workspacesDataController.content'
, new                     : function() {
    var currentUser = App.authController.authUser
      , workspace = {
          workspace_id      : uuid.v4()
        , title             : 'New Workspace'
        , created_by_fk     : currentUser.get('user_id')
        , created_date      : new Date()
        }
      , newWorkspace = App.Workspace.create(workspace);
    App.workspacesDataController.addObject(newWorkspace);
    socket.emit('newWorkspace', workspace);
  }
});

App.WorkspaceNavController = Em.Controller.extend({
});

App.ProjectsNavController = Em.ArrayProxy.extend({
  content                 : []
, filterBy                : function(key, value) {
    this.set('content', App.projectsDataController.filterProperty(key, value));
  }
, new                     : function() {
    var selectedWorkspace = App.selectedWorkspaceController.selectedWorkspace
      , project = {
          project_id        : uuid.v4()
        , title             : 'New Project'
        , workspace_id_fk   : selectedWorkspace.get('workspace_id')
        , created_date      : new Date()
        , created_by_fk     : App.authController.authUser.get('user_id')
        }
      , newProject = App.Project.create(project);
    this.addObject(newProject);
    App.projectsDataController.addObject(newProject);
    socket.emit('newProject', project);
  }
});

App.ProjectNavController = Em.Controller.extend({
});

App.ProjectController = Em.Controller.extend({
  projectBinding        : 'App.selectedProjectController.selectedProject'
, update                : function(project_id, updatedProject) {
    socket.emit('updateProject', project_id, updatedProject);
  }
, uploadFile            : function() {
    var workspace_id = App.selectedWorkspaceController.selectedWorkspace.workspace_id
      , project_id = this.get('project.project_id')
      , targetPath = '/' + workspace_id + '/' + project_id
      , meta = {};
    meta.type = 'project';
    meta.id = project_id;
    meta.broadcast_id = project_id;
    $('input[type="file"]').click().change(function(event) {
      uploadFile(event.target.files[0], meta, targetPath);
    });
  }
, files                 : []
, filterFilesBy         : function(key, value) {
    this.set('files', App.filesDataController.filterProperty(key, value));
  }
, filterDefault         : function() {
    if(this.get('project')) this.filterFilesBy('project_id', this.get('project.project_id'));
  }
, hasFiles                : function() {
    //Fires multiple times. Need to reduce to one occurrence.
    this.filterDefault();
  }.observes('this.project', 'App.filesDataController.[]')
});

App.ProjectInfoController = App.ProjectController;

App.ProjectInfoDetailsController = App.ProjectController;

App.TasksController = Em.ArrayProxy.extend({
  content                 : []
, tasksDueToday           : []
, tasksDueTomorrow        : []
, tasksDueLater           : []
, filterBy                : function(key, value) {
    this.set('content', this.filterProperty(key, value));
  }
, filterDefault           : function() {
    var selectedProject = App.selectedProjectController.selectedProject;
    if(selectedProject) {
      this.set('content', App.tasksDataController.filterProperty('project_id_fk', selectedProject.project_id));
      this.sortByPriority();
    }
  }
, dateSort                : false
, prioritySort            : false
, dataObserver            : function() {
    if(this.prioritySort) this.filterDefault();
  }.observes('App.tasksDataController.[]')
, projectObserver         : function() {
    if(this.prioritySort) this.filterDefault();
  }.observes('App.selectedProjectController.selectedProject')
, sortByPriority          : function() {
    var selectedProject = App.selectedProjectController.selectedProject;
    if(selectedProject) {
      if(selectedProject.tasks_order_by_priority) {
        //PG stores array as '{}' string.
        //Need to parse and convert to array
        var pgOrderArray = DBArrayToJSArray(selectedProject.tasks_order_by_priority);
        //Re-order controller content to match array order.
        for(var x = 0; x<pgOrderArray.length; x++) {
          var targetId = pgOrderArray[x]
            , target = this.findProperty('task_id', targetId);
          pgOrderArray[x] = target;
        }
        this.set('content', pgOrderArray);
        this.set('prioritySort', true);
      }
    }
  }
, tasksObserver           : function() {
    if(this.get('prioritySort')) this.sortByPriority();
  }.observes('App.tasksDataController.[]')
, taskCount               : function() {
    return this.get('length');
  }.property('@each')
, completeCount           : function() {
    return this.filterProperty('complete', true).get('length');
  }.property('@each.complete')
, incompleteCount         : function() {
    return this.filterProperty('complete', false).get('length');
  }.property('@each.complete')
, new                     : function() {
    //First: Create and insert new task locally.
    //Second: Update project with new task order.
    //Third: Notify sockets of new task.
    var selectedProject = App.selectedProjectController.selectedProject
      , task = {
          task_id               : uuid.v4()
        , created_by_fk         : App.authController.authUser.get('user_id')
        , created_date          : new Date()
        , project_id_fk         : selectedProject.project_id
        , title                 : null
        }
      , newTask = App.Task.create(task)
      , selectedTask = App.selectedTaskController.selectedTask;
    if(selectedTask) {
      var index = this.indexOf(selectedTask) + 1;
      this.insertAt(index, newTask);
    }
    else this.pushObject(newTask);
    this.saveOrder();
    socket.emit('newTask', task);
    App.tasksDataController.addObject(newTask);
  }
, destroy                  : function(task) {
    //Remove from task data controller.
    //Call saveOrder.
    var target = this.findProperty('task_id', task.task_id);
    this.removeObject(target);
    this.saveOrder();
    App.tasksDataController.destroy('task_id', task.task_id);
    socket.emit('destroyTask', task);
  }
, update                  : function(task_id, updatedTask) {
    socket.emit('updateTask', task_id, updatedTask);
  }
, getTaskIndex            : function(task) {
    var currentIndex = this.indexOf(task);
    return currentIndex;
  }
, saveOrder               : function() {
    //Saves the controller order of task ids in the project
    var selectedProject = App.selectedProjectController.selectedProject
      , task_ids = getIds(this.content, 'task_id')
      , updatedProject = {};
    updatedProject.modified_date = new Date();
    updatedProject.tasks_order_by_priority = JSArrayToDBArray(task_ids);
    socket.emit('updateProject', selectedProject.project_id, updatedProject);
    updatedProject.project_id = selectedProject.project_id;
    App.projectsDataController.update(updatedProject);
  }
, reorder                 : function(orderArray) {
    var newOrder = orderArray;
    var selectedProject = App.selectedProjectController.selectedProject;
    for(var x = 0; x<newOrder.length; x++) {
      var targetId = newOrder[x]
        , target = this.findProperty('task_id', targetId);
      newOrder[x] = target;
    }
    this.set('content', newOrder);
    if(selectedProject) {
      var task_ids = getIds(this.content, 'task_id')
        , updatedProject = {};
      updatedProject.modified_date = new Date();
      updatedProject.tasks_order_by_priority = JSArrayToDBArray(task_ids);
      socket.emit('updateProject', selectedProject.project_id, updatedProject);
    }
  }
, initTasksSortable       : function() {
    $('section.tasksList').sortable({
      connectWith         : 'section.tasksList'
    , items               : '> section.task'
    , axis                : 'y'
    , update              : function(event, ui) {
        var task_ids = [];
        $(ui.item).parent().find('section.task').each(function() {
          task_ids.push($(this).attr('data-tid'));
        });
        App.router.get('tasksController').reorder(task_ids);
      }
    });
  }
/*, updateTaskOrder         : function() {
    //Grab task ids when content changes.
    var selectedProject = App.selectedProjectController.selectedProject
    if(selectedProject) {
      console.log(this.content);
      var task_ids = getIds(this.content, 'task_id')
        , updatedProject = {};
      updatedProject.modified_date = new Date();
      updatedProject.tasks_order_by_priority = JSArrayToDBArray(task_ids);
      console.log(updatedProject);
      socket.emit('updateProject', selectedProject.project_id, updatedProject);
    }
  }.observes('[]')*/
});

App.TaskController = Em.Controller.extend({
  taskBinding             : 'App.selectedTaskController.selectedTask'
, update                  : function(task_id, updatedTask) {
    socket.emit('updateTask', task_id, updatedTask);
  }
, uploadFile              : function() {
    var workspace_id = App.selectedWorkspaceController.selectedWorkspace.workspace_id
      , project_id = App.selectedProjectController.selectedProject.project_id
      , task_id = this.get('task.task_id')
      , targetPath = '/' + workspace_id + '/' + project_id + '/' + task_id
      , meta = {};
    meta.type = 'task';
    meta.project_id = project_id;
    meta.id = task_id;
    meta.broadcast_id = project_id;
    $('input[type="file"]').click().change(function(event) {
      uploadFile(event.target.files[0], meta, targetPath);
    });
  }
, givenNameBinding        : 'App.selectedTaskController.selectedTask.assignee_givenname'
, familyNameBinding       : 'App.selectedTaskController.selectedTask.assignee_familyname'
, fullName                : function() {
    if(this.get('givenName') && this.get('familyName')) {
      return this.get('givenName') + ' ' + this.get('familyName');
    }
  }.property('givenName', 'familyName')
, files                   : []
, filterFilesBy           : function(key, value) {
    this.set('files', App.filesDataController.filterProperty(key, value));
  }
, filterDefault           : function() {
    if(this.get('task')) this.filterFilesBy('task_id', this.get('task.task_id'));
  }
, hasFiles                : function() {
    //Fires multiple times. Need to reduce to one occurrence.
    this.filterDefault();
  }.observes('this.task', 'App.filesDataController.[]')
, update                  : function(task_id, updatedTask) {
    socket.emit('updateTask', task_id, updatedTask);
  }
, hasDueDate              : false
, priorityToday           : false
, priorityUpcoming        : false
, priorityLater           : false
, clearDue                : function() {
    this.set('priorityToday', false);
    this.set('priorityUpcoming', false);
    this.set('priorityLater', false);
  }
, setDueToday             : function() {
    var today = new Date().setHours(0,0,0,0)
      , updatedTask = {};
    today = new Date(today);
    this.clearDue();
    this.set('priorityToday', true);
    updatedTask.modified_date = new Date();
    updatedTask.due_date = today;
    updatedTask.soft_date = 'Today';
    this.update(this.get('task.task_id'), updatedTask);
  }
, setUpcoming             : function() {
    var updatedTask = {};
    this.clearDue();
    this.set('priorityUpcoming', true);
    updatedTask.modified_date = new Date();
    updatedTask.soft_date = 'Upcoming';
    this.update(this.get('task.task_id'), updatedTask);
  }
, setDueLater             : function() {
    var updatedTask = {};
    this.clearDue();
    this.set('priorityLater', true);
    updatedTask.modified_date = new Date();
    updatedTask.soft_date = 'Later';
    this.update(this.get('task.task_id'), updatedTask);
  }
, checkDue                : function() {
    var task = this.get('task');
    if(task) {
      this.clearDue();
      if(task.soft_date === 'Today') this.set('priorityToday', true);
      else if(task.soft_date === 'Upcoming') this.set('priorityUpcoming', true);
      else if(task.soft_date === 'Later') this.set('priorityLater', true);
      else this.clearDue();
    }
  }.observes('this.task.due_date')
});

App.TaskInfoController = App.TaskController;

App.TaskInfoDetailsController = App.TaskController;

App.InfoActivitiesController = Em.Controller.extend({
});

App.FilesController = Em.ArrayProxy.extend({
  contentBinding          : 'App.filesDataController'
, loadAttachment          : function(file) {
    var fileInfo = this.findProperty('file_id', file.get('file_id'));
    $.ajax({
      url             : '/attachment'
    , type            : 'POST'
    , data            : {
        path            : file.path
      , file_id         : file.file_id
      , filename        : file.filename
      }
    })
    .done(function(url) {
      window.open(url);
    });
  }
});

// Views

App.ApplicationView = Em.View.extend({
  templateName            : 'appView'
, classNames              : ['container']
});

App.LoadingView = Em.View.extend({
  templateName            : 'loadingView'
});

App.AuthView = Em.View.extend({
  templateName            : 'auth'
, tagName                 : 'div'
, classNames              : ['auth']
, betaCodeInput           : Em.TextField.extend({
    valueBinding            : 'App.authController.betaCode'
  , change                  : function() {
      var betaCode = this.value;
      socket.emit('checkBetaCode', betaCode);
    }
  })
});

App.NavBarView = Em.View.extend({
  templateName            : 'navBarView'
, tagName                 : 'header'
, classNames              : ['navBar']
, loadProfile             : function() {
    var user_id = App.authController.authUser.user_id;
    socket.emit('findUserInfo', user_id);
  }
, logout                  : function() {

  }
});

App.InvitationView = Em.View.extend({
  click                   : function(event) {
    console.log('invitation');
  }
});

App.GlobalNavItemView = Em.View.extend({
  templateName            : 'globalNavItemView'
, tagName                 : 'li'
, classNames              : ['navItem']
});

App.WorkspacesNavView = Em.View.extend({
  templateName            : 'globalNavView'
, navTitle                : 'Workspaces'
});

App.WorkspaceNavView = Em.View.extend({
  templateName            : 'globalNavView'
, navTitleBinding         : 'App.selectedWorkspaceController.selectedWorkspace.title'
});

App.ProjectsNavView = Em.View.extend({
  templateName            : 'globalNavView'
, navTitleBinding         : 'App.selectedWorkspaceController.selectedWorkspace.title'
});

App.ProjectNavView = Em.View.extend({
  templateName            : 'globalNavProjectView'
, navTitleBinding         : 'App.selectedProjectController.selectedProject.title' 
, isTasks                 : false
, isPeople                : false
, isFiles                 : false
, clearActiveNav          : function() {
    this.set('isTasks', false);
    this.set('isPeople', false);
    this.set('isFiles', false);
  }
});

App.ProjectView = Em.View.extend({
  templateName            : 'projectView'
, tagName                 : 'section'
, classNames              : ['project']
, projectStatus           : Em.Select.extend({
    contentBinding          : 'App.selectedProjectController.statusList'
  , selectionBinding        : 'App.selectedProjectController.selectedProject.project_status'
  , optionValuePath         : 'content'
  , optionLabelPath         : 'content'
  , change                  : function() {
      var updatedProject = {};
      updatedProject.modified_date = new Date();
      updatedProject.project_status = this.get('value');
      this.get('parentView').updateProject(updatedProject);
    }
  })
, projectTitle            : Em.TextField.extend({
    valueBinding          : 'App.selectedProjectController.selectedProject.title'
  , change                : function() {
      var updatedProject = {};
      updatedProject.modified_date = new Date();
      updatedProject.title = this.get('value');
      this.get('parentView').update(updatedProject);
    }
  , focusIn               : function() {
      var router = App.router;
      router.transitionTo('project');
      router.get('projectController').connectOutlet('info', 'projectInfo');
      router.get('projectInfoController').connectOutlet('projectInfoDetails');
      App.selectedTaskController.clearSelected();
    }
  })
, updateProject           : function(updatedProject) {
    this.get('controller').update(updatedProject);
  }
});

App.ProjectInfoView = Em.View.extend({
  templateName            : 'infoView'
, tagName                 : 'section'
, classNames              : ['infoView', 'infoProject']
, isDetails               : true
, isActivity              : false
, clearActive             : function() {
    this.set('isDetails', false);
    this.set('isActivity', false);
  }
});

App.ProjectInfoDetailsView = Em.View.extend({
  templateName            : 'projectInfoDetailsView'
, tagName                 : 'section'
, classNames              : ['details']
, projectStatus           : Em.Select.extend({
    contentBinding          : 'App.selectedProjectController.statusList'
  , selectionBinding        : 'App.selectedProjectController.selectedProject.project_status'
  , optionValuePath         : 'content'
  , optionLabelPath         : 'content'
  , change                  : function() {
      var updatedProject = {}
      updatedProject.modified_date = new Date();
      updatedProject.project_status = this.get('value');
      this.get('parentView').updateProject(updatedProject);
    }
  })
, title                   : Em.TextField.extend({
    valueBinding            : 'App.selectedProjectController.selectedProject.title'
  , change                  : function() {
      var updatedProject = {};
      updatedProject.modified_date = new Date();
      updatedProject.title = this.get('value');
      this.get('parentView').updateProject(updatedProject);
    }
  })
, description             : Em.TextArea.extend({
    valueBinding            : 'App.selectedProjectController.selectedProject.description'
  , change                  : function() {
      var updatedProject = {};
      updatedProject.modified_date = new Date();
      updatedProject.description = this.get('value');
      this.get('parentView').updateProject(updatedProject);
    }
  })
, updateProject           : function(updatedProject) {
    var project_id = App.selectedProjectController.selectedProject.project_id;
    this.get('controller').update(project_id, updatedProject);
  }
, hideDropdown            : function(event) {
    $(event.srcElement).parent().parent().parent().removeClass('open');
  }
});

App.TasksView = Em.View.extend({
  templateName          : 'tasksView'
, tagName               : 'section'
, classNames            : ['tasks']
, didInsertElement      : function() {
    this.get('controller').initTasksSortable();
    initTasksTooltip();
  }
});

App.TaskView = Em.View.extend({
  templateName            : 'taskView'
, tagName                 : 'section'
, classNames              : ['task']
, classNameBindings       : ['completed:complete', 'selected:selected']
, attributeBindings       : ['data-tid']
, 'data-tidBinding'       : 'this._context.task_id'
, givenNameBinding        : 'this._context.assignee_givenname'
, familyNameBinding       : 'this._context.assignee_familyname'
, completedBinding        : 'this._context.complete'
, selectedBinding         : 'this._context.selected'
, initials                : function() {
    if(this.get('givenName') && this.get('familyName')) {
      return this.get('givenName').charAt(0) + this.get('familyName').charAt(0);
    }
    else return null;
  }.property('givenName', 'familyName')
, fullName                : function() {
    if(this.get('givenName') && this.get('familyName')) {
      return this.get('givenName') + ' ' + this.get('familyName');
    }
    else return null;
  }.property('givenName', 'familyName')
, taskIndex               : function() {
    var task = this.get('context')
      , index = this.get('controller').getTaskIndex(task);
    return index + 1;
  }.property()
, taskIndexObserver       : function() {
    var task = this.get('context')
      , index = this.get('controller').getTaskIndex(task);
    this.set('taskIndex', index);
  }.observes('App.router.tasksController.[]')
, completeCheckbox        : Em.Checkbox.extend({
    change                  : function() {
      var updatedTask = {};
      updatedTask.modified_date = new Date();
      updatedTask.complete = this.get('checked');
      if(this.get('checked')) updatedTask.task_status = 'Complete'
      else updatedTask.task_status = null;
      this.get('parentView').updateTask(updatedTask);
    }
  })
, taskTitle               : Em.TextField.extend({
    change                  : function() {
      var updatedTask = {};
      updatedTask.modified_date = new Date();
      updatedTask.title = this.get('value');
      this.get('parentView').updateTask(updatedTask);
    }
  , focusIn                 : function() {
      var task = this.get('parentView').get('context');
      App.selectedTaskController.select(task);
    }
  , keyUp                   : function(e) {
      var task = this.get('parentView').get('context')
        , tasksController = App.get('router').get('tasksController');
      switch(e.which) {
        case 13:
          //Enter
          tasksController.new();
        break;
      }
    }
  , keyDown                 : function(e) {
      var task = this.get('parentView').get('context')
        , tasksController = App.get('router').get('tasksController');
      switch(e.which) {
        case 8:
          //Delete
          var val = this.get('value');
          if(val === '') {
            var prevIndex = tasksController.indexOf(task)
              , prevTask = tasksController.objectAt(prevIndex - 1);
            tasksController.destroy(task);
            if(prevTask) {
              App.selectedTaskController.select(prevTask);
              $('section.task[data-tid="' + prevTask.task_id + '"]').find('.title').find('input[type="text"]').focus();
              console.log($('section.task[data-tid="' + prevTask.task_id + '"]').find('.title').find('input[type="text"]'));
            }
          }
        break;
      }
    }
  })
, updateTask              : function(updatedTask) {
    var task_id = this.get('context').get('task_id');
    this.get('controller').update(task_id, updatedTask);
  }
, click                   : function(event) {
    var task = this.get('context');
    App.selectedTaskController.select(task);
    Em.run.next(function() {
      App.get('router').transitionTo('task', task);
    });
  }
, didInsertElement        : function() {
    var task = this.get('context')
      , stringDueDate = null
      , assignee = null
      , workspaceUsers = App.selectedWorkspaceController.users
      , taskHtml = $('section.task[data-tid="' + task.task_id + '"]')
      , elapsedSec = elapsedTime(task.created_date, 'sec');
    if(elapsedSec < 30) taskHtml.find('.title').find('input[type="text"]').focus();
    if(this.get('fullName')) assignee = this.get('fullName');
    App.router.get('tasksController').initTasksSortable();
    initInfoTooltip();
    if(task.get('stringDueDate')) stringDueDate = task.get('stringDueDate');
    taskHtml.find('.assignee').find('span').editable({
      type                    : 'text'
    , pk                      : task.task_id
    , placeholder             : 'Enter email or name'
    , name                    : 'assignee_fk'
    , value                   : assignee
    })
    .on('shown', function() {
      $(this).data('editable').container.$form.parent().parent().parent().find('h3').remove();
      var target = $(this).data('editable').container.$form.find('input')
        , currentTask = App.tasksDataController.fetch('task_id', task.task_id)
        , val = target.val()
        , fullName = null;
      if(currentTask.assignee_familyname && currentTask.assignee_givenname) fullName = currentTask.assignee_givenname + ' ' + currentTask.assignee_familyname;
      if(fullName && fullName !== val) target.val(fullName);
      initUsersTypeahead(target, workspaceUsers, task.task_id);
    });
    taskHtml.find('.due').find('span').editable({
      type                    : 'text'
    , pk                      : task.task_id
    , name                    : 'due_date'
    , placeholder             : 'mm/dd/yy'
    , value                   : stringDueDate
    })
    .on('shown', function() {
      $(this).data('editable').container.$form.parent().parent().parent().find('h3').remove();
      var target = $(this).data('editable').container.$form.find('input')
        , val = target.val().trim();
      if(val === '') target.val(val);
      if(task.get('stringDueDate') && task.get('stringDueDate') !== val) target.val(task.get('stringDueDate'));
      target.datepicker({
        format                  : 'mm/dd/yy'
      , autoclose               : true
      })
      .on('changeDate', function(e) {
        var date = e.date.valueOf()
          , updatedTask = {};
        updatedTask.modified_date = new Date();
        updatedTask.due_date = new Date(date);
        App.get('router').get('taskController').update(task.task_id, updatedTask);
      });
    });
  }
});

App.TaskInfoView = Em.View.extend({
  templateName            : 'infoView'
, tagName                 : 'section'
, classNames              : ['infoView', 'infoTask']
, isDetails               : true
, isActivity              : false
, clearActive             : function() {
    this.set('isDetails', false);
    this.set('isActivity', false);
  }
, didInsertElement        : function() {
    initInfoTooltip();
  }
});

App.TaskInfoDetailsView = Em.View.extend({
  templateName            : 'taskInfoDetailsView'
, tagName                 : 'section'
, classNames              : ['details']
, taskStatus           : Em.Select.extend({
    viewName                : 'select'
  , contentBinding          : 'App.selectedTaskController.statusList'
  , selectionBinding        : 'App.selectedTaskController.selectedTask.task_status'
  , optionValuePath         : 'content'
  , optionLabelPath         : 'content'
  , change                  : function() {
      var updatedTask = {}
      updatedTask.modified_date = new Date();
      updatedTask.task_status = this.get('value');
      this.get('parentView').updateTask(updatedTask);
    }
  })
, title                   : Em.TextField.extend({
    valueBinding            : 'App.selectedTaskController.selectedTask.title'
  , change                  : function() {
      var updatedTask = {};
      updatedTask.modified_date = new Date();
      updatedTask.title = this.get('value');
      this.get('parentView').updateTask(updatedTask);
    }
  })
, notes                   : Em.TextArea.extend({
    valueBinding            : 'App.selectedTaskController.selectedTask.notes'
  , change                  : function() {
      var updatedTask = {};
      updatedTask.modified_date = new Date();
      updatedTask.notes = this.get('value');
      this.get('parentView').updateTask(updatedTask);
    }
  })
, selectAssignee          : function(event) {
    var selectedTask = App.selectedTaskController.selectedTask
      , target = 'input[typeahead-tid="' + selectedTask.task_id + '"]'
      , workspaceUsers = App.selectedWorkspaceController.users;
    initUsersTypeahead(target, workspaceUsers, selectedTask.task_id);
    this.set('isHiddenAssignee', false);
    $(target).focus();
  }
, isHiddenAssignee          : true
, assigneeInput           : Em.TextField.extend({
    valueBinding            : 'App.router.taskController.fullName'
  , classNameBindings       : ['this.parentView.isHiddenAssignee:hide', 'assigneeInput']
  , attributeBindings       : ['typeahead-tid']
  , 'typeahead-tidBinding'  : 'App.selectedTaskController.selectedTask.task_id'
  , focusOut                : function() {
      this.get('parentView').set('isHiddenAssignee', true);
    }
  , isHiddenBinding         : 'this.parentView.isHiddenAssignee'
  })
, showAssignee            : Em.View.extend({
    isHidden                : false
  , tagName                 : 'span'
  , classNameBindings       : ['this.parentView.isHiddenAssignee::hide']
  })
, setDueDate              : function(event) {
    var selectedTask = App.selectedTaskController.selectedTask
      , target = 'input[datepicker-tid="' + selectedTask.task_id + '"]';
    this.set('isHiddenDueDate', false);
  }
, isHiddenDueDate           : true
, showDueDate             : Em.View.extend({
    tagName                 : 'span'
  , classNameBindings       : ['this.parentView.isHiddenDueDate::hide']
  })
, datepickerInput         : Em.TextField.extend({
    valueBinding            : 'App.selectedTaskController.selectedTask.stringDueDate'
  , classNameBindings       : ['this.parentView.isHiddenDueDate:hide', 'datepickerInput']
  , attributeBindings       : ['datepicker-tid']
  , 'datepicker-tidBinding' : 'App.selectedTaskController.selectedTask.task_id'
  , focusOut                : function() {
      this.get('parentView').set('isHiddenDueDate', true);
    }
  , change                  : function(event) {
      var date = this.get('value');
      var updatedTask = {};
      updatedTask.modified_date = new Date();
      updatedTask.due_date = new Date(date);
      this.get('parentView').updateTask(updatedTask);
      this.get('parentView').set('isHiddenDueDate', true);
    }
  })
, updateTask              : function(updatedTask) {
    var task_id = App.selectedTaskController.selectedTask.task_id;
    this.get('controller').update(task_id, updatedTask);
  }
, removeAssignee          : function() {
    var updatedTask = {};
    updatedTask.modified_date = new Date();
    updatedTask.assignee_fk = null;
    this.updateTask(updatedTask);
  }
, clickedName             : function() {

  }
, clickedRemove           : function() {

  }
, removeDueDate           : function() {
    var updatedTask = {};
    updatedTask.modified_date = new Date();
    updatedTask.due_date = null;
    this.updateTask(updatedTask);
  }
, destroyTask             : function(event) {
    $(event.srcElement).parent().parent().parent().removeClass('open');
    var selectedTask = App.selectedTaskController.selectedTask
      , tasksController = App.get('router').get('tasksController');
    if(selectedTask) {
      var prevIndex = tasksController.indexOf(selectedTask)
        , prevTask = tasksController.objectAt(prevIndex - 1);
      tasksController.destroy(selectedTask);
      if(prevTask) App.selectedTaskController.select(prevTask);
    }
  }
, didInsertElement        : function() {
    $('input[datepicker-tid]').datepicker({
      format                  : 'mm/dd/yy'
    , autoclose               : true
    });
  }
});

App.InfoActivitiesView = Em.View.extend({
  templateName            : 'infoActivitiesView'
, tagName                 : 'section'
, classNames              : ['activities']
});

App.AttachmentView = Em.View.extend({
  templateName            : 'attachmentView'
, tagName                 : 'li'
, classNames              : ['item', 'attachment', 'label']
, url                     : 'this.context.url'
, removeFile              : function() {
    var file = this.get('context');
  }
});

App.WorkspaceOptionsModalView = Em.View.extend({
  templateName            : 'workspaceOptionsModalView'
, classNames              : ['modal', 'workspace']
, title                   : Em.TextField.extend({
    valueBinding            : 'App.selectedWorkspaceController.selectedWorkspace.title'
  , change                  : function() {
      var updatedWorkspace = {};
      updatedWorkspace.title = this.value;
      this.get('parentView').update(updatedWorkspace);
    }
  })
, usersBinding            : 'App.selectedWorkspaceController.users'
, showTab                 : function(event) {
    $(event.srcElement).tab('show');
    $(event.srcElement).addClass('active');
  }
, inviteInputText         : Em.TextField.extend({
    valueBinding            : 'this.parentView.invitationTo'
  , keyUp                   : function(event) {
      if(emailReg.test(this.value) && this.value !== '') {
        this.get('parentView').set('invalidEmail', false);
      }
      else this.get('parentView').set('invalidEmail', true);
    }
  })
, invitationTo            : null
, invalidEmail            : true
, controller              : App.selectedWorkspaceController
, update                  : function(updatedWorkspace) {
    updatedWorkspace.modified_date = new Date();
    this.get('controller').update(updatedWorkspace);
  }
});

App.ProjectOptionsModalView = Em.View.extend({
  templateName            : 'projectOptionsModalView'
, classNames              : ['modal', 'project']
, title                   : Em.TextField.extend({
    valueBinding            : 'App.selectedProjectController.selectedProject.title'
  , change                  : function() {
      var updatedProject = {};
      updatedProject.title = this.value;
      this.get('parentView').update(updatedProject);
    }
  })
, usersBinding              : 'App.selectedProjectController.users'
, showTab                   : function(event) {
    $(event.srcElement).tab('show');
    $(event.srcElement).addClass('active');
  }
, inviteInputText         : Em.TextField.extend({
    valueBinding            : 'this.parentView.invitationTo'
  , keyUp                   : function(event) {
      if(emailReg.test(this.value) && this.value !== '') {
        this.get('parentView').set('invalidEmail', false);
      }
      else this.get('parentView').set('invalidEmail', true);
    }
  })
, invitationTo            : null
, invalidEmail            : true
, controller              : App.selectedProjectController
, update                  : function(updatedProject) {
    updatedProject.modified_date = new Date();
    this.get('controller').update(updatedProject);
  }
});

App.UserView = Em.View.extend({
  givenNameBinding        : 'this._context.givenname'
, familyNameBinding       : 'this._context.familyname'
, fullName                : function() {
    return this.get('givenName') + ' ' + this.get('familyName');
  }.property('givenName', 'familyName')
, emailBinding            : 'this.context.email'
, removeUser              : function() {
    console.log(this._context);
  }
});

App.ModalInviteView = Em.View.extend({
  templateName            : 'modalInviteView'
, tagName                 : 'section'
, classNames              : ['invite']
, parsedDate              : function() {
    var date = new Date(this.get('context').get('created_date'))
      , time = elapsedTime(date);
    return time;
  }.property()
});

App.NavBarInviteView = Em.View.extend({
  acceptInvite            : function() {
    var invitation = this.get('context')
      , authUser = App.authController.authUser;
    invitation.sent_to_id = authUser.user_id;
    if(invitation.workspace_id_fk) {
      socket.emit('acceptWorkspaceInvitation', invitation);
    }
    else if(invitation.project_id_fk) {
      socket.emit('acceptProjectInvitation', invitation);
    }
    $('.invitations.dropdown.open').removeClass('open');
  }
, declineInvite           : function() {
    var invitation = this.get('context');
    invitation.sent_to_id = App.authController.authUser.user_id;
    if(invitation.workspace_id_fk) {
      socket.emit('declineWorkspaceInvitation', invitation);
    }
    else if(invitation.project_id_fk) {
      socket.emit('declineProjectInvitation', invitation);
    }
  }
, givenNameBinding        : 'this.context.from_givenName'
, familyNameBinding       : 'this.context.from_familyName'
, fullName                : function() {
    return this.get('givenName') + ' ' + this.get('familyName');
  }.property('givenName', 'familyName')
});

App.UserProfileModalView = Em.View.extend({
  templateName            : 'userProfileModalView'
, classNames              : ['modal']
, attributeBindings       : ['data-uid']
, 'data-uidBinding'       : 'App.authController.authUser.user_id'
, givenNameBinding        : 'App.authController.authUser.givenname'
, familyNameBinding       : 'App.authController.authUser.familyname'
, emailBinding            : 'App.authController.authUser.email'
, fullName                : function() {
    return this.get('givenName') + ' ' + this.get('familyName');
  }.property('givenName', 'familyName')
, givenNameInputText      : Em.TextField.extend({
    valueBinding            : 'this.parentView.givenName'
  , classNames              : ['givenName']
  , change                  : function() {
      var updatedUser = {};
      updatedUser.modified_date = new Date();
      updatedUser.givenName = this.value;
      this.get('parentView').updateUser(updatedUser);
    }
  })
, familyNameInputText     : Em.TextField.extend({
    valueBinding            : 'this.parentView.familyName'
  , classNames              : ['familyName']
  , change                  : function() {
      var updatedUser = {};
      updatedUser.modified_date = new Date();
      updatedUser.familyName = this.value;
      this.get('parentView').updateUser(updatedUser);
    }
  })
, emailInputText          : Em.TextField.extend({
    valueBinding            : 'this.parentView.email'
  })
, showTab                 : function(event) {
    $(event.srcElement).tab('show');
    $(event.srcElement).addClass('active');
  }
, updateUser              : function(updatedUser) {
    App.authController.update(updatedUser);
  }
});

// Routes

App.Router = Em.Router.extend({
  enableLogging           : true
, location                : 'hash'
, root                    : Em.Route.extend({
    index                   : Em.Route.extend({
      route                   : '/'
    , enter                   : function(router, params) {
        var authUser = App.authController.get('authUser');
        if(authUser) router.transitionTo('workspaces');
        else router.transitionTo('authenticate');
      }
    })
  , loading                 : Em.State.extend({
      connectOutlets          : function(router, context) {
        App.authController.addObserver('isLoaded', function() {
          var authUser = App.authController.get('authUser')
            , workspace = App.selectedWorkspaceController.get('selectedWorkspace')
            , project = App.selectedProjectController.get('selectedProject');
          if(authUser) {
            if(workspace) {
              if(project) {
                router.get('applicationController').connectOutlet('nav', 'projectNav');
                router.transitionTo('projects');
              }
              else {
                router.get('applicationController').connectOutlet('nav', 'workspacesNav');
                router.transitionTo('workspaces');
              }
            }
            else {
              router.get('applicationController').connectOutlet('nav', 'workspacesNav');
              router.transitionTo('workspaces');
            }
          }
          else {
            router.get('applicationController').connectOutlet('auth');
            router.transitionTo('authenticate');
            location.reload(true);
          }
        });
      }
      /*enter                   : function(router) {
        App.authController.addObserver('isLoaded', function() {
          console.log('loading');
          var authUser = App.authController.get('authUser')
            , workspace = App.selectedWorkspaceController.get('selectedWorkspace')
            , project = App.selectedProjectController.get('selectedProject');
          Em.run.next(function() {
            if(authUser) {
              if(project) {
                router.get('applicationController').connectOutlet('nav', 'projectNav');
                router.transitionTo('projects');
              }
              else {
                router.get('applicationController').connectOutlet('nav', 'workspacesNav');
                router.transitionTo('workspaces');
              }
            }
            else {
              router.get('applicationController').connectOutlet('auth');
              router.transitionTo('authenticate');
              location.reload(true);
            }
          });
        });
      }*/
    })
  , authenticate            : Em.Route.extend({
      route                   : '/login'
    , index                   : Em.Route.extend({
        route                   : '/'
      , connectOutlets          : function(router, context) {
          router.get('applicationController').connectOutlet('auth');
        }
      })
    , initialState            : 'index'
    , loadWorkspaces          : Em.Route.transitionTo('workspaces')
    })
  , workspaces              : Em.Route.extend({
      route                   : '/:user_id'
    , load                    : Em.Route.transitionTo('workspace')
    , initialState            : 'index'
    , index                   : Em.Route.extend({
        route                   : '/'
      , connectOutlets          : function(router, context) {
          router.get('applicationController').connectOutlet('nav', 'workspacesNav', context);
        }
      })
    , loadOptions             : function(router, context) {
        var workspace_id = context.context.workspace_id;
        App.selectedWorkspaceController.select(context.context);
        $('.modal.workspace').attr('data-wid', workspace_id);
        socket.emit('joinWorkspace', workspace_id);
        socket.emit('findWorkspaceInfo', workspace_id);
      }
    , serialize               : function(router, context) {
        /*App.authController.addObserver('isLoaded', function() {
          return App.authController.get('authUser').get('user_id');
        });*/
        //console.log(workspaces.get('user_id'))
        return { user_id: App.authController.get('authUser').get('user_id') };
        /*var authUser = App.authController.get('authUser');
        if(authUser) {
          console.log('yes');
          return { user_id: authUser.get('user_id') };
        }
        else {
          var deferred = $.Deferred();
          App.authController.addObserver('isLoaded', function() {
            var authUser = App.authController.get('authUser');
            deferred.resolve(authUser.user_id);
          });
          console.log(deferred.promise());
          deferred.promise().done(function(user_id) {
            return { user_id: user_id };
          });
        }*/
      }
    , deserialize             : function(router, params) {
        var deferred = $.Deferred();
        //console.log(window.location.hash);
        App.authController.authorize(params, function(initUser) {
          deferred.resolve(initUser.user);
        });
        return deferred.promise();
      }
    , loading                 : Em.State.extend({
        connectOutlets          : function(router, context) {
          console.log('workspaces');
        }
      })
    , navTitle                : function() {
        return 'Workspaces';
      }
    , workspace               : Em.Route.extend({
        route                   : '/:workspace_id'
      , serialize               : function(router, context) {
          App.selectedWorkspaceController.select(context);
          socket.emit('findWorkspace', context.workspace_id);
          return { workspace_id: context.get('workspace_id') }
        }
      , deserialize             : function(router, params) {
          var deferred = $.Deferred();
          App.authController.authorize(params, function(initUser) {
            var workspace = App.workspacesDataController.fetch('workspace_id', params.workspace_id);
            deferred.resolve(workspace);
          });
          return deferred.promise();
        }
      , loading                 : Em.State.extend({
          connectOutlets          : function(router, context) {
            console.log('workspace');
          }
        })
      , initialState            : 'index'
      , index                   : Em.Route.extend({
          route                   : '/'
        , redirectsTo             : 'projects'
        })
      , load                    : Em.Route.transitionTo('project')
      , navTitle                : function() {
          return App.selectedWorkspaceController.selectedWorkspace.get('title');
        }
      , projects              : Em.Route.extend({
          route                 : '/'
        , index                 : Em.Route.extend({
            route                 : '/'
          , loadOptions             : function(router, context) {
              var project_id = context.context.project_id;
              App.selectedProjectController.select(context.context);
              $('.modal.project').attr('data-pid', project_id);
              socket.emit('joinProject', project_id);
              socket.emit('findProjectInfo', project_id);
            }
          })
        , initialState          : 'index'
        , connectOutlets        : function(router, context) {
            router.get('applicationController').connectOutlet('nav', 'projectsNav');
          }
        , loading               : Em.State.extend({
            connectOutlets        : function(router, context) {
              console.log('projects');
            }
          })
        , project               : Em.Route.extend({
            route                 : '/projects/:project_id'
          , serialize             : function(router, context) {
              return { project_id: context.get('project_id') }
            }
          , deserialize           : function(router, params) {
              var deferred = $.Deferred();
              App.authController.authorize(params, function(initUser) {
                var project = App.projectsDataController.fetch('project_id', params.project_id);
                deferred.resolve(project);
              });
              return deferred.promise();
            }
          , goBack                : Em.Route.transitionTo('workspace')
          , index                 : Em.Route.extend({
              route                 : '/'
            , loadTasks             : function(router, context) {
                context.view.clearActiveNav();
                context.view.set('isTasks', true);
                router.get('applicationController').connectOutlet('app', 'project');
                router.get('projectController').connectOutlet('tasks', 'tasks');
                router.get('projectController').connectOutlet('info', 'projectInfo');
                router.get('projectInfoController').connectOutlet('projectInfoDetails');
              }
            , loadPeople            : function(router, context) {
                context.view.clearActiveNav();
                context.view.set('isPeople', true);
              }
            , loadFiles             : function(router, context) {
                context.view.clearActiveNav();
                context.view.set('isFiles', true);
              }
            , loadActivity          : function(router, context) {
                context.view.clearActive();
                context.view.set('isActivity', true);
                router.get('projectInfoController').connectOutlet('infoActivities');
              }
            , loadDetails           : function(router, context) {
                context.view.clearActive();
                context.view.set('isDetails', true);
                router.get('projectInfoController').connectOutlet('projectInfoDetails');
              }
            })
          , connectOutlets        : function(router, context) {
              App.selectedProjectController.select(context);
              socket.emit('findProject', context.project_id);
              socket.emit('joinProject', context.project_id);
            }
          , initialState          : 'index'
          , loadTask              : Em.Route.transitionTo('task')
          , task                    : Em.Route.extend({
              route                   : '/task/:task_id'
            , index                   : Em.Route.extend({
                route:                  '/'
              , loadActivity          : function(router, context) {
                  context.view.clearActive();
                  context.view.set('isActivity', true);
                  router.get('taskInfoController').connectOutlet('infoActivities');
                }
              , loadDetails           : function(router, context) {
                  context.view.clearActive();
                  context.view.set('isDetails', true);
                  router.get('taskInfoController').connectOutlet('taskInfoDetails');
                }
              })
            , serialize               : function(router, context) {
                return { task_id: context.get('task_id') }
              }
            , deserialize             : function(router, params) {
                var deferred = $.Deferred();
                App.authController.authorize(params, function(initUser) {
                  var task = App.tasksDataController.fetch('task_id', params.task_id);
                  deferred.resolve(task);
                });
                return deferred.promise();
              }
            , initialState            : 'index'
            , connectOutlets          : function(router, context) {
                App.selectedTaskController.select(context);
                router.get('projectController').connectOutlet('info', 'taskInfo');
                router.get('taskInfoController').connectOutlet('taskInfoDetails');
              }
            })
          })
        })
      })
    })
  })
});

App.initialize();
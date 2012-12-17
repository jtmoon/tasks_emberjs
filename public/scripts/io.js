var socket = io.connect('http://localhost');

socket.on('connect', function() {
});

socket.on('error', function(err) {
  console.log(err);
});

socket.on('checkedBetaCode', function(bool, errorMessage) {
  if(bool) {
    Mako.authController.set('validBetaCode', true);
    Mako.authController.set('hasError', false);
    Mako.authController.set('errorMessage', '');
  }
  else {
    Mako.authController.set('hasError', true);
    Mako.authController.set('errorMessage', errorMessage);
  }
});

socket.on('joinedProject', function(project_id) {
});

socket.on('createdNewWorkspace', function(workspace) {
});

socket.on('createdNewProject', function(project) {
});

socket.on('createdNewTask', function(task) {
  Mako.tasksDataController.add(task);
});

socket.on('updatedUser', function(updatedUser) {
  updateUserInControllers(updatedUser);
});

socket.on('updatedProject', function(updatedProject) {
  Mako.projectsDataController.update(updatedProject);
});

socket.on('updatedTask', function(updatedTask) {
  Mako.tasksDataController.update(updatedTask);
});

socket.on('updatedWorkspace', function(updatedWorkspace) {
  Mako.workspacesDataController.update(updatedWorkspace);
});

socket.on('receivedNewInvitation', function(newInvitation) {
  Mako.invitationsDataController.add(newInvitation);
});

socket.on('addWorkspace', function(workspace) {
  Mako.workspacesDataController.add(workspace);
});

socket.on('addWorkspaces', function(workspaces) {
  Mako.workspacesDataController.addMany(workspaces);
});

socket.on('addWorkspaceUser', function(user) {
  Mako.workspaceUsersDataController.add(user);
});

socket.on('addWorkspaceUsers', function(users) {
  Mako.workspaceUsersDataController.addMany(users);
});

socket.on('addProject', function(project) {
  Mako.projectsDataController.add(project);
});

socket.on('addProjects', function(projects) {
  Mako.projectsDataController.addMany(projects);
});

socket.on('addTask', function(task) {
  Mako.tasksDataController.add(task);
});

socket.on('addTasks', function(tasks) {
  Mako.tasksDataController.addMany(tasks);
});

socket.on('removeInvitation', function(invitation_id) {
  Mako.invitationsDataController.remove(invitation_id);
});

socket.on('destroyedTask', function(task) {
  Mako.tasksDataController.destroy('task_id', task.task_id);
});

socket.on('foundUserInfo', function(userInfo) {
  if(userInfo.connections) {
    var convertedUsers = convertUsers(userInfo.connections);
    Mako.connectionsDataController.addMany(convertedUsers);
  }
  $('div[data-uid="' + Mako.authController.authUser.user_id + '"].modal').modal('toggle');
  $('.authUser.dropdown.open').removeClass('open');
});

socket.on('foundWorkspaces', function(workspaces) {
  var convertedWorkspaces = convertWorkspaces(workspaces);
  Mako.workspacesDataController.set('content', convertedWorkspaces);
  Mako.get('router').transitionTo('workspaces');
});

socket.on('foundWorkspace', function(workspace) {
  if(workspace.workspaceUsers) {
    var convertedUsers = convertUsers(workspace.workspaceUsers);
    Mako.workspaceUsersDataController.addMany(convertedUsers);
  }
  if(workspace.workspaceInvitations) {
    var convertedInvitations = convertInvitations(workspace.workspaceInvitations);
    Mako.invitationsDataController.addMany(convertedInvitations);
  }
  if(workspace.workspaceProjects) {
    var convertedProjects = convertProjects(workspace.workspaceProjects);
    Mako.projectsDataController.addMany(convertedProjects);
  }
  Mako.get('router').get('projectsNavController').filterBy('workspace_id_fk', workspace.workspace_id);
});

socket.on('foundWorkspaceInfo', function(workspaceInfo) {
  if(workspaceInfo.workspaceUsers) {
    var convertedUsers = convertUsers(workspaceInfo.workspaceUsers);
    Mako.workspaceUsersDataController.addMany(convertedUsers);
  }
  if(workspaceInfo.workspaceInvitations) {
    var convertedInvitations = convertInvitations(workspaceInfo.workspaceInvitations);
    Mako.invitationsDataController.addMany(convertedInvitations);
  }
  $('div[data-wid="' + workspaceInfo.workspace_id + '"].modal').modal('toggle');
});

socket.on('foundWorkspaceUsers', function(workspaceUsers) {

});

socket.on('foundWorkspaceProjects', function(projects) {

});

socket.on('foundProject', function(project) {
  Mako.projectsDataController.update(project);
  if(project.projectTasks) {
    var convertedTasks = convertTasks(project.projectTasks);
    Mako.tasksDataController.addMany(convertedTasks);
  }
  if(project.projectUsers) {
    var convertedUsers = convertUsers(project.projectUsers);
    Mako.projectUsersDataController.addMany(convertedUsers);
  }
  if(project.projectFiles) {
    var convertedFiles = convertFiles(project.projectFiles);
    Mako.filesDataController.addMany(convertedFiles);
  }
  Mako.get('router').get('tasksController').filterDefault();
  Mako.get('router').get('applicationController').connectOutlet('nav', 'projectNav');
});

socket.on('foundProjectInfo', function(projectInfo) {
  if(projectInfo.projectUsers) {
    var convertedUsers = convertUsers(projectInfo.projectUsers);
    Mako.projectUsersDataController.addMany(convertedUsers);
  }
  if(projectInfo.projectInvitations) {
    var convertedInvitations = convertInvitations(projectInfo.projectInvitations);
    Mako.invitationsDataController.addMany(convertedInvitations);
  }
  $('div[data-pid="' + projectInfo.project_id + '"].modal').modal('toggle');
});

socket.on('foundProjectTasks', function(tasks) {

});

socket.on('moreData', function (data){
  var place = data['place'] * 524288; //The Next Blocks Starting Position
  var newFile; //The Variable that will hold the new Block of Data
  if(selectedFile.slice()) {
    newFile = selectedFile.slice(place, place + Math.min(524288, (selectedFile.size-place)));
  }
  else {
    newFile = selectedFile.slice(place, place + Math.min(524288, (selectedFile.size-place)));
  }
  fReader.readAsBinaryString(newFile);
});

socket.on('finishedUpload', function(file) {
  Mako.filesDataController.add(file);
});
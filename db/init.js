var initUsersTableQuery = [
      "CREATE TABLE IF NOT EXISTS users("
    , "user_id uuid not null primary key unique,"
    , "email varchar(255) null unique,"
    , "hashed_password varchar(255) null,"
    , "salt varchar(255) null,"
    , "displayName varchar(45) null,"
    , "givenName varchar(45) null,"
    , "familyName varchar(45) null,"
    , "middleName varchar(45) null,"
    , "created_date timestamptz null,"
    , "modified_date timestamptz null,"
    , "user_type user_type null,"
    , "account_type_fk uuid,"
    , "api_code uuid not null unique,"
    , "connection_count integer,"
    , "activity_feed_fk uuid,"
    , "isNew boolean,"
    , "FOREIGN KEY (account_type_fk) REFERENCES accountTypes(account_type_id)"
    , ")"
    ].join(" ")
  , initUserTypeQuery = [
      "CREATE TYPE user_type AS ENUM("
    , "'super admin',"
    , "'admin',"
    , "'user'"
    , ")"
    ].join(" ")
  , initAccountTypeQuery = [
      "CREATE TABLE IF NOT EXISTS accountTypes("
    , "account_type_id uuid not null primary key unique,"
    , "title varchar(45),"
    , "connection_limit integer"
    , ")"
    ].join(" ")
  , initWorkspacesTableQuery = [
      "CREATE TABLE IF NOT EXISTS workspaces("
    , "workspace_id uuid not null primary key unique,"
    , "title varchar(255) null,"
    , "created_date timestamptz null,"
    , "modified_date timestamptz null,"
    , "created_by_fk uuid not null,"
    , "workspace_type workspace_type null,"
    , "user_count integer,"
    , "activity_feed_fk uuid,"
    , "FOREIGN KEY (created_by_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ")
  , initWorkspaceTypeQuery = [
      "CREATE TYPE workspace_type AS ENUM("
    , "'personal',"
    , "'work',"
    , "'school'"
    , ")"
    ].join(" ")
  , initWorkspaceUsersTableQuery = [
      "CREATE TABLE IF NOT EXISTS workspaceUsers("
    , "user_id_fk uuid,"
    , "workspace_id_fk uuid,"
    , "PRIMARY KEY (user_id_fk, workspace_id_fk),"
    , "FOREIGN KEY (user_id_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (workspace_id_fk) REFERENCES workspaces(workspace_id)"
    , ")"
    ].join(" ")
  , initProjectsTableQuery = [
      "CREATE TABLE IF NOT EXISTS projects("
    , "project_id uuid not null primary key unique,"
    , "title varchar(255) null,"
    , "created_date timestamptz null,"
    , "modified_date timestamptz null,"
    , "start_date timestamptz null,"
    , "end_date timestamptz null,"
    , "created_by_fk uuid not null,"
    , "description text,"
    , "project_status status,"
    , "archived boolean,"
    , "project_privacy project_privacy,"
    , "tasks_order_by_priority varchar(45)[],"
    , "activity_feed_fk uuid,"
    , "workspace_id_fk uuid,"
    , "FOREIGN KEY (created_by_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ")
  , initProjectUsersTableQuery = [
      "CREATE TABLE IF NOT EXISTS projectUsers("
    , "user_id_fk uuid,"
    , "project_id_fk uuid,"
    , "PRIMARY KEY (user_id_fk, project_id_fk),"
    , "FOREIGN KEY (user_id_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id)"
    , ")"
    ].join(" ")
  , initStatusQuery = [
      "CREATE TYPE status AS ENUM("
    , "'Planning',"
    , "'In Progress',"
    , "'On Hold',"
    , "'Late',"
    , "'Blocked',"
    , "'Pending',"
    , "'Under Review',"
    , "'Canceled',"
    , "'Complete'"
    , ")"
    ].join(" ")
  , initPrivacyTypeQuery = [
      "CREATE TYPE project_privacy AS ENUM("
    , "'workspace',"
    , "'project',"
    , "'private'"
    , ")"
    ].join(" ")
  , initWorkspaceProjectsTableQuery = [
      "CREATE TABLE IF NOT EXISTS workspaceProjects("
    , "workspace_id_fk uuid,"
    , "project_id_fk uuid,"
    , "PRIMARY KEY (workspace_id_fk, project_id_fk),"
    , "FOREIGN KEY (workspace_id_fk) REFERENCES workspaces(workspace_id),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id)"
    , ")"
    ].join(" ")
  , initTasksTableQuery = [
      "CREATE TABLE IF NOT EXISTS tasks("
    , "task_id uuid not null primary key unique,"
    , "title varchar(255) null,"
    , "created_date timestamptz null,"
    , "modified_date timestamptz null,"
    , "created_by_fk uuid not null,"
    , "notes text null,"
    , "complete boolean,"
    , "milestone boolean,"
    , "task_status status,"
    , "due_date timestamptz,"
    , "soft_date varchar(50) null,"
    , "project_id_fk uuid not null,"
    , "assignee_fk uuid null,"
    , "activity_feed_fk uuid,"
    , "FOREIGN KEY (created_by_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (assignee_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id)"
    , ")"
    ].join(" ")
  , initProjectTasksTableQuery = [
      "CREATE TABLE IF NOT EXISTS projectTasks("
    , "project_id_fk uuid,"
    , "task_id_fk uuid,"
    , "PRIMARY KEY (project_id_fk, task_id_fk),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id) ON DELETE CASCADE,"
    , "FOREIGN KEY (task_id_fk) REFERENCES tasks(task_id) ON DELETE CASCADE"
    , ")"
    ].join(" ")
  , initCommentsTableQuery = [
      "CREATE TABLE IF NOT EXISTS comments("
    , "comment_id uuid not null primary key unique,"
    , "owner_id_fk uuid not null,"
    , "comment_body text null,"
    , "created_date timestamptz null,"
    , "modified_date timestamptz null,"
    , "FOREIGN KEY (owner_id_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ")
  , initTaskCommentsTableQuery = [
      "CREATE TABLE IF NOT EXISTS taskComments("
    , "comment_id_fk uuid,"
    , "task_id_fk uuid,"
    , "PRIMARY KEY (comment_id_fk, task_id_fk),"
    , "FOREIGN KEY (comment_id_fk) REFERENCES comments(comment_id),"
    , "FOREIGN KEY (task_id_fk) REFERENCES tasks(task_id)"
    , ")"
    ].join(" ")
  , initProjectCommentsTableQuery = [
      "CREATE TABLE IF NOT EXISTS projectComments("
    , "comment_id_fk uuid,"
    , "project_id_fk uuid,"
    , "PRIMARY KEY (comment_id_fk, project_id_fk),"
    , "FOREIGN KEY (comment_id_fk) REFERENCES comments(comment_id),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id)"
    , ")"
    ].join(" ")
  , initFilesTableQuery = [
      "CREATE TABLE IF NOT EXISTS files("
    , "file_id uuid not null primary key unique,"
    , "path text not null,"
    , "filename varchar(255) not null,"
    , "filetype varchar(50) not null,"
    , "filesize int not null,"
    , "created_date timestamptz null,"
    , "modified_date timestamptz null,"
    , "owner_id_fk uuid,"
    , "fd int,"
    , "FOREIGN KEY (owner_id_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ")
  , initProjectFilesTableQuery = [
      "CREATE TABLE IF NOT EXISTS projectFiles("
    , "project_id_fk uuid,"
    , "file_id_fk uuid,"
    , "PRIMARY KEY (project_id_fk, file_id_fk),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id),"
    , "FOREIGN KEY (file_id_fk) REFERENCES files(file_id)"
    , ")"
    ].join(" ")
  , initTaskFilesTableQuery = [
      "CREATE TABLE IF NOT EXISTS taskFiles("
    , "task_id_fk uuid,"
    , "file_id_fk uuid,"
    , "PRIMARY KEY (task_id_fk, file_id_fk),"
    , "FOREIGN KEY (task_id_fk) REFERENCES tasks(task_id),"
    , "FOREIGN KEY (file_id_fk) REFERENCES files(file_id)"
    , ")"
    ].join(" ")
  , initWorkspaceInvitationsTableQuery = [
      "CREATE TABLE IF NOT EXISTS workspaceInvitations("
    , "invitation_id uuid not null primary key unique,"
    , "from_fk uuid,"
    , "sent_to varchar(255),"
    , "workspace_id_fk uuid,"
    , "created_date timestamptz,"
    , "read boolean,"
    , "FOREIGN KEY (from_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (workspace_id_fk) REFERENCES workspaces(workspace_id)"
    , ")"
    ].join(" ")
  , initProjectInvitationsTableQuery = [
      "CREATE TABLE IF NOT EXISTS projectInvitations("
    , "invitation_id uuid not null primary key unique,"
    , "from_fk uuid,"
    , "sent_to varchar(255),"
    , "project_id_fk uuid,"
    , "created_date timestamptz,"
    , "read boolean,"
    , "FOREIGN KEY (from_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (project_id_fk) REFERENCES projects(project_id)"
    , ")"
    ].join(" ")
  , initUserConnectionsTableQuery = [
      "CREATE TABLE IF NOT EXISTS userConnections("
    , "first_user_id_fk uuid,"
    , "second_user_id_fk uuid,"
    , "PRIMARY KEY (first_user_id_fk, second_user_id_fk),"
    , "FOREIGN KEY (first_user_id_fk) REFERENCES users(user_id),"
    , "FOREIGN KEY (second_user_id_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ")
  , initEventsTableQuery = [
      "CREATE TABLE IF NOT EXISTS events("
    , "event_id uuid not null primary key unique,"
    , "actor_id_fk uuid,"
    , "action varchar(45),"
    , "object_id varchar(45),"
    , "object_type varchar(45),"
    , "indirect_object_id varchar(45),"
    , "indirect_object_type varchar(45),"
    , "context_id varchar(45),"
    , "context varchar(45),"
    , "eventText text,"
    , "created_date timestamptz,"
    , "modified_date timestamptz,"
    , "FOREIGN KEY (actor_id_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ")
  , initEventCommentsTableQuery = [
      "CREATE TABLE IF NOT EXISTS eventComments("
    , "comment_id_fk uuid,"
    , "event_id_fk uuid,"
    , "PRIMARY KEY (comment_id_fk, event_id_fk),"
    , "FOREIGN KEY (comment_id_fk) REFERENCES comments(comment_id),"
    , "FOREIGN KEY (event_id_fk) REFERENCES events(event_id)"
    , ")"
    ].join(" ");

var codesTableQuery = [
      "CREATE TABLE IF NOT EXISTS codes("
    , "code varchar(255) not null primary key unique,"
    , "usageLimit int not null,"
    , "created_date timestamptz,"
    , "modified_date timestamptz"
    , ")"
    ].join(" ")
  , codeUsersTableQuery = [
      "CREATE TABLE IF NOT EXISTS codeUsers("
    , "code_fk varchar(255),"
    , "user_id_fk uuid,"
    , "PRIMARY KEY (code_fk, user_id_fk),"
    , "FOREIGN KEY (code_fk) REFERENCES codes(code),"
    , "FOREIGN KEY (user_id_fk) REFERENCES users(user_id)"
    , ")"
    ].join(" ");

function initializeDB() {
  client.query(initAccountTypeQuery);
  client.query(initUserTypeQuery);
  client.query(initWorkspaceTypeQuery);
  client.query(initStatusQuery);
  client.query(initPrivacyTypeQuery);
  client.query(initUsersTableQuery);
  client.query(initWorkspacesTableQuery);
  client.query(initWorkspaceUsersTableQuery);
  client.query(initProjectsTableQuery);
  client.query(initWorkspaceProjectsTableQuery);
  client.query(initTasksTableQuery);
  client.query(initProjectTasksTableQuery);
  client.query(initCommentsTableQuery);
  client.query(initTaskCommentsTableQuery);
  client.query(initProjectCommentsTableQuery);
  client.query(initEventsTableQuery);
  client.query(initEventCommentsTableQuery);
  client.query(initFilesTableQuery);
  client.query(initProjectFilesTableQuery);
  client.query(initTaskFilesTableQuery);
  client.query(initWorkspaceInvitationsTableQuery);
  client.query(initProjectInvitationsTableQuery);
  client.query(initUserConnectionsTableQuery);
  client.query(codesTableQuery);
  client.query(codeUsersTableQuery);
}

//initializeDB();

module.exports = initializeDB;
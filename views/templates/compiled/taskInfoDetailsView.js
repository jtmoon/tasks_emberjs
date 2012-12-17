Ember.TEMPLATES["taskInfoDetailsView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n  <div class=\"item\">\n    ");
  stack1 = depth0;
  stack2 = "view.assigneeInput";
  stack3 = {};
  stack4 = "Name...";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n    <span class=\"assignedTo label\">\n      ");
  stack1 = depth0;
  stack2 = "view.showAssignee";
  stack3 = helpers.view || depth0.view;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, tmp1); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </div>\n  ");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n      <span class=\"name\" ");
  stack1 = depth0;
  stack2 = "selectAssignee";
  stack3 = {};
  stack4 = "view.parentView";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "App.router.taskController.fullName";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><span class=\"remove\" ");
  stack1 = depth0;
  stack2 = "removeAssignee";
  stack3 = {};
  stack4 = "view.parentView";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">&times;</span>\n      ");
  return buffer;}
function program3(depth0,data) {
  
  var stack1, stack2, stack3, stack4;
  stack1 = depth0;
  stack2 = "App.router.taskController.fullName";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1));}

function program5(depth0,data) {
  
  var stack1, stack2, stack3, stack4;
  stack1 = depth0;
  stack2 = "App.selectedTaskController.selectedTask.assignee_email";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1));}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n  <div class=\"item\">\n    ");
  stack1 = depth0;
  stack2 = "view.assigneeInput";
  stack3 = {};
  stack4 = "Name...";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n    <span class=\"btn\" rel=\"tooltip\" tooltipFor=\"taskInfo\" title=\"Assign to someone.\"\n    ");
  stack1 = depth0;
  stack2 = "selectAssignee";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">\n      <i class=\"icon-person\"></i>\n    </span>\n  </div>\n  ");
  return buffer;}

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n    <span class=\"label\">\n      ");
  stack1 = depth0;
  stack2 = "view.showDueDate";
  stack3 = helpers.view || depth0.view;
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, tmp1); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    ");
  return buffer;}
function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n      <span class=\"dueDate\" ");
  stack1 = depth0;
  stack2 = "setDueDate";
  stack3 = {};
  stack4 = "view.parentView";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "controller.task.stringDueDate";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "</span><span class=\"remove\" ");
  stack1 = depth0;
  stack2 = "removeDueDate";
  stack3 = {};
  stack4 = "view.parentView";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">&times;</span>\n      ");
  return buffer;}

function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n    <span rel=\"tooltip\" tooltipFor=\"taskInfo\"\n    title=\"Set a concrete due date.\"\n    ");
  stack1 = {};
  stack2 = ":btn view.isHiddenDueDate::hide";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "setDueDate";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">\n      <i class=\"icon-calendar\"></i>\n    </span>\n    ");
  return buffer;}

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n    ");
  stack1 = depth0;
  stack2 = "App.AttachmentView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  return buffer;}

  data.buffer.push("<section class=\"status\">\n  <div class=\"itemTitle\">\n    <span class=\"taskStatus\">\n      ");
  stack1 = depth0;
  stack2 = "view.taskStatus";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </span>\n  </div>\n  <div class=\"item\">\n    <div class=\"dropdown\">\n      <button class=\"btn taskOptions dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"icon-gear\"></i>\n      </button>\n      <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n        <li class=\"action\">\n          <a href=\"#\"\n          ");
  stack1 = depth0;
  stack2 = "destroyTask";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">\n            Delete\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n<section class=\"title\">\n  ");
  stack1 = depth0;
  stack2 = "view.title";
  stack3 = {};
  stack4 = "(new task)";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"assignee\">\n  <div class=\"itemTitle\">Assigned To</div>\n  ");
  stack1 = depth0;
  stack2 = "App.selectedTaskController.selectedTask.assignee_fk";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>\n<section class=\"priority\">\n  <div class=\"itemTitle\"></div>\n  <span rel=\"tooltip\" tooltipFor=\"taskInfo\" title=\"Mark as Today, Upcoming, or Later to help plan your work.\">\n  <div class=\"item\">\n    <span\n    ");
  stack1 = {};
  stack2 = ":item :date controller.priorityToday:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "setDueToday";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">Today</span>\n    <span\n    ");
  stack1 = {};
  stack2 = ":item :date controller.priorityUpcoming:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "setUpcoming";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">Upcoming</span>\n    <span\n    ");
  stack1 = {};
  stack2 = ":item :date controller.priorityLater:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "setDueLater";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">Later</span>\n  </div>\n  </span>\n</section>\n<section class=\"dates\">\n  <div class=\"itemTitle\">Due Date</div>\n  <div class=\"item\">\n    ");
  stack1 = depth0;
  stack2 = "view.datepickerInput";
  stack3 = {};
  stack4 = "mm/dd/yyyy";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = depth0;
  stack2 = "App.selectedTaskController.selectedTask.due_date";
  stack3 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(12, program12, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</section>\n<section class=\"notes\">\n  ");
  stack1 = depth0;
  stack2 = "view.notes";
  stack3 = {};
  stack4 = "Notes...";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"attachments\">\n  <div class=\"itemTitle\">\n    Files\n  </div>\n  <ul class=\"item\">\n    ");
  stack1 = depth0;
  stack2 = "App.router.taskController.files";
  stack3 = helpers.each;
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <li class=\"item attachment\">\n      <a href=\"#\" ");
  stack1 = depth0;
  stack2 = "uploadFile";
  stack3 = {};
  stack4 = "App.router.taskController";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">Upload a File</a>\n    </li>\n    <form name=\"fileUpload\">\n      <input type=\"file\" name=\"file\">\n    </form>\n  </ul>\n</section>\n<!-- <section class=\"members\">\n  <div class=\"itemTitle\">Members</div>\n  <ul class=\"item\">\n    <li>\n      <span class=\"name\" ");
  stack1 = depth0;
  stack2 = "clickedName";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "</span><span class=\"remove\" ");
  stack1 = depth0;
  stack2 = "clickedRemove";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">&times;</span>\n    </li>\n  </ul>\n</section> -->");
  return buffer;
});
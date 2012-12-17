Ember.TEMPLATES["projectOptionsModalView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n            ");
  stack1 = depth0;
  stack2 = "App.UserView";
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
  data.buffer.push("\n            ");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n            <li class=\"user\">\n              <div class=\"fullName\">");
  stack1 = depth0;
  stack2 = "view.fullName";
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
  data.buffer.push(escapeExpression(stack1) + "</div>\n              <div class=\"email\">");
  stack1 = depth0;
  stack2 = "view.email";
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
  data.buffer.push(escapeExpression(stack1) + "</div>\n              <div class=\"remove\">\n                <i class=\"icon-delete\" ");
  stack1 = depth0;
  stack2 = "removeUser";
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
  data.buffer.push(escapeExpression(stack1) + "></i>\n              </div>\n            </li>\n            ");
  return buffer;}

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n        <section class=\"pending\">\n          <h3>Pending</h3>\n          ");
  stack1 = depth0;
  stack2 = "App.selectedProjectController.invitations";
  stack3 = helpers.each;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </section>\n        ");
  return buffer;}
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n          ");
  stack1 = depth0;
  stack2 = "App.ModalInviteView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n          ");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n        <div class=\"errorMessage warning\">\n          ");
  stack1 = depth0;
  stack2 = "App.selectedProjectController.errorMessage";
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
  data.buffer.push(escapeExpression(stack1) + "\n        </div>\n        ");
  return buffer;}

  data.buffer.push("<div class=\"modal-header\">\n  ");
  stack1 = depth0;
  stack2 = "view.title";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n</div>\n<div class=\"modalOptionsBar\">\n  <div class=\"clearfix\"></div>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"\n    data-target=\"#projectOptionsHome\"\n    ");
  stack1 = depth0;
  stack2 = "showTab";
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
  data.buffer.push(escapeExpression(stack1) + ">\n      Info\n    </li>\n    <li\n    data-target=\"#projectOptionsUsers\"\n    ");
  stack1 = depth0;
  stack2 = "showTab";
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
  data.buffer.push(escapeExpression(stack1) + ">\n      Members\n    </li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"projectOptionsHome\">\n    <div class=\"modal-body\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae mauris tempus turpis tincidunt pharetra ac vel turpis. Etiam vel nibh elit. Integer non orci non ligula vestibulum mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consectetur elementum aliquet. Morbi non nisi nisl, vel tempor sapien. In eget pharetra massa. Aenean magna nibh, suscipit non lobortis quis, cursus eget enim. Nullam lobortis feugiat arcu, vel volutpat quam blandit a.\n\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in sem risus. Nam in velit risus, ac malesuada tellus. In hac habitasse platea dictumst. Aliquam erat volutpat. Donec rutrum vehicula metus, at pulvinar risus lacinia sagittis. Morbi consequat euismod odio et blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pharetra rutrum metus, sit amet tristique nulla varius vitae.\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n    </div>\n  </div>\n  <div class=\"tab-pane\" id=\"projectOptionsUsers\">\n    <div class=\"modal-body\">\n      <section class=\"usersInfo\">\n        ");
  stack1 = depth0;
  stack2 = "App.selectedProjectController.userCount";
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
  data.buffer.push(escapeExpression(stack1) + "\n      </section>\n      <section class=\"usersList\">\n        <section class=\"users\">\n          <ul>\n            ");
  stack1 = depth0;
  stack2 = "view.users";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n        </section>\n        ");
  stack1 = depth0;
  stack2 = "App.selectedProjectController.hasInvites";
  stack3 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </section>\n      <section class=\"userInvite\">\n        ");
  stack1 = depth0;
  stack2 = "App.selectedProjectController.hasError";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = depth0;
  stack2 = "view.inviteInputText";
  stack3 = {};
  stack4 = "email@example.com";
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
  data.buffer.push(escapeExpression(stack1) + "\n        <button\n        ");
  stack1 = {};
  stack2 = "view.invalidEmail";
  stack1['disabled'] = stack2;
  stack2 = ":btn";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n        ");
  stack1 = depth0;
  stack2 = "prepInvite";
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
  data.buffer.push(escapeExpression(stack1) + ">Send Invite</button>\n      </section>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n    </div>\n  </div>\n</div>");
  return buffer;
});
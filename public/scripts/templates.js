Ember.TEMPLATES["appView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n<section class=\"globalNav\">\n");
  stack1 = depth0;
  stack2 = "nav";
  stack3 = helpers.outlet || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"appWindow\">\n  ");
  stack1 = depth0;
  stack2 = "App.NavBarView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  stack1 = depth0;
  stack2 = "app";
  stack3 = helpers.outlet || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n");
  stack1 = depth0;
  stack2 = "App.WorkspaceOptionsModalView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n");
  stack1 = depth0;
  stack2 = "App.UserProfileModalView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n");
  stack1 = depth0;
  stack2 = "App.ProjectOptionsModalView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n");
  stack1 = depth0;
  stack2 = "outlet";
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
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  stack1 = depth0;
  stack2 = "App.authController.authUser";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
Ember.TEMPLATES["attachmentView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<span class=\"filename\"><a ");
  stack1 = {};
  stack2 = "url";
  stack1['href'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + " target=\"_blank\">");
  stack1 = depth0;
  stack2 = "filename";
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
  data.buffer.push(escapeExpression(stack1) + "</a></span><span class=\"remove\" ");
  stack1 = depth0;
  stack2 = "removeFile";
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
  data.buffer.push(escapeExpression(stack1) + ">&times;</span>");
  return buffer;
});
Ember.TEMPLATES["auth"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n      ");
  stack1 = depth0;
  stack2 = "App.authController.errorMessage";
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
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  return buffer;}

  data.buffer.push("<div class=\"login\">\n  ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "App.authController.email";
  stack3['valueBinding'] = stack4;
  stack4 = "login_email";
  stack3['name'] = stack4;
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
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "App.authController.pw";
  stack3['valueBinding'] = stack4;
  stack4 = "login_pw";
  stack3['name'] = stack4;
  stack4 = "password";
  stack3['type'] = stack4;
  stack4 = "Password";
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
  data.buffer.push(escapeExpression(stack1) + "\n  <button class=\"btn\"\n  ");
  stack1 = depth0;
  stack2 = "attemptLogin";
  stack3 = {};
  stack4 = "App.authController";
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
  data.buffer.push(escapeExpression(stack1) + ">\n    Login\n  </button>\n  <button class=\"btn\" data-toggle=\"modal\" data-target=\"#registerModal\">\n    Sign-Up\n  </button>\n</div>\n<div id=\"registerModal\" class=\"modal\">\n  <div class=\"modal-header\">\n    <h3>Register</h3>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"err\">\n    ");
  stack1 = depth0;
  stack2 = "App.authController.hasError";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <section class=\"form\">\n      <div class=\"registerEmail\">\n        ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "App.authController.registerEmail";
  stack3['valueBinding'] = stack4;
  stack4 = "login_email";
  stack3['name'] = stack4;
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
  data.buffer.push(escapeExpression(stack1) + "\n      </div>\n      <div class=\"registerPw\">\n        ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "App.authController.registerPw";
  stack3['valueBinding'] = stack4;
  stack4 = "login_pw";
  stack3['name'] = stack4;
  stack4 = "password";
  stack3['type'] = stack4;
  stack4 = "Password";
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
  data.buffer.push(escapeExpression(stack1) + "\n        ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "App.authController.checkPw";
  stack3['valueBinding'] = stack4;
  stack4 = "check_pw";
  stack3['name'] = stack4;
  stack4 = "password";
  stack3['type'] = stack4;
  stack4 = "Re-enter Password";
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
  data.buffer.push(escapeExpression(stack1) + "\n      </div>\n      <div class=\"betaCode\">\n        ");
  stack1 = depth0;
  stack2 = "view.betaCodeInput";
  stack3 = {};
  stack4 = "Beta Code";
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
  data.buffer.push(escapeExpression(stack1) + "\n      </div>\n    </section>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n    <button\n    ");
  stack1 = depth0;
  stack2 = "newUser";
  stack3 = {};
  stack4 = "App.authController";
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
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  stack1 = {};
  stack2 = "App.authController.notValid";
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
  data.buffer.push(escapeExpression(stack1) + ">Sign-up</button>\n  </div>\n</div>");
  return buffer;
});
Ember.TEMPLATES["globalNavItemView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, stack5, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<span class=\"title\" ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "load";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "title";
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
  data.buffer.push(escapeExpression(stack1) + "</span>\n<span class=\"options\" ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadOptions";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-spanner\"></i></span>");
  return buffer;
});
Ember.TEMPLATES["globalNavProjectView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, stack5, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<header class=\"localNavHeader\">\n  <div class=\"previous\">\n    <button class=\"btn\" data-action=\"back\" ");
  stack1 = depth0;
  stack2 = "goBack";
  stack3 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + ">&lt;</button>\n  </div>\n  <div class=\"current\">\n  ");
  stack1 = depth0;
  stack2 = "view.navTitle";
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
  data.buffer.push(escapeExpression(stack1) + "\n  </div>\n  <div class=\"currentOptions\">\n  </div>\n</header>\n<section class=\"localNav\">\n  <ul class=\"nav\">\n    <li ");
  stack1 = {};
  stack2 = ":navItem view.isTasks:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadTasks";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + ">Tasks</li>\n    <!--\n    <li ");
  stack1 = {};
  stack2 = ":navItem view.isPeople:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadPeople";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + ">People</li>\n    <li ");
  stack1 = {};
  stack2 = ":navItem view.isFiles:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadFiles";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + ">Files</li>\n    -->\n  </ul>\n</section>");
  return buffer;
});
Ember.TEMPLATES["globalNavView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n    ");
  stack1 = depth0;
  stack2 = "App.GlobalNavItemView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  return buffer;}

  data.buffer.push("<header class=\"localNavHeader\">\n  <div class=\"previous\">\n    <button class=\"btn\" data-action=\"back\" ");
  stack1 = depth0;
  stack2 = "goBack";
  stack3 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + ">&lt;</button>\n  </div>\n  <div class=\"current\">\n  ");
  stack1 = depth0;
  stack2 = "view.navTitle";
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
  data.buffer.push(escapeExpression(stack1) + "\n  </div>\n  <div class=\"currentOptions\">\n  </div>\n</header>\n<section class=\"localNav\">\n  <ul class=\"nav\">\n  ");
  stack1 = depth0;
  stack2 = "controller.content";
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
  data.buffer.push("\n  </ul>\n  <button class=\"btn\" ");
  stack1 = depth0;
  stack2 = "new";
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
  data.buffer.push(escapeExpression(stack1) + ">New</button>\n</section>");
  return buffer;
});
Ember.TEMPLATES["infoActivitiesView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var self=this;


  data.buffer.push("Activities View");
});
Ember.TEMPLATES["infoActivityCommentView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', self=this;


  return buffer;
});
Ember.TEMPLATES["infoActivityEventView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', self=this;


  return buffer;
});
Ember.TEMPLATES["infoDetailsView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


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
  data.buffer.push(escapeExpression(stack1));
});
Ember.TEMPLATES["infoView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, stack5, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"bar\"></section>\n<header class=\"infoHeader\">\n  <section\n  ");
  stack1 = {};
  stack2 = ":infoDetails view.isDetails:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadDetails";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + "\n  >\n    <header class=\"bar\"></header>\n    <section class=\"content\">\n      <span class=\"title\">Details</span>\n    </section>\n  </section>\n  <section\n  ");
  stack1 = {};
  stack2 = ":activity view.isActivity:active";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadActivity";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + "\n  >\n    <header class=\"bar\"></header>\n    <section class=\"content\">\n      <span class=\"title\">Activity</span>\n      <span class=\"activityCount\">\n        <div class=\"count\">0</div>\n      </span>\n    </section>\n  </section>\n</header>\n<section class=\"infoContent\">\n  ");
  stack1 = depth0;
  stack2 = "outlet";
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
  data.buffer.push(escapeExpression(stack1) + "\n</section>");
  return buffer;
});
Ember.TEMPLATES["initView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"globalNav\">\n");
  stack1 = depth0;
  stack2 = "App.GlobalNavView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"appWindow\">\n</section>");
  return buffer;
});
Ember.TEMPLATES["loadingView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var self=this;


  data.buffer.push("Loading");
});
Ember.TEMPLATES["localNavView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5;
  data.buffer.push("\n  <li class=\"navItem\" ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "load";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "title";
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
  data.buffer.push(escapeExpression(stack1) + "</li>\n");
  return buffer;}

  data.buffer.push("<ul class=\"nav\">\n");
  stack1 = depth0;
  stack2 = "controller.content";
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
  data.buffer.push("\n</ul>\n<button class=\"btn\" ");
  stack1 = depth0;
  stack2 = "new";
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
  data.buffer.push(escapeExpression(stack1) + ">New</button>");
  return buffer;
});
Ember.TEMPLATES["modalInviteView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<ul>\n  <li class=\"to\">");
  stack1 = depth0;
  stack2 = "sent_to";
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
  data.buffer.push(escapeExpression(stack1) + "</li>\n  <li class=\"created_date\"></li>\n  <li class=\"cancel\"><i class=\"icon-delete\"></i></li>\n</ul>");
  return buffer;
});
Ember.TEMPLATES["navBarView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n      ");
  stack1 = depth0;
  stack2 = "App.NavBarInviteView";
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
  data.buffer.push("\n      ");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n      <li class=\"invite\">\n        <section class=\"inviteInfo\">\n          <span class=\"title\">");
  stack1 = depth0;
  stack2 = "context_title";
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
  data.buffer.push(escapeExpression(stack1) + "</span>\n          <span class=\"type\">\n            ");
  stack1 = depth0;
  stack2 = "workspace_id_fk";
  stack3 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = depth0;
  stack2 = "project_id_fk";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </section>\n        <section class=\"inviteFrom\">\n          <section class=\"userPhoto\">\n          </section>\n          <section class=\"info\">\n            <div class=\"fullName\">\n              ");
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
  data.buffer.push(escapeExpression(stack1) + "\n            </div>\n            <div class=\"email\">\n              ");
  stack1 = depth0;
  stack2 = "from_email";
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
  data.buffer.push(escapeExpression(stack1) + "\n            </div>\n          </section>\n          <section class=\"actions\">\n            <button class=\"btn\" type=\"button\" ");
  stack1 = depth0;
  stack2 = "acceptInvite";
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
  data.buffer.push(escapeExpression(stack1) + ">Accept</button><button class=\"btn\" type=\"button\" ");
  stack1 = depth0;
  stack2 = "declineInvite";
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
  data.buffer.push(escapeExpression(stack1) + ">Decline</button>\n          </section>\n        </section>\n      </li>\n      ");
  return buffer;}
function program3(depth0,data) {
  
  
  data.buffer.push("\n            Workspace\n            ");}

function program5(depth0,data) {
  
  
  data.buffer.push("\n            Project\n            ");}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n        ");
  stack1 = depth0;
  stack2 = "App.authController.fullName";
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
  data.buffer.push(escapeExpression(stack1) + "\n      ");
  return buffer;}

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n        ");
  stack1 = depth0;
  stack2 = "App.authController.authUser.email";
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
  data.buffer.push(escapeExpression(stack1) + "\n      ");
  return buffer;}

  data.buffer.push("<div class=\"clearfix\"></div>\n<ul class=\"appNav\">\n</ul>\n<ul class=\"userNav\">\n  <li class=\"invitations dropdown\">\n    <div class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n      <i class=\"icon-case\"></i><span ");
  stack1 = {};
  stack2 = ":notifyCount App.router.invitationsController.hasUnreadReceived:unread";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "App.router.invitationsController.myInvitationCount";
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
  data.buffer.push(escapeExpression(stack1) + "</span>\n    </div>\n    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n      ");
  stack1 = depth0;
  stack2 = "App.router.invitationsController.invitationsToMe";
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
  data.buffer.push("\n    </ul>\n  </li>\n  <li class=\"authUser dropdown\">\n    <div class=\"user dropdown-toggle\" data-toggle=\"dropdown\">\n      <div class=\"userPic\">\n      </div>\n      <div class=\"fullName\">\n      ");
  stack1 = depth0;
  stack2 = "App.authController.fullName";
  stack3 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(9, program9, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"options dropdown-toggle\" data-toggle=\"dropdown\">\n      <span class=\"caret\"></span>\n    </div>\n    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n      <li ");
  stack1 = depth0;
  stack2 = "loadProfile";
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
  data.buffer.push(escapeExpression(stack1) + "><a href=\"#\">Profile</a></li>\n      <li ");
  stack1 = depth0;
  stack2 = "logout";
  stack3 = {};
  stack4 = "App.authController";
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
  data.buffer.push(escapeExpression(stack1) + "><a href=\"#\">Logout</a></li>\n    </ul>\n  </li>\n</ul>\n<div class=\"clearfix\"></div>");
  return buffer;
});
Ember.TEMPLATES["popoverView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var self=this;


  data.buffer.push("<div class=\"arrow\"></div>\n<div class=\"popover-inner\">\n  <!-- <h3 class=\"popover-title\"></h3> -->\n  <div class=\"popover-content\">\n  </div>\n</div>");
});
Ember.TEMPLATES["projectInfoActivitiesView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var self=this;


  data.buffer.push("Activities View");
});
Ember.TEMPLATES["projectInfoDetailsView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
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

  data.buffer.push("<section class=\"status\">\n  <span class=\"projectStatus\">\n    ");
  stack1 = depth0;
  stack2 = "view.projectStatus";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n  </span>\n  <div class=\"item\">\n    <div class=\"dropdown\">\n      <button class=\"btn taskOptions dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"icon-gear\"></i>\n      </button>\n      <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n        <li class=\"action\">\n          <a href=\"#\" data-toggle=\"modal\" data-target=\"#confirmDelete\"\n          ");
  stack1 = depth0;
  stack2 = "hideDropdown";
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
  data.buffer.push(escapeExpression(stack1) + ">\n            Delete\n          </a>\n        </li>\n      </ul>\n      <div id=\"confirmDelete\" class=\"modal\">\n        <div class=\"modal-header\">\n          <h3>Confirmation</h3>\n        </div>\n        <div class=\"modal-body\">\n          Are you sure you want to delete this project?\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-danger\" data-dismiss=\"modal\"\n          ");
  stack1 = depth0;
  stack2 = "deleteProject";
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
  data.buffer.push(escapeExpression(stack1) + ">Yes</button>\n        </div>\n      </div>\n  </div>\n</section>\n<section class=\"title\">\n  ");
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
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"description\">\n  ");
  stack1 = depth0;
  stack2 = "view.description";
  stack3 = {};
  stack4 = "Description...";
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
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"dates\">\n  <div class=\"itemTitle\">Dates</div>\n  <div class=\"item\"></div>\n</section>\n<section class=\"attachments\">\n  <div class=\"itemTitle\">\n    Files\n  </div>\n  <ul class=\"item\">\n    ");
  stack1 = depth0;
  stack2 = "App.router.projectController.files";
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
  data.buffer.push("\n    <li class=\"item attachment\">\n      <a href=\"#\" ");
  stack1 = depth0;
  stack2 = "uploadFile";
  stack3 = {};
  stack4 = "App.router.projectController";
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
  data.buffer.push(escapeExpression(stack1) + ">Upload a File<i class=\"icon-attachment\"></i></a>\n    </li>\n    <form name=\"fileUpload\">\n      <input type=\"file\" name=\"file\">\n    </form>\n  </ul>\n</section>\n<section class=\"members\">\n  <div class=\"itemTitle\">Members</div>\n  <div class=\"item\">\n    \n  </div>\n</section>");
  return buffer;
});
Ember.TEMPLATES["projectInfoView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<header class=\"infoHeader\">\n  <section class=\"infoDetails\">\n    <header class=\"bar\"></header>\n    <section class=\"content\">\n      <span class=\"title\">Details</span>\n    </section>\n  </section>\n  <section class=\"comments\">\n    <header class=\"bar\"></header>\n    <section class=\"content\">\n      <span class=\"title\">Activity</span>\n      <span class=\"activityCount\">\n        <div class=\"count\">7</div>\n      </span>\n    </section>\n  </section>\n</header>\n");
  stack1 = depth0;
  stack2 = "outlet";
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
  data.buffer.push(escapeExpression(stack1));
  return buffer;
});
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
Ember.TEMPLATES["projectTasksView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n    ");
  stack1 = depth0;
  stack2 = "Mako.TaskView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  return buffer;}

  data.buffer.push("<header class=\"projectHeader\">\n  ");
  stack1 = depth0;
  stack2 = "Em.TextField";
  stack3 = {};
  stack4 = "Mako.selectedProjectController.selectedProject.title";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n  <button class=\"btn\" ");
  stack1 = depth0;
  stack2 = "new";
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
  data.buffer.push(escapeExpression(stack1) + ">New Task</button>\n</header>\n<section class=\"tasks\">\n  ");
  stack1 = depth0;
  stack2 = "controller.content";
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
  data.buffer.push("\n</section>");
  return buffer;
});
Ember.TEMPLATES["projectView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"projectTasks\">\n  <header class=\"projectHeader\">\n    <section class=\"bar\">\n    </section>\n    <section class=\"projectInfo\">\n      <div class=\"projectStatus\">\n        ");
  stack1 = depth0;
  stack2 = "view.projectStatus";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n      </div>\n      <div class=\"projectTitle\">\n        ");
  stack1 = depth0;
  stack2 = "view.projectTitle";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n      </div>\n    </section>\n  </header>\n  ");
  stack1 = depth0;
  stack2 = "tasks";
  stack3 = helpers.outlet || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n<section class=\"info\">\n");
  stack1 = depth0;
  stack2 = "info";
  stack3 = helpers.outlet || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n</section>");
  return buffer;
});
Ember.TEMPLATES["removableItemView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<span class=\"name\" ");
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
  data.buffer.push(escapeExpression(stack1) + ">&times;</span>");
  return buffer;
});
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
Ember.TEMPLATES["tasksView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n  ");
  stack1 = depth0;
  stack2 = "App.TaskView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  data.buffer.push("<header class=\"taskOptions\">\n  <div class=\"dropdown\">\n    <button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">+ New</button>\n    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n      <li class=\"tasksAction\">\n        <a href=\"#\"\n        ");
  stack1 = depth0;
  stack2 = "new";
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
  data.buffer.push(escapeExpression(stack1) + ">Task</a>\n      </li>\n    </ul>\n  </div>\n</header>\n<section class=\"tasksList\">\n");
  stack1 = depth0;
  stack2 = "controller.content";
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
  data.buffer.push("\n</section>");
  return buffer;
});
Ember.TEMPLATES["taskView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, stack5, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n  <span rel=\"tooltip\" tooltipFor=\"task\"\n  ");
  stack1 = {};
  stack2 = "view.fullName";
  stack1['data-original-title'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + ">\n    ");
  stack1 = depth0;
  stack2 = "view.initials";
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
  data.buffer.push(escapeExpression(stack1) + "\n  </span>\n");
  return buffer;}

function program3(depth0,data) {
  
  
  data.buffer.push("\n  <span rel=\"tooltip\" tooltipFor=\"task\" title=\"Assigned To\">\n    <button type=\"button\" class=\"btn\"><i class=\"icon-person\"></i></button>\n  </span>\n");}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n    ");
  stack1 = depth0;
  stack2 = "stringDueDate";
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
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  return buffer;}

function program7(depth0,data) {
  
  
  data.buffer.push("\n    <button type=\"button\" class=\"btn\"><i class=\"icon-calendar\"></i></button>\n  ");}

  data.buffer.push("<div class=\"taskNum\">");
  stack1 = depth0;
  stack2 = "view.taskIndex";
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
  data.buffer.push(escapeExpression(stack1) + "</div>\n<div class=\"marker\"></div>\n<div class=\"markedComplete\">\n  ");
  stack1 = depth0;
  stack2 = "view.completeCheckbox";
  stack3 = {};
  stack4 = "complete";
  stack3['checkedBinding'] = stack4;
  stack4 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n</div>\n<div class=\"assignee\">\n");
  stack1 = depth0;
  stack2 = "assignee_fk";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div class=\"title\">\n  ");
  stack1 = depth0;
  stack2 = "view.taskTitle";
  stack3 = {};
  stack4 = "title";
  stack3['valueBinding'] = stack4;
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
  data.buffer.push(escapeExpression(stack1) + "\n</div>\n<!-- <div class=\"tags\">\n  <button type=\"button\" class=\"btn\"><i class=\"icon-tag\"></i></button>\n</div> -->\n<div class=\"due\">\n  <span title=\"Due Date\" rel=\"tooltip\" tooltipFor=\"task\">\n  ");
  stack1 = depth0;
  stack2 = "due_date";
  stack3 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n</div>\n<!-- <div class=\"comments\">\n  <button type=\"button\" class=\"btn\"><i class=\"icon-comments\"></i></button>\n</div> -->\n<div class=\"taskInfo\">\n  <span rel=\"tooltip\" tooltipFor=\"task\" title=\"View Info\"><button type=\"button\" class=\"btn\" ");
  stack1 = depth0;
  stack2 = "";
  stack3 = depth0;
  stack4 = "loadTask";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-info\"></i></button></span>\n</div>");
  return buffer;
});
Ember.TEMPLATES["userProfileModalView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n      ");
  stack1 = depth0;
  stack2 = "email";
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
  data.buffer.push(escapeExpression(stack1) + "\n    ");
  return buffer;}

  data.buffer.push("<div class=\"modal-header\">\n  <h3 class=\"fullName\">\n    ");
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
  data.buffer.push(escapeExpression(stack1) + "\n  </h3>\n</div>\n<div class=\"modalOptionsBar\">\n  <div class=\"clearfix\"></div>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"\n    data-target=\"#userProfileHome\"\n    ");
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
  data.buffer.push(escapeExpression(stack1) + ">\n      Profile\n    </li>\n    <li\n    data-target=\"#userProfileConnections\"\n    ");
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
  data.buffer.push(escapeExpression(stack1) + ">\n      Connections\n    </li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"userProfileHome\">\n    <div class=\"modal-body\">\n      <section class=\"fullName\">\n        ");
  stack1 = depth0;
  stack2 = "view.givenNameInputText";
  stack3 = {};
  stack4 = "First Name";
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
  data.buffer.push(escapeExpression(stack1));
  stack1 = depth0;
  stack2 = "view.familyNameInputText";
  stack3 = {};
  stack4 = "Last Name";
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
  data.buffer.push(escapeExpression(stack1) + "\n      </section>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n    </div>\n  </div>\n  <div class=\"tab-pane\" id=\"userProfileConnections\">\n    <div class=\"modal-body\">\n    ");
  stack1 = depth0;
  stack2 = "App.connectionsDataController";
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
  data.buffer.push("\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n    </div>\n  </div>\n</div>");
  return buffer;
});
Ember.TEMPLATES["workspaceOptionsModalView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  stack2 = "App.selectedWorkspaceController.invitations";
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
  stack2 = "App.selectedWorkspaceController.errorMessage";
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
  data.buffer.push(escapeExpression(stack1) + "\n</div>\n<div class=\"modalOptionsBar\">\n  <div class=\"clearfix\"></div>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"\n    data-target=\"#workspaceOptionsHome\"\n    ");
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
  data.buffer.push(escapeExpression(stack1) + ">\n      Info\n    </li>\n    <li\n    data-target=\"#workspaceOptionsUsers\"\n    ");
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
  data.buffer.push(escapeExpression(stack1) + ">\n      Members\n    </li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"workspaceOptionsHome\">\n    <div class=\"modal-body\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae mauris tempus turpis tincidunt pharetra ac vel turpis. Etiam vel nibh elit. Integer non orci non ligula vestibulum mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consectetur elementum aliquet. Morbi non nisi nisl, vel tempor sapien. In eget pharetra massa. Aenean magna nibh, suscipit non lobortis quis, cursus eget enim. Nullam lobortis feugiat arcu, vel volutpat quam blandit a.\n\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in sem risus. Nam in velit risus, ac malesuada tellus. In hac habitasse platea dictumst. Aliquam erat volutpat. Donec rutrum vehicula metus, at pulvinar risus lacinia sagittis. Morbi consequat euismod odio et blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pharetra rutrum metus, sit amet tristique nulla varius vitae.\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n    </div>\n  </div>\n  <div class=\"tab-pane\" id=\"workspaceOptionsUsers\">\n    <div class=\"modal-body\">\n      <section class=\"usersInfo\">\n        ");
  stack1 = depth0;
  stack2 = "App.selectedWorkspaceController.userCount";
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
  stack2 = "App.selectedWorkspaceController.hasInvites";
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
  stack2 = "App.selectedWorkspaceController.hasError";
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
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
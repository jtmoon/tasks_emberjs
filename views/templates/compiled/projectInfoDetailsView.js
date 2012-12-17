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
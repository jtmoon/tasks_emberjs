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
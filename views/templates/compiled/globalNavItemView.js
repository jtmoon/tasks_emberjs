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
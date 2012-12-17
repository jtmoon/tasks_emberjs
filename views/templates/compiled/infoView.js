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
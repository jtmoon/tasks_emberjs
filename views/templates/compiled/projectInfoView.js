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
/*!
 * Bootstrap-growl v1.1.0
 *
 * Copyright (c) Nick Larson, http://github.com/ifightcrime
 * Released under the MIT license
 *
 * Pretty simple jQuery plugin that turns standard Bootstrap alerts into hovering "Growl-like" notifications.
 *
 */
(function(){var t;t=jQuery,t.bootstrapGrowl=function(e,s){var a,o,l;switch(s=t.extend({},t.bootstrapGrowl.default_options,s),a=t("<div>"),a.attr("class","bootstrap-growl alert"),s.type&&a.addClass("alert-"+s.type),s.allow_dismiss&&a.append('<a class="close" data-dismiss="alert" href="#">&times;</a>'),a.append(e),s.top_offset&&(s.offset={from:"top",amount:s.top_offset}),l=s.offset.amount,t(".bootstrap-growl").each(function(){return l=Math.max(l,parseInt(t(this).css(s.offset.from))+t(this).outerHeight()+s.stackup_spacing)}),o={position:"body"===s.ele?"fixed":"absolute",margin:0,"z-index":"9999",display:"none"},o[s.offset.from]=l+"px",a.css(o),"auto"!==s.width&&a.css("width",s.width+"px"),t(s.ele).append(a),s.align){case"center":a.css({left:"50%","margin-left":"-"+a.outerWidth()/2+"px"});break;case"left":a.css("left","20px");break;default:a.css("right","20px")}return a.fadeIn(),s.delay>0&&a.delay(s.delay).fadeOut(function(){return t(this).alert("close")}),a},t.bootstrapGrowl.default_options={ele:"body",type:"info",offset:{from:"top",amount:20},align:"right",width:250,delay:4e3,allow_dismiss:!0,stackup_spacing:10}}).call(this);

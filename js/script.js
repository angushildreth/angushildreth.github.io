function show(event) {
	if ($(this).parent().hasClass("disabled")) {
		return false;
	} else {
		event.preventDefault();
		var currenthash = $(this).attr("href");
		$(".mainbody").fadeOut(100).delay(100);
		window.location = currenthash;
		$(".navbtn").removeClass("disabled");
		if ($(this).parent().hasClass("navbtn")) {
			$(this).parent().addClass("disabled");
		}
		$(currenthash).fadeIn();
	}
}

function showCollab(event) {
	if ($(this).parent().hasClass("disabled")) {
		return false;
	}
	var currenthash = $(this).attr("href");
	if ($(this).parent().siblings().hasClass("disabled")) {
		$(".navbtn").removeClass("disabled");
		$(this).parent().addClass("disabled");
		window.location = currenthash;
		$('body').scrollTo($(window.location.hash));
	}
	else {
		$(".navbtn").removeClass("disabled");
		event.preventDefault();
		$(".mainbody").fadeOut(100).delay(100);
		$("#collab").show();
		if ($(this).parent().hasClass("navbtn")) {
			$(this).parent().addClass("disabled");
		}
		window.location = currenthash;
		$('body').scrollTo($(window.location.hash));
	}
}

$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

$(document).ready(function(){
	$(".mainbody").hide();
	$("#home").addClass("disabled");
	$("#homebutton").on("click", show);
	$("#aboutbutton").on("click", show);
	$("#contactbutton").on("click", show);
	$("#researchbutton").on("click", show);
	if (window.location.hash == "") {
		$("#home").show();
	}
	else if (window.location.hash.indexOf("collab") > 0) {
		$("#collab").fadeIn();
		$('body').scrollTo($(window.location.hash));
	}
	else{
		$(window.location.hash).fadeIn();
		$(window.location.hash + "button").addClass("disabled");	
	}


	$(".collabbutton").on("click", showCollab);

	if (window.location.hash =="#resume") {
		window.location = "resources/Resume.pdf";
	}
});

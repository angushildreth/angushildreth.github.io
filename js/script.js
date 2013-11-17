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
		scroll(0,0);
	}
}

function showDropdown(event) {
	if ($(this).parent().hasClass("disabled")) {
		return false;
	}
	var currenthash = $(this).attr("href");

	if ($(this).parent().siblings().hasClass("disabled")) {
		$(".navbtn").removeClass("disabled");
		$(this).parent().addClass("disabled");
		window.location = currenthash;
	}
	else if ($(this).parent().parent().parent().hasClass("disabled")) {
		window.location = currenthash;
	}
	else {
		$(".navbtn").removeClass("disabled");
		$(".mainbody").fadeOut(100).delay(100);
		if (currenthash.substring(0,4) == "#lab") {
			$("#lab").show();
		}
		if ($(this).parent().hasClass("navbtn")) {
			$(this).parent().addClass("disabled");
		}
	}
}

function showPictureDetails(event) {
	console.log("Hello!");
}

function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
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
	$("#labbutton").on("click", show);
	$("#contactbutton").on("click", show);
	$("#researchbutton").on("click", show);
	if (window.location.hash == "") {
		$("#home").show();
	}
	else if (window.location.hash.indexOf("lab") > 0) {
		$("#lab").fadeIn();
		$('body').scrollTo($(window.location.hash));
	}
	else{
		$(window.location.hash).fadeIn();
		$(window.location.hash + "button").addClass("disabled");	
	}

	$(".dropdown").on("hover", function(){
		$(this).toggleClass("open");
	})
	$(".labbutton").on("click", showDropdown);

	if (window.location.hash =="#resume") {
		window.location = "resources/angus_hildreth_cv.pdf";
	}
	$(".gridpicture").on("hover", showPictureDetails);
});

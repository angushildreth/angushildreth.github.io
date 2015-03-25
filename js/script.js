$(document).ready(function(){
	$(".dropdown").hover(function(){
		$(this).toggleClass("open");
	})

  var btnName = window.location.pathname.replace(".html", "button").replace("/", "#");
  $(btnName).parent().addClass("active");

});

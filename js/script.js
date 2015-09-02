$(document).ready(function(){
	$(".dropdown").hover(function(){
		$(this).toggleClass("open");
	});


  $(window).scroll(function() {
    var scrollPos  = $("body").scrollTop();
    if (scrollPos >= 141 && !$(".navbar").hasClass("navbar-fixed-top")) {
      $(".navbar").addClass("navbar-fixed-top");
      $(".firstContainer").css("marginTop", "130px");
    } else if (scrollPos < 141 && $(".navbar").hasClass("navbar-fixed-top")) {
      $(".navbar").removeClass("navbar-fixed-top");
      $(".firstContainer").css("marginTop", "50px");
    }
  });

  var btnName = window.location.pathname.replace(".html", "button").replace("/", "#");
  $(btnName).parent().addClass("active");
  if (window.location.hash) {
    doScrollTo(window.location.hash);
  }

  $(".active>ul>.navbtn>a").on('click', function(e) {
    e.preventDefault();
    var hash = "#" + this.href.split("#")[1];
    doScrollTo(hash);
    history.pushState(null, null, hash)
  });
});

var doScrollTo = function(destination) {
  $('html, body').animate({
      scrollTop: $(destination).offset().top - 20
  }, 1000);
}


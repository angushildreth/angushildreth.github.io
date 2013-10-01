function show(event) {
	if ($(this).parent().hasClass("disabled")) {
		return false;
	} else {
		event.preventDefault();
		var currenthash = $(this).attr("href");
		$(".mainbody").slideUp(300).delay(600);
		window.location = currenthash;
		$(".navbtn").removeClass("disabled");
		if ($(this).parent().hasClass("navbtn")) {
			$(this).parent().addClass("disabled");
		}
		$(currenthash).show();
	}
}

$(document).ready(function(){
	$(".mainbody").hide();
	$("#home").show();
	$("#home").addClass("disabled");
	$("#homebutton").on("click", show);
	$("#aboutbutton").on("click", show);
	$("#contactbutton").on("click", show);
	$("#researchbutton").on("click", show);
	$("#collabbutton").on("click", show);

	if (window.location.hash =="#resume") {
		window.location = "resources/Resume.pdf";
	}
});
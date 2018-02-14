$(document).ready(function() {
	// Show default image on startpage timeout.
	var timeout;

	$(".rubrik").hover(function () {
		clearTimeout(timeout);

		$("body").addClass($(this).data("body-class"));
		$("#default-image").removeClass("visible-image");
	}, function () {
		$("body").removeClass($(this).data("body-class"));

		timeout = setTimeout(function () {
			$("#default-image").addClass("visible-image");
		}, 900);
	});


});

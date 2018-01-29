$(document).ready(function() {
	$(".rubrik").hover(function () {
		$("body").addClass($(this).data("body-class"));
	}, function () {
		$("body").removeClass($(this).data("body-class"));
	});
});

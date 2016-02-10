$(function() {
	var pos;
	
	$(".about").click(function() {
		pos = $("#about").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});

	$(".work").click(function() {
		pos = $("#work").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});

	$(".contact").click(function() {
		pos = $("#contact").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});
});
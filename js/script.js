$(function() {
	var pos;
	
	$(".about").click(function(evento) {
		evento.preventDefault();
		pos = $("#about").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});

	$(".work").click(function(evento) {
		evento.preventDefault();
		pos = $("#work").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});

	$(".contact").click(function(evento) {
		evento.preventDefault();
		pos = $("#contact").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});
});
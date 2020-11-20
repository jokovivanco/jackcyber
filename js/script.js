$(".scroll").on('click', function(e) {

	let el = $($(this).attr('href'));

	$('html').animate({
		scrollTop: el.offset().top - 50
	}, 1500, 'easeOutBounce');

	e.preventDefault();

});

$('.close').on('click', function(e) {
	$(this).parent().css({
		'transform': 'scale(0)',
		'opacity': 0
	});

	e.preventDefault();
})


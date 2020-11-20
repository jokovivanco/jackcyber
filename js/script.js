$(".scroll").on('click', function(e) {

	let el = $($(this).attr('href'));

	$('html').animate({
		scrollTop: el.offset().top - 50
	}, 1500, 'easeOutBounce');

	e.preventDefault();

});


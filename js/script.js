$(".scroll").on('click', function(e) {

	let el = $($(this).attr('href'));

	$('html').animate({
		scrollTop: el.offset().top - 50
	}, 1000, 'easeOutBounce');

	e.preventDefault();

});

$('.close').on('click', function(e) {
	$(this).parent().css({
		'transform': 'scale(0)',
		'opacity': 0
	});

	e.preventDefault();
})

// Parallax

$(window).on('load', function() {
	$('.first-p, .last-p, .about h1').addClass('appear');
});

$(window).scroll(function() {
	let wScroll = $(this).scrollTop();

	// Jumbotron

	$('.jumbotron .photo-profile').css({
		'transform': 'translate(0, ' + wScroll/4 + '%)'
	});


	$('.jumbotron h1').css({
		'transform': 'translate(0, ' + wScroll/2.5 + '%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0, ' + wScroll/1.3 + '%)'
	});

	// .portfolio

	if(wScroll > $('.portfolio').offset().top - 300) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}

});

$(document).ready(function () {
	/*$('body').css({
		'padding-top': $('.navbar').innerHeight()
	});*/

	//moving the picture when click on it
	var myindex = 0;

	$('.cards  .card img').on('click', function () {
		$(this).animate({
			'left': '20%',
			'marginTop': '30px'
		}, 400, function () {
			myindex--;
			$(this).css('z-index', myindex); //change the zindex for the clicked image to put it behind the first one
		}).animate({
			'left': $(this).css('left'),
			'marginTop': 0,
		});

		$('.img-text').text($(this).attr('alt'));
	});

	//typrwirete for banner text
	var text = $(".text1").data('text');
	var textLen = text.length;

	var n = 0;
	var typewriter = setInterval(function () {
		$('.text1').each(function () {
			$(this).html($(this).html() + text[n]);

		});

		n = n + 1;

		if (n >= textLen) {
			clearInterval(typewriter);
		}
	}, 400);


	//buttons effects
	//from left to right effect

	$('.left-effect').hover(function () {

		$('.first').animate({ width: '100%' }, 300);

	}, function () {
		$('.first').animate({ width: 0 }, 300);
	});
	//from right to left effect
	$('.right-effect').hover(function () {

		$('.second').animate({ width: '100%' }, 400);

	}, function () {
		$('.second').animate({ width: 0 }, 400);
	});


	//index page animation introduction text1
	//changing the intro text width and fontsize when scroll down
	/*$(window).scroll(function () {
		var position = $(window).scrollTop();
		console.log(position);
		//console.log(position);
		if (position >= 270) {
			$('.intro p').each(function () {
				$(this).animate({ width: '60%', fontSize: '19px' }, 600);
			});
		}*/

	//display the my-menu section when scoll donw

	if (position >= 600) {
		$('.my-menu').each(function () {
			$(this).css({ "opacity": 1 });
		});

	} else {
		$('.my-menu').each(function () {
			$(this).css({ "opacity": 0 });
		});
	}
	//display the menu section when scroll 
	if (position >= 1800) {
		$('.menu-container').each(function () {
			$(this).css({ 'opacity': "1" });

		});
	}
});

// moving the wel box in the index page when hovering 

$('.wel').hover(function () {
	$(this).animate({ marginTop: '-10px' }, 500);
}, function () {
	$(this).animate({ marginTop: '10px' }, 500);
});



});

(function($) {
	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});
	$(function() {
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');
			$body.addClass('is-loading');
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 0);
			});
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');
			if ($banner.length > 0
			&&	$header.hasClass('alt')) {
				$window.on('resize', function() { $window.trigger('scroll'); });
				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
			}
			$('.timeline-circle').on('click', function() {
				if (!$(this).hasClass('.current-square')) {
					$('.current-square').removeClass('current-square');
					$('.timeline-event.active-event').removeClass('active-event').hide();
					$('.main-bio-text').removeClass('main-bio-text-active').hide();
					$(this).addClass('current-square');
					$('.main-bio-text').fadeIn(600).addClass('main-bio-text-active');
					var target = $(this).attr('data-target');
					$('#' + target).fadeIn(600).addClass('active-event');
				}
			});
	});
})(jQuery);

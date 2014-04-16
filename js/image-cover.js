jQuery(document).ready(function($){
								
	jQuery(".blogpost img, .blogpost iframe, .works img").css({'opacity':'0.7'});
	
	$('.blogpost, .works').hover(function() {
		$(this).find('img').stop().animate({
			opacity: 1
		}, 'fast');
	}, function() {
		$(this).find('img').stop().animate({
			opacity: 0.7
		}, 'fast');
	});
	
	$('.blogpost').hover(function() {
		$(this).find('iframe').stop().animate({
			opacity: 1
		}, 'fast');
	}, function() {
		$(this).find('iframe').stop().animate({
			opacity: 0.7
		}, 'fast');
	});
	
	

});
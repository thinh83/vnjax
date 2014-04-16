$(document).ready(function(){ 
						   
	
jQuery(".logo img").css({'opacity':'0.7'});
	
	$('.logo').hover(function() {
		$(this).find('img').animate({
			opacity: 1
		}, 200);
	}, function() {
		$(this).find('img').animate({
			opacity: 0.7
		}, 200);
	});
	
	});
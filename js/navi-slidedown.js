// JavaScript Document

$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
$(document).ready(function () {	
	
$("ul#nav").on('mouseenter', 'li', function() {
			var $this    = $(this),
				$subMenu = $this.children('ul');
			if( $subMenu.length ) $this.addClass('hover');
			$subMenu.hide().stop(true, true).slideFadeToggle(200);
		}).on('mouseleave', 'li', function() {
			$(this).removeClass('hover').children('ul').stop(true, true).fadeOut(50);
		});

$('#nav li ul').mouseenter(function(){
		$(this).parent().find("a").slice(0,1).addClass("active");
	});
	$('#nav li ul').mouseleave(function(){
		$(this).parent().find("a").slice(0,1).removeClass("active");
	});
	
$('#nav li ul ul').mouseenter(function(){
		$(this).parent().find("a").slice(0,1).removeClass("active");
	});
	
});


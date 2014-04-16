
		
		function mycarousel_initCallback(carousel)
{
        carousel.clip.hover(function() {
                carousel.stopAuto();
        }, function() {
                carousel.startAuto();
        });
};
		
		jQuery(document).ready(function() {
										
			jQuery('#carousel-works').jcarousel();
			jQuery('#carousel-logos').jcarousel({
			scroll:2,
			auto:5,
                wrap: 'last',
                initCallback: mycarousel_initCallback,
			});
			jQuery('#carousel-blog').jcarousel({
			scroll:1
			});
			$('a[data-rel]').each(function() {
    		$(this).attr('rel', $(this).data('rel'));
			});
			$("a[rel^='prettyPhoto']").prettyPhoto();
			jQuery('.tipsy-me').tipsy({gravity: 's', fade: true});
			jQuery( "#accordion" ).accordion({
				autoHeight: false,
				navigation: true
			});
			jQuery( "#accordion-small" ).accordion({
				autoHeight: false,
				navigation: true
			});
			$('#twitter #twitter_update_list').jTweetsAnywhere({
        username: 'envato',
        count: 1,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showInReplyTo: false,
            showActionReply: false,
            showActionRetweet: false,
            showActionFavorite: false
        }
    });
			$('.sidebar-feed #twitter_update_list').jTweetsAnywhere({
        username: 'envato',
        count: 2,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showInReplyTo: false,
            showActionReply: false,
            showActionRetweet: false,
            showActionFavorite: false
        }
    });
			
		});
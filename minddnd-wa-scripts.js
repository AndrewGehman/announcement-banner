jQuery(document).ready(function($){
	if ( wa_placement_script.wa_placement == 'top') {
		$('#minddnd_wa_announcement_wrap').prependTo('body');
	}

	$('.mind-wa-close-announcement').on('click', function(){
		$('.minddnd-wa-announcement-wrap').addClass('minddnd-wa-hidden');
		$('body').removeClass('minddnd-wa-announcement');
	});
	
});
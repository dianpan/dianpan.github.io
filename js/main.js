jQuery(document).ready(function($) {
   'use strict';

	// Projects
	$(".project-item").hover(function(e){
		$(this).children('.project-item-inside').addClass("visuallyshowed");
	}, function(){
		$(this).children('.project-item-inside').removeClass("visuallyshowed");
	});

	// Skrollr · Mobile NONE
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
			beforerender: function(data) {
				return data.curTop > data.lastTop;
			}

	    });
	}
	// Skrollr
});


$(window).load(function() {
	fixSizes();
	$(".loader").delay(500).fadeOut('slow');
	$("body").css("overflow", "auto");
	$(".home-title").removeClass("jiji");
	$(".menu-icon").removeClass("jiji");
});

$(window).resize(function() {
	fixSizes();
});

function fixSizes() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$("#home").css('height', windowHeight);
	$(".home-title").each(function() {
		$(this).css('padding-top', ($(this).parent().height() - $(this).height()) / 2);
	});
	$(".project-item-inside-content").each(function() {
		$(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2);
	});
}
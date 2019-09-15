$(document).ready(function(){
	var width = window.innerWidth;
	$('.spoiler-title').click(function(){
		$(this).toggleClass('opened').toggleClass('closed').parent().children('.spoiler-body').slideToggle();
		return false;
	});

	var effortsSlider = $('.efforts_slider').bxSlider();
	var reviewSlider = $('.slaider_reviews').bxSlider({adaptiveHeight: true,pager: true,minSlides: 2,maxSlides: 2,moveSlides: 2});
	var sld = function() {
		var width = window.innerWidth;
		if (width < 768) {
			effortsSlider.bxSlider();
		} else {
			effortsSlider.destroySlider();
		}
	};
	sld();
	var resizeId;
	$(window).on('load', function(){$(this).resize()});
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(doneResizing, 300);
	});
	
	function doneResizing(){
		clearTimeout(resizeId);
		sld();
	}
});




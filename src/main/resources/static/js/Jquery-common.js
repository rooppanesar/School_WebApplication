$(document).ready(function(){
	/* var $window = $(window);
	var velocity = 0.4;
	function update(){
		var pos = $window.scrollTop();
		$('body').each(function(){
			var $element = $(this);
			var height = $element.height();
			$(this).css('backgroundPosition','50%' + Math.round(
				(height-pos) * velocity) + 'px');
		});
	} */
	
	/* (function(){
		var parallax = document.querySelectorAll("body"), speed = 0.5;
		window.onscroll = function(){
			[].slice.call(parallax).forEach(function(e1,i){
				var windowYOffset = window.pageYOffset,e1BackgroundPos = "50%" + (windowYOffset * speed) + "px";
				e1.style.backgroundPosition = e1BackgroundPos;
			});
		};
	})(); */
	
	// mobile-nav
	$('.trigger').click(function(){
		$('.mobile_nav').slideToggle('fast');
	});
	$('.trigger').click(function(){
		$(this).toggleClass('active');
	});
	
});
$(document).mouseup(function(e){
	var container = $('.about-subnav, .faculty-subnav');
	if (!container.is(e.target) && container.has(e.target).length === 0){
		container.fadeOut('fast');
	}
});

jQuery(document).resize(function () {
	var screen = $(window)    
	if (screen.width < 768) {
		$('nav ul li a').eq(1).mouseenter(function(){
			$('.about-subnav').hide();
			$('.faculty-subnav').hide();
		});
		$(".bar-icon").removeClass('disp-none');
		$('.nav-bar-icon').show();
	}
	else {
		$(".bar-icon").addClass('disp-none');
	}
});
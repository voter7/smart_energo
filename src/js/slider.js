$(document).ready(function() {

	var $progress = $('.progress');
	var $progressLabel = $('.progress-label');
	$('#slider').append('<div class="progress"><span class="progress-label" aria-valuemin="50" aria-valuemax="100" ></span></div>');

	
	function progress() {
		var imageCount = $('.slider-item').length;
		// var percent = ((index + 1) / imageCount) * 100;
		var time = imageCount * 5000;
		var width = $progressLabel.width();

			$progressLabel.animate({width: 0 + '%', width: 100 + '%'},
				time, 'linear', function() {
					$progressLabel.width(0);
			});
		
	}

	progress();

	
	

	function slider(selector) {

		var slider = $(selector);
		var images = $('.slider-item');
		$(selector).append('<div class="arrow next"></div><div class="arrow prev"></div>');
		$(selector).append('<div class="dots"></div>');
		var next = $('.next');
		var prev = $('.prev');
		var dots = $('.dots');
		var currentIndex = 0;
		var intervalId = setInterval(autoChange, 5000);
		
		


		images.each(function(i) {

			if (i == 0) {
				dots.append('<div class="dot active"></div>');
			} else {
				dots.append('<div class="dot"></div>');
			}
	
		});

		slider.on('click', '.arrow, .dot', function() {

			var thisSlide = $(this);
			var active = slider.find('.showed');
			var current = active.index();
			var next = current;


			if(thisSlide.hasClass('prev')) {
				next = current - 1 >= 0 ? current - 1 : images.length - 1;
			} else if(thisSlide.hasClass('next')) {
				next = (current + 1) % images.length;
			} else {
				next = thisSlide.index();
			}

			if (current == next) {
				return;
			}


			active.removeClass('showed');
			dots.find('.dot').removeClass('active');
			images.eq(next).addClass('showed');
			dots.find('.dot').eq(next).addClass('active');

		});


		function change() {
			images.eq(currentIndex).removeClass('showed');
			dots.find('.dot').removeClass('active');

			currentIndex++;
			if(currentIndex >= images.length) {
				currentIndex = 0;
			}	
			images.eq(currentIndex).addClass('showed');
			dots.find('.dot').eq(currentIndex).addClass('active');
		
		}

		
		function autoChange() {			
			change();	
		}


		slider.mouseover(function(event) {
			clearInterval(intervalId);
		});

		slider.mouseout(function(event) {
		intervalId = setInterval(autoChange, 5000);
	
		});
		
	}

	slider('#slider');

































	// function nextSlide() {
	// 	images.eq(currentIndex).removeClass('showed');
	// 	$('.dot').eq(currentIndex).removeClass('active');
	// 	currentIndex++;
	// 	if(currentIndex > images.length) {
	// 		currentIndex = 1;
	// 	}
	// 	images.eq(currentIndex).addClass('showed');
	// 	$('.dot').eq(currentIndex).addClass('active');
		
	// }

	// function prevSlide() {
	// 	images.eq(currentIndex).removeClass('showed');

	// 	currentIndex--;
	// 	if(currentIndex <= 0) {
	// 		currentIndex = images.length;
	// 	}
	// 	images.eq(currentIndex).addClass('showed');

	// }

	// images.each(function(index) {
	// 	if(index == 0) {
	// 		dots.append('<div class="dot active"></div>');
	// 	} else {
	// 		dots.append('<div class="dot"></div>');
	// 	}
	// });
	// .eq(0);
	// .addClass('showed');


	

	// next.click(function() {
	// 	nextSlide();
	// });

	// prev.click(function() {
	// 	prevSlide();
	// });

	// function autoChange() {
	// 	nextSlide();
	// };

	// slider.mouseover(function(event) {
	// 	clearInterval(intervalId);
	// });

	// slider.mouseout(function(event) {
	// 	intervalId = setInterval(autoChange, 5000);
	
	// });
		




	// function change(slide) {

	// 	if(slide > images.length) {
	// 		currentIndex = 1;
	// 	}

	// 	if(slide < 1) {
	// 		currentIndex = images.length;
	// 	}
	// }


// 	function init() {
// 		images.each(function(index) {
// 			if(index == 0) {
// 				dots.append('<div class="dot active"></div>');
// 			} else {
// 				dots.append('<div class="dot"></div>');
// 			}
// 		})
// 		.eq(0)
// 		.addClass('showed');

// 		next.click(function() {
// 			slideNext();
// 		});		

// 		prev.click(function() {
// 			slidePrev();
// 		});

	

// 		dots.find('.dot').click(function() {
// 			var oldIndex = currentIndex;
// 			currentIndex = $(this).index();

// 			slide(oldIndex, currentIndex);

// 		});

// 			slider.mouseover(function(event) {
// 			clearInterval(intervalId);
		
		
// 		});

// 			slider.mouseout(function(event) {
// 			intervalId = setInterval(autoChange, 5000);
		
// 		});

// 	}

// 	function slideNext() {
// 		hideSlide(currentIndex);
// 		currentIndex++;  

// 		if(currentIndex >= images.length) {
// 		currentIndex = 0;
// 		}
// 		showSlide(currentIndex);	 
// 	}


// 	function slidePrev() {
// 		hideSlide(currentIndex);
// 		currentIndex--;  

// 		if(currentIndex < 0) {
// 		currentIndex = images.length - 1;
// 		}
// 		showSlide(currentIndex);				
// 	}

// 	function slide(prevIndex, nextIndex) {
// 		hideSlide(prevIndex);
// 		showSlide(nextIndex);
// 	}


// 	function hideSlide(slide) {
// 		images.eq(slide).removeClass('showed');
// 		$('.dot').eq(slide).removeClass('active');
// 		progress();
// 	}


// 	function showSlide(slide) {
// 		images.eq(slide).addClass('showed');
// 	$('.dot').eq(slide).addClass('active');
// 	progress();
// 	}

// 	function autoChange() {
// 		slideNext();
// 		progress();
// 	}	

// init();
			
});

























// $(document).ready(function() {
// 	// if($(window).width() <= 480) {			      
// 				// $('slick-slider').find('.slick-slide').height('auto');		      
// 				// var slickTrack = $(this).find('.slick-track');		      
// 				// var slickTrackHeight = $(slickTrack).height();		      
// 				// $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
// 				// }



// 				var slider = $('.slider');
// 				var images = $('.slider .slider-item');
// 				var currentIndex = 0;
// 				$('.slider').append('<div class="next"></div><div class="prev"></div>');
// 				$('.slider').append('<div class="dots"></div>');
// 				var next = $('.next');
// 				var prev = $('.prev');
// 				var dots = $('.dots');
// 				$('.slider').append('<div class="progress"><span class="progress-label" aria-valuemin="0" aria-valuemax="100" ></span></div>');
// 				var $progress = $('.progress');
// 				var $progressLabel = $('.progress-label');


	

// 			// 	function progress(index) {
// 			// 		var imageCount = $('.slider-item').length;
// 			// 		var percent = ((index + 1) / imageCount) * 100;
					
// 			// 			$progressLabel.css('width', percent + '%').attr('value', percent);


// 			// }

// 			// 	progress(currentIndex);
				
// 		function progress() {
// 			var imageCount = $('.slider-item').length;
// 			// var percent = ((index + 1) / imageCount) * 100;
// 			var time = imageCount * 5000;
// 			var width = $progressLabel.width();

// 				$progressLabel.animate({width: 0 + '%', width: 100 + '%'},
// 					time, 'linear', function() {
// 						$progressLabel.width(0);
// 				});
			
// 	}

// 		progress();


// 				function init() {
// 					images.each(function(index) {
// 						if(index == 0) {
// 							dots.append('<div class="dot active"></div>');
// 						} else {
// 							dots.append('<div class="dot"></div>');
// 						}
// 					})
// 					.eq(0)
// 					.addClass('showed');

// 					next.click(function() {
// 						slideNext();
// 					});		

// 					prev.click(function() {
// 						slidePrev();
// 					});

				

// 					dots.find('.dot').click(function() {
// 					  var oldIndex = currentIndex;
// 					  currentIndex = $(this).index();

// 					  slide(oldIndex, currentIndex);
			
// 					});

// 						slider.mouseover(function(event) {
// 						clearInterval(intervalId);
					
// 					});

// 						slider.mouseout(function(event) {
// 						intervalId = setInterval(autoChange, 5000);
// 					});

// 				}

// 				function slideNext() {
// 					hideSlide(currentIndex);
// 					currentIndex++;  

// 				  if(currentIndex >= images.length) {
// 				    currentIndex = 0;
// 				  }
// 				 	showSlide(currentIndex);	 
// 				}


// 				function slidePrev() {
// 					hideSlide(currentIndex);
// 				  currentIndex--;  

// 				  if(currentIndex < 0) {
// 				    currentIndex = images.length - 1;
// 				  }
// 				  showSlide(currentIndex);				
// 				}

// 				function slide(prevIndex, nextIndex) {
// 				 hideSlide(prevIndex);
// 				 showSlide(nextIndex);
// 				}


// 				function hideSlide(slide) {
// 					images.eq(slide).removeClass('showed');
// 				  $('.dot').eq(slide).removeClass('active');
// 				  progress();
// 				}


// 				function showSlide(slide) {
// 				 	images.eq(slide).addClass('showed');
// 			  	$('.dot').eq(slide).addClass('active');
// 			  	progress();
// 				}
		
// 				function autoChange() {
// 					slideNext();
// 					progress();
// 				}	

// 			init();
			
// 			var intervalId = setInterval(autoChange, 5000);


			
// });
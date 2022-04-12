var __widthMobile = 480;
var __widthMobileDesktopSmall = 1280;
var __widthMobileTablet = 1024;
var __widthMobileTabletMiddle = 768;
var __widthMobileTabletSmall = 600;
var __widthMobileSmall = 540;
var __isMobile = ($(window).width() <= __widthMobile);
var __isMobileDesktopSmall = ($(window).width() <= __widthMobileDesktopSmall);
var __isMobileTablet = ($(window).width() <= __widthMobileTablet);
var __isMobileTabletMiddle = ($(window).width() <= __widthMobileTabletMiddle);
var __isMobileTabletSmall = ($(window).width() <= __widthMobileTabletSmall);
var __isMobileSmall = ($(window).width() <= __widthMobileSmall);
var __animationSpeed = 350;	

	// Modal open/close

$(document).ready(function() {
	// initElements();

	// BURGER
	$('#menu-holder').click(function() {
		if ((__isMobileTabletMiddle) && !$('body').hasClass('mobile-opened')) { 
			if (!$('header').children('.close').data('inited')) {
				if (!$('header>.close').length) {
					$('header').append('<div class="close"></div>');
				}
				$('header').children('.close').click(function(e) {
					e.stopPropagation();

					$('body').removeClass('mobile-opened');
					$('html').removeClass('html-mobile-long');
					$('#layout').height('auto').removeClass('js-modal-overflow');
					//$('.modal-fadeout').stop().fadeOut(300);	
				}).data('inited', true);
			}

			$('body').addClass('mobile-opened');

			if ($('#menu-holder').outerHeight() > $(window).height()) {
				$('html').addClass('html-mobile-long');
			} else {
				$('html').removeClass('html-mobile-long');
			}

			$('#layout').addClass('js-modal-overflow').height($('header').outerHeight());

			//$('.modal-fadeout').stop().fadeIn(300);
		}
	});



//search

$('#search button').click(function() {
	if (!$('#search').hasClass('opened')) {   
		$('#search').addClass('opened');	 
		$('#search').prev('ul').stop().animate({opacity: 0}, __animationSpeed);  
		$('#search input').focus();
		return false;   //отмена стандартного события 
	} else {
		$('#search form').submit();
		return true;
	}
});

$('body').mousedown(function(event) {
	//if (event.target == $('#search input').get(0) || event.target == $('#search button').get(0)) {
	if ($(event.target).closest('#search').length > 0) {
		console.log('yes');
	} else {
		$('#search').removeClass('opened');
		$('#search').prev('ul').stop().animate({opacity: 1}, __animationSpeed);
	}
});

$(document).on('keyup',function(e) {
	if (e.key === 'Escape') {
		$('#search').removeClass('opened');
		$('#search').prev('ul').stop().animate({opacity: 1}, __animationSpeed);
	}
});



$(window).resize(function () {
	if($(window).width() <= 480) {
		$('.services-slider').addClass('js-slider');
	} else {
		$('.services-slider').removeClass('js-slider');
	}
});


  // SLICKS
  $('.js-slider').each(function(i, slider) {
	var mobile = $(slider).attr('data-mobile');
	var adaptive = $(slider).attr('data-adaptive');
	var dots = $(slider).attr('data-dots') === 'false' ? false : true;
	var arrows = $(slider).attr('data-arrows') === 'true' ? true : false;
	var autoplay = $(slider).attr('data-autoplay') ? $(slider).attr('data-autoplay') : false;
	var slidesToShow = adaptive ? Math.floor($(slider).outerWidth() / $(slider).children('li, .li').outerWidth()) : 1; 

	if (mobile) {
		if ((mobile === 'true' && __isMobile) ||
			(mobile === 'middle' && __isMobileTabletMiddle) ||
			(mobile === 'small' && __isMobileTabletSmall) ||
			(mobile === 'mobile' && __isMobileSmall)) {					

			$(slider).slick({
				slidesToShow: slidesToShow,
				slidesToScroll: slidesToShow,
				dots: dots,
				arrows: arrows,
				autoplay: autoplay,
			});
		}
	} else {
		$(slider).slick({
			slidesToShow: slidesToShow,
			slidesToScroll: slidesToShow,
			dots: dots,
			arrows: arrows,
			autoplay: autoplay
		});
	}
});




////Tabs


$("#tabs>li>a").click(function(e) {
	e.preventDefault();
	$(".tab-active").removeClass("tab-active");
	$(this).toggleClass("tab-active");
	let link = $(this).attr('href');
	console.log(link);
	$('.tab-content-act').removeClass('tab-content-act');
	$(link).toggleClass('tab-content-act');

	if($('.tab-content-act').is(':visible')){
        $(".js-slider").slick('setPosition');
      	$(window).resize();  
	}
	
	$('#modal-profile h4').html($(this).attr('data-header'));
	
});



///jquery-ui

$(function() {
	$('#heading').selectmenu();
	$('#agree-question').checkboxradio();
});




//height

function heightBlock(block) {
	var height = 0;

	block.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > height) {
			height = thisHeight;
		}
	});

	block.height(height);
};

heightBlock($(".slick-track > .item"));
// heightBlock($(".license_img > li"));




//modal


	const overlay = $('.modal-fadeout');
	const modalWrap = $('.modal-wrapper');
	const modalClose = $('.modal-close');
	const trigger = $('.js-modal-link');
	const scroll =  scrollbarWidth(); 

	function showModal(modal) {
		var modalPopup = $(modal);
		overlay.fadeIn(200);
		modalPopup.css({'display': 'table', 'top': $(window).scrollTop()}).animate({opacity: 1}, __animationSpeed);
		$(document.body).css('overflow', 'hidden');
	

	}

	function hideModal(modal) {	
		var modalPopup = $(modal); //ModalWrapper
		overlay.fadeOut(200);
		modalPopup.css({'display': 'none', 'top': $(window).scrollTop()}).animate({opacty: 0}, __animationSpeed);
		$(document.body).css('overflow', "");
		$(document.body).css('padding-right', '0px');

	}

	trigger.click(function(e) {
		e.preventDefault();		
		var link = $(this).attr('href');
		showModal(link);				
		$(document.body).css({'padding-right' : scroll + 'px'});	
	});


	modalClose.click(function() {	
		hideModal(modalWrap);	
	});

	function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'60px'}),
            indicator = $('<div>').css({'height':'200px'});

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();    
        block.css({'overflow-y': 'scroll', 'visibility': 'hidden'});
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }

	console.log(scrollbarWidth());


	// MODAL LINKS
	$('.js-modal-link').click(function(e) {
		e.preventDefault();
		showModal($(this).attr('href').substring(1));
	});



	// var toCheck = $('.toCheck');
	var modalDone = $('#modal-done');
	var modalConsultation = $('#modal-consultation');
	var modalContacts = $('#contacts_form');
	var checkboxForm = $('.contacts_form form input[type="checkbox"]');



	///form post
	
	function sendFormData(form, url, thisModal, bool) {

		form.submit(function(event) { 
			event.preventDefault();
	
	
			if(validateForm()) {
				return false;

			} else {
				$.ajax({
					url: url,
					type: 'POST',
					// dataType: 'html',
					data: new FormData(this),
					contentType: false,
					cache: false,
					processData: false,
					success: function(data) {
						console.log(data);
						thisModal.hide();
						showModal(modalDone);
						setTimeout(function() {
							modalDone.hide();
							if(bool) {
								overlay.css({'display': 'none'});	
							}
	
							thisModal.show();
							$('body').css('overflow', "");
						}, 5000);
						$("form").trigger("reset");
						// $('input[type="text"], input[type="number"], input[type="email"], input[type="checkbox"], textarea').val('');
						// $('.ui-checkboxradio-label').find('.ui-state-checked').remove();
						
					},
					error: function (jqXHR, exception) {
						if (jqXHR.status === 0) {
							alert('Not connect. Verify Network.');
						} else if (jqXHR.status == 404) {
							alert('Requested page not found (404).');
						} else if (jqXHR.status == 500) {
							alert('Internal Server Error (500).');
						} else if (exception === 'parsererror') {
							alert('Requested JSON parse failed.');
						} else if (exception === 'timeout') {
							alert('Time out error.');
						} else if (exception === 'abort') {
							alert('Ajax request aborted.');
						} else {
							alert('Uncaught Error. ' + jqXHR.responseText);
						}
					}
					
				});
			}
		});
	}

	sendFormData($('#get_consultation'), '/api.php', modalConsultation, false);
	sendFormData($('#get_question'), '/api.php', modalContacts, true);
	


	function validateForm() {

        $('.text-error').remove();

        var name = $('input[name="name"]');
		var phone = $('input[name="tel"]');
		var checkbox = $('input[type="checkbox"]');
		var textarea = $('textarea[name="text"]');
		var email = $('input[type="email"]');

		
		if (checkbox && checkbox.prop("checked")) {
			return false;
		}

		// if(email.val().length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
		if(email.val() == '') {
			var t_email = true;
			email.after('<span class="text-error for-login">Введите корректный E-mail</span>');
			$('.for-login').css({color: 'red', fontSize: 16 + 'px', display: 'block'});
			email.toggleClass('error', t_email); 
			return true;
		} 

		if(textarea && textarea.val() == '') {
			var t_textarea = true;
            textarea.after('<span class="text-error for-login">Введите свой вопрос</span>');
            $('.for-login').css({color: 'red', fontSize: 16 + 'px', display: 'block'});
            textarea.toggleClass('error', t_textarea); 
            return true;
		}


        if(name.val().length < 2) {
            var t_name = true;
            name.after('<span class="text-error for-login">Логин должен быть больше 2 символов</span>');
            $('.for-login').css({color: 'red', fontSize: 16 + 'px', display: 'block'});
            name.toggleClass('error', t_name); 
            return true;
        } else {
            name.toggleClass('error', false);
        }

        if(phone.val().length < 6) {
            var t_phone = true;
            phone.after('<span class="text-error for-phone"> Номер должен быть больше 6 символов</span>');
            $('.for-phone').css({color: 'red', fontSize: 16 + 'px', display: 'block'});
            phone.toggleClass('error', t_phone);
            return true;
        }  else {
            phone.toggleClass('error', false);
        }   
	}


//form get 

$('#show-more').click(function() {


	$.ajax({
		url: 'http://localhost:3000/cards',
		type: 'GET',
		dataType: 'json',
		success: function(data) {

			createCard(data);
			console.log(data);
		},

		error: function() {
			console.log('не получилось:((');
		}
	});

	this.remove();

});

function createCard(response) {
	var data = $(response);
	data.each(function(i, item) {  
	var card = ('<li class="element-animate">' + '<a href=' + item.a + '><div class="w-image" style="background-image: url(' + item.image +');"></div><div class="w-text"><h3>' + item.h3 +'</h3><p>'+ item.description +'</p><div class="heading-link"><p>'+ item.section +'</p><p>' + item.date + '</p><span>' + item.span + '</span></div></div></a>' + '</li>');
	$('.works-items-info').append(card);
	$('li').removeClass('element-animate').addClass('element-animated');
	 
	});
}


//Magnific-popup gallery

$('.gallery-wrap').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	callbacks: {
		beforeOpen: function() {
			$(this.contentContainer).removeClass('fadeOut').addClass('animated fadeIn');
		},
		beforeClose: function() {
			$(this.contentContainer).removeClass('fadeIn').addClass('fadeOut');
		}
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title') + '<small></small>';
		}
	}
});



	
//counter animation

function animateNum(num, numberValue) {
	var number = $(num);
	var blockStatus = true;

	if (number.length) {
		$(window).scroll(function() {	
			var scrollEvent = ($(window).scrollTop() > (number.position().top - $(window).height())); //когда доходим до элемента		
			if(scrollEvent && blockStatus) {	
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.			
				$({numberValue: 0}).animate({numberValue: numberValue}, {    //деструктурирующее присваивание var numberValue = 0;	
					duration: 1000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",  //равномерная анимация.		
					step: function(val) {		
						number.html(Math.ceil(val)); // Изменяем html-содержимое и округляем аргумент до ближайшего целого числа.				
					}	
				});	
			}	
		});
	}
}

animateNum('.numYear', 9);
animateNum('.numKm', 19);
animateNum('.numWorkers', 46);
	


	// var winHeight = $(window).height();
	// console.log(winHeight);

	// var numPosition = $('.num').position().top;
	// console.log(numPosition);

	// var winScroll = $(window).scrollTop();
	// console.log(winScroll);




});

















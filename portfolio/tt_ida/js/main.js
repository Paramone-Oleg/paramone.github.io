$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > $('#header + section').height() - 1) {
			$('#header').addClass("fixed-top");
		} else {
			$('#header').removeClass("fixed-top");
		};

	});


	var text = $(".text");
	if (text.height() > 205) {
		text.addClass('hidden');
		text.before('<a class="read_more">Читать еще <span>Свернуть</span></a>');
	}
	$(".text.hidden").before('<a class="read_more">Читать еще <span>Свернуть</span></a>');

	$("#burger").on('click', function () {
		$("ul.links").slideToggle();
	});

	$("nav").on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		$('.links a').removeClass('active');
		$(this).addClass('active');
		var handleMatchMedia = function (mediaQuery) {
				if (!mediaQuery.matches) {
					$("ul.links").slideToggle();
				}
			},
			mql = window.matchMedia('all and (min-width:768px)');
		handleMatchMedia(mql);
		mql.addListener(handleMatchMedia);
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 400);
	});

	$('#sound').on('click', function () {
		$(this).toggleClass('unmuted');
		$('#video-bg video').prop('muted', function (i, currentValue) {
			return !currentValue;
		});
	});

	$('#comment').owlCarousel({
		loop: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			415: {
				items: 3
			}
		}
	});

	function func() {
		$('.owl-carousel .owl-stage-outer').addClass('overflow');
		
	}
	setTimeout(func, 1500);
	
	$('.read_more').on('click', function () {
		$(this).toggleClass('open');
	});

	$('#sumbit').on('click', function () {
		validateForm();
	});

	function validateForm() {

		var nameReg = /^[A-Za-z]+$/;
		var numberReg = /^[0-9]+$/;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		var names = $('#name').val();
		var phone = $('#phone').val();
		var email = $('#email').val();

		var inputVal = new Array(names, email, phone);

		var tiperror = '<a class="error">Поле обязательно для заполнения</a>';

		if (inputVal[0] == "") {
			$('#name').before(tiperror);
		} else if (!nameReg.test(names)) {
			$('#name').after('<div class="error">Только буквы без цифр</div>');
		}

		if (inputVal[1] == "") {
			$('#email').before(tiperror);
		} else if (!emailReg.test(email)) {
			$('#email').after('<div class="error">Введите действительный адрес электронной почты</div>');
		}

		if (inputVal[2] == "") {
			$('#phone').before(tiperror);
		} else if (!numberReg.test(phone)) {
			$('#phone').after('<div class="error">Номер телефона должен содержать только цифры</div>');
		}

		$(".error").on('click', function (event) {
			event.preventDefault();
			$(this).hide();
		});

	};

});

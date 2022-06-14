$(function() {
    $('.slider__items').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt="arrow-right"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '100px',
        responsive: [
            {
              breakpoint: 1475,
              settings: {
                slidesToShow: 1,
                prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt="arrow-left"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt="arrow-right"></button>',
              }
            },
            {
                breakpoint: 1180,
                settings: {
                  slidesToShow: 1,
                  prevArrow: false,
                  nextArrow: false,
                }
              },
          ]
    });

    $('.menu__btn, .menu a').on('click', function() {
        $('.header-top__inner').toggleClass('header-top__inner--active');
    });

    $(".menu a, .go-top").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
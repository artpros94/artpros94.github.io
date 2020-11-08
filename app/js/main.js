$(function(){


    $('.slider__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dots',
        autoplay: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
    
          ]
    });

    $('.review__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.header-top__btn').on('click', function(){
        $('.header-top__menu').slideToggle();
    });

    







    var mixer = mixitup('.menu__inner-box');

});
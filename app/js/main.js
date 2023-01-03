$(function () {

  $('.header-inner__btn-profile').on('click', function () {
    $('.header-inner__btn-profileMenu').toggleClass('header-inner__btn-profileMenu--active');
  });

    $('.top-slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '155px',
      arrows: false,
    });
    $('.slick-prev').text(">");
    $('.slick-next').text("<");
});
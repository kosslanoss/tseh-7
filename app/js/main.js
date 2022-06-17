$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

});
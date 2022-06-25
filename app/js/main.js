$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu a').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  var swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  var swiper = new Swiper('.block', {
    pagination: {
      direction: 'vertical',
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  var swiper = new Swiper(".feedback__wrapper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
 





});
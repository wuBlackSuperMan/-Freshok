$(function () {
  $('.slider__list').slick({
    prevArrow: '<button type="button" class="slick__btn slick-prev"><img src="images/slider/prevarrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"><img src="images/slider/nextarrow.svg" alt=""></button>',
  });




  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})
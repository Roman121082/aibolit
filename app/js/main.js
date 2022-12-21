
$(function () {

  $('.burger').on('click', function () {
    $('.burger__menu-list').toggleClass('burger__menu-list--active')
  });

  $('.top-slider').slick({
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });




  // $('.tabs').on('click', function (e) {
  //   e.preventDefault();

  //   $($(this).sublings()).removeClass('tabs--active');
  //   $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

  //   $(this).addClass('tabs--active');
  //   $($(this).attr('href')).addClass('tabs__content--active');
  // });



  // $('.tabs').on('click', function (e) {
  //   e.preventDefault();

  //   $('.tabs').removeClass('tabs--active');
  //   $('.tabs-content').removeClass('tabs-content__active');

  //   $(this).addClass('tabs--active');
  //   $($(this).attr('href')).addClass('tabs-content__active');
  // });


  // var mixer = mixitup('.tabs-container', {
  //   load: {
  //     filter: '.category-a'
  //   }
  // });


});





// $(".rate-yo").rateYo({
//   ratedFill: "green",
//   normalFill: "#A0A0A0",
//   spacing: "7px",
//   numStars: 5,
//   starWidth: "35px",
//   fullStar: true,
// });


// $('.menu__btn').on('click', function () {
//   $('.menu-mobile').toggleClass('menu-mobile--active')
// });








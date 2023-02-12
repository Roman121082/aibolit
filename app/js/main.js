
$(function () {

  // $('.burger').on('click', function () {
  //   $('.burger__menu-list').toggleClass('burger__menu-list--active')
  // });

  $('.top-slider__inner').slick({
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  // $('.burger__btn').on('click', function () {
  //   $('.burger-mobile__list').toggleClass('burger-mobile__list--active')
  // });


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





// let a = 'Здарова';
// let b = 'Привет';
// let c = 'Хай';

// let z = 5;
// if (z > 1) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// if (z > 1) console.log(a);



// if (z > 5) {
//   console.log(a);
// } else if (z > 1) {
//   console.log(c);
// }
// else if (z > 5) {
//   console.log(a);
// }
// else if (z > 10) {
//   console.log(b);
// };

// let v = 5 > 10 ? "Вася" : "Оля";

// console.log(v);

// // ===========================================================================

// let num = 0;
// while (num < 5) {
//   console.log(num);
//   num++;
// };

// let nam = 5;
// while (nam) {
//   console.log(nam)
//   nam--;
// };

// let nem = 5;
// while (nem) console.log(nem--);

// let f = 0;
// do {
//   console.log(f)
//   f++;
// } while (f < 0);

// //===========================================================================

// for (let g = 10; g < 15; g++) {
//   console.log(g);
// }

// let s = 0;
// for (; s < 5; s++) {
//   console.log(s);
//   if (s == 2) break;
// }
// console.log(`Работа окончена s = ${s}`);

// let sa = 0;
// for (; sa < 5; sa++) {
//   if (sa == 2) continue;
//   console.log(sa)
// };

// firstFor: for (let sb = 0; sb < 2; sb++) {
//   for (let size = 0; size < 3; size++) {
//     if (size == 2) {
//       break firstFor;
//     }
//     console.log(size)
//   }
// };

// firstFor: for (let sc = 0; sc < 2; sc++) {
//   for (let si = 0; si < 3; si++) {
//     if (si == 2) {
//       continue firstFor;
//     }
//     console.log(si)
//   }
// };

// //=========================================================================

// let = globalVar = 'Я глобальная переменная';

// function calcSumm(numOne, numTwo) {
//   console.log(`Переменная numOne:${numOne}`);
//   console.log(`Переменная numTwo:${numTwo}`);

//   let numSumm = numOne + numTwo;

//   console.log(`Сумма:${numSumm}`);
// };

// calcSumm(1, 2);


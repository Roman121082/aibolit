// const button = document.querySelector('.button');
// const options = {
//   "capture": true,
//   "once": false,
//   "passive": false
// };

// function showConsole(event) {
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.clientX);
//   console.log(event.clientY);
//   console.log(event);
// };

// button.addEventListener("click", showConsole, options);

// const burgerBtn = document.querySelector('.burger__btn');


const burgerMobileList = document.querySelector('.burger-mobile__list');
const burgerBtnLine1 = document.querySelector('.burger__btn-line--1');
const burgerBtnLine2 = document.querySelector('.burger__btn-line--2');
const burgerBtnLine3 = document.querySelector('.burger__btn-line--3');

function burger(event) {
  if (event.target.closest('.burger__btn')) {
    burgerMobileList.classList.toggle('active');
    burgerBtnLine1.classList.toggle('active');
    burgerBtnLine2.classList.toggle('active');
    burgerBtnLine3.classList.toggle('active');
  }
  if (!event.target.closest('.burger__btn')) {
    burgerMobileList.classList.remove('active');
    burgerBtnLine1.classList.remove('active');
    burgerBtnLine2.classList.remove('active');
    burgerBtnLine3.classList.remove('active');
  }
}

document.addEventListener("click", burger)

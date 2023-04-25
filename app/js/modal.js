
// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body');
const videoPlayer = document.querySelector('.card-body .video-player');
let cardBody = document.querySelector('.card-body')
var delVideoPlayer
function delVideo() {
  delVideoPlayer = videoPlayer.parentNode.removeChild(videoPlayer);
}



// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('hidden');
    if (modal.style !== 'hidden') {
      body.style.overflow = 'hidden';
    }
    modal.querySelector('.modal-window').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
  // Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
})

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
    delVideo()
    if (modal.style = 'hidden') {
      body.style.overflow = 'auto';
    }
  })
  // cardBody.append(delVideoPlayer)
})

// Закрытие модалок по фейду
allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
    const modal = this.closest('[data-modal]');
    delVideo()
    if (modal.style = 'hidden') {
      body.style.overflow = 'auto';
      console.log(delVideoPlayer)
      // cardBody.append('vvvvvvvvvvvvvvvvvv')
      // delVideoPlayer = videoPlayer.parentNode.removeChild(videoPlayer);
      // videoPlayer.parentNode.removeChild(videoPlayer);
    }
  });
  // cardBody.append(delVideoPlayer)
});



// const choiceCityBtn = document.querySelector('.btn-outline-primary');

document.querySelectorAll('.choice').forEach(function (choiceWrapper) {
  const choiceCityList = choiceWrapper.querySelector('.choice-city');
  const choiceCityListItems = choiceCityList.querySelectorAll('.choice-city__item');
  const choiceCityInput = choiceWrapper.querySelector('.choice-city__input');
  const modalButton = document.querySelector('[data-modal-button]');


  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  choiceCityListItems.forEach(function (citylistItem) {
    citylistItem.addEventListener('click', function (e) {
      e.stopPropagation();
      choiceCityInput.value = this.dataset.value;
      const modal = this.closest('[data-modal]');
      modalButton.innerText = this.innerText;
      modal.classList.add('hidden');
      if (modal.style = 'hidden') {
        body.style.overflow = 'auto';
      }
    });
  });

});
  //===========================

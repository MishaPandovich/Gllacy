var body = document.querySelector('body');

function togglePopup(linkOpen, popup, close) {
  linkOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    body.classList.add('overlay');
  });

  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    body.classList.remove('overlay');
  });

  document.addEventListener('keyup', function (evt) {
    if (evt.keyCode === 27) {
      popup.classList.remove('modal-show');
      body.classList.remove('overlay');
    }
  });
}

var feedbackPopupOpen = document.querySelector('.contacts__link');
var feedbackPopup = document.querySelector('.modal-feedback');
var feedbackPopupClose = document.querySelector('.modal-feedback__close');
/*открытие карты*/
togglePopup(feedbackPopupOpen, feedbackPopup, feedbackPopupClose);
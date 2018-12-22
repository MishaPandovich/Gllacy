var linkMouseoverHandler = function(link, popup) {
	link.classList.add('link--active');
	popup.classList.add('modal-show');
}

var linkMouseoutHandler = function(link, popup) {
	link.classList.remove('link--active');
	popup.classList.remove('modal-show');
}

/*кнопка Вход*/
var linkLogin = document.querySelector('.link--login');
var modalLogin = document.querySelector('.modal-login');

/*при наведении на кнопку добавляется класс для появления попапа и стиль для самой кнопки*/
linkLogin.addEventListener('mouseover', function() {
	linkMouseoverHandler(linkLogin, modalLogin);
});

/*при ухода с кнопки убирается стиль кнопки и попап*/
linkLogin.addEventListener('mouseout', function(evt) {
	if (evt.relatedTarget !== modalLogin) {
		linkMouseoutHandler(linkLogin, modalLogin);
	}
});

/*при уходе с попапа убирается стиль кнопки и сам попап*/
modalLogin.addEventListener('mouseleave', function(evt) {
	if (event.relatedTarget !== linkLogin) {
		linkMouseoutHandler(linkLogin, modalLogin);
	}
});


var linkBasketMouseoverHandler = function(popup) {
	popup.classList.add('modal-show');
}

var linkBasketMouseoutHandler = function(popup) {
	popup.classList.remove('modal-show');
}

/*кнопка корзина, когда есть товар*/
var linkBasket = document.querySelector('.link--basket');
var modalBasket = document.querySelector('.modal-basket');

linkBasket.addEventListener('mouseover', function() {
	linkBasketMouseoverHandler(modalBasket);
});

linkBasket.addEventListener('mouseout', function(evt) {
	if (evt.relatedTarget !== modalBasket) {
		linkBasketMouseoutHandler(modalBasket);
	}
});

modalBasket.addEventListener('mouseleave', function(evt) {
	if (event.relatedTarget !== linkBasket) {
		linkBasketMouseoutHandler(modalBasket);
	}
});
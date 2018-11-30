var toggles = $('.slider__toggles');
var $slide = $('.slider__item');
var $background = $('body');

toggles.on('click', 'button', function() {
	/*поиск слайда, который показан на данный момент и удаление у него класса, отвечающего за показ*/
	$('.slider__item--active').removeClass('slider__item--active');
	/*поиск предыдущего активного переключателя и удаление у него класса active*/
	$('.slider__toggle--active').removeClass('slider__toggle--active');
	/*передача стилей активного состояния кнопке на которую нажали*/
	$(this).addClass('slider__toggle--active');

	/*определение индекса нажатого элемента*/
	var $index = $(this).index();
	/*так как каждая кнопка отвечает за показ определенного слайда, то индексы у них одинаковые*/
	$slide.eq($index).addClass('slider__item--active');

	if ($index == 0) {
		$('body').css('background', '#849d8f');
		return;
	}

	if ($index == 1) {
		$('body').css('background', '#8a97a7');
		return;
	}

	if ($index == 2) {
		$('body').css('background', '#9d8b84');
		return;
	}
});
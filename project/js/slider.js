var $toggles = $('.slider__toggles');
var $slide = $('.slider__item');
var $background = $('body');

$toggles.on('click', 'button', function() {
	/*снятие фоновой анимации*/
	$background.removeClass('background-color');
	numberSlide = NUMBER_SLIDES;

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
		$background.css('background', '#849d8f');
		return;
	}
	if ($index == 1) {
		$background.css('background', '#8a97a7');
		return;
	}
	if ($index == 2) {
		$background.css('background', '#9d8b84');
		return;
	}
});

/*анимация*/
var NUMBER_SLIDES = 3;  

var numberSlide = 0;
function slideAnimations() {
	if (numberSlide < NUMBER_SLIDES) {
		animateSlide(numberSlide);
		setTimeout(slideAnimations, 5000);
    numberSlide++;
	} 
    
  if (numberSlide == NUMBER_SLIDES) {
  	numberSlide = 0;
  }
}

var $togglesItem = $('.slider__toggle')
function animateSlide(numberSlide) {
	$('.slider__item--active').removeClass('slider__item--active');
	$slide.eq(numberSlide).addClass('slider__item--active');

	$('.slider__toggle--active').removeClass('slider__toggle--active');
	$togglesItem.eq(numberSlide).addClass('slider__toggle--active');
}

slideAnimations();
var toggles = $('.slider__toggles');
var $slide = $('.slider__item');
var $background = $('body');


/*Делать рефакторинг*/

toggles.on('click', 'button', function() {
	/*снятие фоновой анимации*/
	$('.fon').removeClass('fon');
	i = 3;

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

/*пишем анимацию*/
var i =0;

function animate() {
	if (i < 3) {
		animateSlide(i);
		setTimeout(animate, 5000);
    i++;
	} 
    
  if (i==3) {
  	i = 0;
  }
}

var $toggle = $('.slider__toggle'); 

/*делать потом анимацию плавный переход между мороженным*/
function animateSlide(i) {
	$('.slider__item--active').removeClass('slider__item--active');
	$slide.eq(i).addClass('slider__item--active');

	$('.slider__toggle--active').removeClass('slider__toggle--active');
	$toggle.eq(i).addClass('slider__toggle--active');
}

animate();
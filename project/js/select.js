var select = document.querySelector('.group-sort__select');
var selectPopup = document.querySelector('.group-sort__dropdown-list');

select.addEventListener( 'click' , function() {
	select.classList.toggle('group-sort__select--active');
	selectPopup.classList.toggle('dropdown-list--show');
});


var selectItem = document.querySelectorAll('.group-sort__item');

function toggleSelectItem(link) {
	link.addEventListener('click', function() {
		document.querySelector('.group-sort__item--active').classList.remove('group-sort__item--active');
		
		link.classList.add('group-sort__item--active');
	});
}

for (var i=0; i < selectItem.length; i++) {
  toggleSelectItem(selectItem[i]);
}

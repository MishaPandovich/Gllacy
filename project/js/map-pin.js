ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
    center: [59.939378, 30.329132],
    zoom: 16
}, {
    searchControlProvider: 'yandex#search'
}),

// Создаём макет содержимого.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass (
    '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemarkWithContent = new ymaps.Placemark([59.938631, 30.323055], {
    balloonContent: 'Чтобы посмотреть более подробный маршрут,<br> нажмите ссылку «Как добраться» в левом нижнем углу карты'
    }, 
    {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'img/ice-pin.png',
    // Размеры метки.
    iconImageSize: [218, 142],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-42, -140],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
});

myMap.geoObjects
.add(myPlacemarkWithContent);
});
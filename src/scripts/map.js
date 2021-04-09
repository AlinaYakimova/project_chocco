(function(){

  let myMap;

  const init = () => {
    myMap = new ymaps.Map("map", {
      center: [55.754458, 37.606327],
      zoom: 13,
      controls: []
    });

    const coords = [
      [55.757966, 37.582928],
      [55.754068, 37.615339],
      [55.751192, 37.608134],
      [55.746044, 37.592472]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: "./img/marker.png",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
      myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable("scrollZoom");
  }

  ymaps.ready(init);
})();
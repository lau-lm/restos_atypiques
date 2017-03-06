$(document).ready(function () {
  // init of the style of the map
  let styles = [
    {
      featureType: "all",
      stylers: [
        { saturation: -80 }
      ]
    }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    }, {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  let styledMap = new google.maps.StyledMapType(styles,
    { name: "Styled Map" });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  let mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(46.1270048, 4.1599028),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  let map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  // marker1 Lyon creation
  let marker1 = new google.maps.Marker({
    position: { lat: 45.746404, lng: 4.824766 },
    title: 'Restaurant Atypique Lyon',
  });
  // add marker on the map
  marker1.setMap(map);

  // marker2 La Loupe creation
  let marker2 = new google.maps.Marker({
    position: { lat: 48.4735294, lng: 1.0098665 },
    title: 'Restaurant Atypique La Loupe',
  });
  // add marker on the map
  marker2.setMap(map);

  // marker3 Toulouse creation
  let marker3 = new google.maps.Marker({
    position: { lat: 43.601519, lng: 1.439835 },
    title: 'Restaurant Atypique Toulouse',
  });
  // add marker on the map
  marker3.setMap(map);

  // marker4 Orléans creation
  let marker4 = new google.maps.Marker({
    position: { lat: 47.8938701, lng: 1.8920055 },
    title: 'Restaurant Atypique Orléans',
  });
  // add marker on the map
  marker4.setMap(map);

  // marker5 Bordeaux creation
  let marker5 = new google.maps.Marker({
    position: { lat: 44.8336476, lng: -0.5682131 },
    title: 'Restaurant Atypique Bordeaux',
  });
  // add marker on the map
  marker5.setMap(map);

  // marker6 Fontainebleau creation
  let marker6 = new google.maps.Marker({
    position: { lat: 48.4037414, lng: 2.6921273 },
    title: 'Restaurant Atypique Bordeaux',
  });
  // add marker on the map
  marker6.setMap(map);

  marker1.addListener('click', function () {
    $('#mapText').text('Restaurant de Lyon');
    $('#horaireMapResto').text('Lundi au vendredi :</n>11h30 à 22h');
  });
  marker2.addListener('click', function () {
    $('#mapText').text('Restaurant de La Loupe');

  });
  marker3.addListener('click', function () {
    $('#mapText').text('Restaurant de Toulouse');

  });
  marker4.addListener('click', function () {
    $('#mapText').text('Restaurant de Orléans');

  });
  marker5.addListener('click', function () {
    $('#mapText').text('Restaurant de Bordeaux');

  });
  marker6.addListener('click', function () {
    $('#mapText').text('Restaurant de Fontainebleau');

  });



});



$(document).ready(function () {


  // animate navbar on scroll
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').addClass('scroll');
    } else {
      $('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').removeClass('scroll');
    }
  });




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
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  let map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  let image = {
    url: 'img/logo_map.svg',
  };

  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  // marker1 Lyon creation
  let marker1 = new google.maps.Marker({
    position: { lat: 45.746404, lng: 4.824766 },
    title: 'Restaurant Atypique Lyon',
    icon: image,
  });
  // add marker on the map
  marker1.setMap(map);

  // marker2 La Loupe creation
  let marker2 = new google.maps.Marker({
    position: { lat: 48.4735294, lng: 1.0098665 },
    title: 'Restaurant Atypique La Loupe',
    icon: image,
  });
  // add marker on the map
  marker2.setMap(map);

  // marker3 Toulouse creation
  let marker3 = new google.maps.Marker({
    position: { lat: 43.601519, lng: 1.439835 },
    title: 'Restaurant Atypique Toulouse',
    icon: image,
  });
  // add marker on the map
  marker3.setMap(map);

  // marker4 Orléans creation
  let marker4 = new google.maps.Marker({
    position: { lat: 47.8938701, lng: 1.8920055 },
    title: 'Restaurant Atypique Orléans',
    icon: image,
  });
  // add marker on the map
  marker4.setMap(map);

  // marker5 Bordeaux creation
  let marker5 = new google.maps.Marker({
    position: { lat: 44.8336476, lng: -0.5682131 },
    title: 'Restaurant Atypique Bordeaux',
    icon: image,
  });
  // add marker on the map
  marker5.setMap(map);

  // marker6 Fontainebleau creation
  let marker6 = new google.maps.Marker({
    position: { lat: 48.4037414, lng: 2.6921273 },
    title: 'Restaurant Atypique Fontainebleau',
    icon: image,
  });
  // add marker on the map
  marker6.setMap(map);

  marker1.addListener('click', function () {

    $('#mapText').text('Restaurant de Lyon');
    $('#horaireMapResto').html('Lundi au vendredi :<br/>11h30 à 22h');
    $('#adresseMap').html('17 Rue Delandine<br/>69002 Lyon');
    $('#descriptionMapResto').html('Le restaurant de Lyon est dans une prison ! Quoi de plus atypique que de manger où les condammés devaient purger leur peine');
    $('#pictureMapResto').attr('src', 'img/resto_crypte.jpg');

    $("#demo01").trigger('click');
  });
  marker2.addListener('click', function () {
    $('#mapText').text('Restaurant de La Loupe');
    $('#horaireMapResto').html('Mardi au samedi :<br/>19h30 à 23h');
    $('#adresseMap').html('18 Rue de la gare<br/>28240 La Loupe');
    $('#descriptionMapResto').html('Le restaurant de La Loupe vous plonge sous la mer des Caraïbes pour vous évader le temps d\'un repas');
    $('#pictureMapResto').attr('src', 'img/resto_aquarium.jpg');

    $("#demo01").trigger('click');
  });
  marker3.addListener('click', function () {
    $('#mapText').text('Restaurant de Toulouse');
    $('#horaireMapResto').html('Lundi au vendredi :<br/>11h30 à 22h');
    $('#adresseMap').html('1 Place de la bourse<br/>31000 Toulouse');
    $('#descriptionMapResto').html('Le restaurant de Toulouse vous fera saliver dès votre arrivé avec les meilleurs jambons de la région.');
    $('#pictureMapResto').attr('src', 'img/resto_jambon.jpg');

    $("#demo01").trigger('click');
  });
  marker4.addListener('click', function () {
    $('#mapText').text('Restaurant de Orléans');
    $('#horaireMapResto').html('Lundi au vendredi :<br/>11h30 à 22h');
    $('#adresseMap').html('1 Avenue du champ de Mars<br/>45100 Orléans');
    $('#descriptionMapResto').html('Le restaurant d\'Orléans construit autour d\'un arbre vous rapprochera de la nature.');
    $('#pictureMapResto').attr('src', 'img/resto_arbre.jpg');

    $("#demo01").trigger('click');
  });
  marker5.addListener('click', function () {
    $('#mapText').text('Restaurant de Bordeaux');
    $('#horaireMapResto').html('Lundi au vendredi :<br/>11h30 à 22h');
    $('#adresseMap').html('15 Place Canteloup<br/>33800 Bordeaux');
    $('#descriptionMapResto').html('Le restaurant de Bordeaux sur la falaise donnant sur la Garonne ne vous laissera pas tomber avec ses délicieux poissons.');
    $('#pictureMapResto').attr('src', 'img/resto_falaise.jpg');

    $("#demo01").trigger('click');
  });
  marker6.addListener('click', function () {
    $('#mapText').text('Restaurant de Fontainebleau');
    $('#horaireMapResto').html('Lundi au vendredi :<br/>11h30 à 22h');
    $('#adresseMap').html('35 rue Saint Honoré<br/>77300 Fontainebleau');
    $('#descriptionMapResto').html('Le restaurant de Fontainebleau positionné parfaitement en haut du Pic de Fontainebleau. La vue est magnifique vous ne trouvez pas?');
    $('#pictureMapResto').attr('src', 'img/resto_pic.jpg');

    $("#demo01").trigger('click');
  });

  $("#demo01").animatedModal();


  // animate navbar on scroll
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').addClass('scroll');
    } else {
      $('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').removeClass('scroll');
    }
  });




  // highlitgth li menu on scroll 

  $('.conceptDiv').waypoint(function (direction) {
    if (direction === 'down') {
      $("li:eq(0)").addClass('active');
    }
  }, {
      offset: '50%'
    });




  $('.mapDiv').waypoint(function (direction) {
    if (direction === 'down') {
      $("li:eq(0)").removeClass('active');
      $("li:eq(1)").addClass('active');
    }
  }, {
      offset: '50%'
    });

  $('.avisDiv').waypoint(function (direction) {
    if (direction === 'down') {
      $("li:eq(1)").removeClass('active');
      $("li:eq(2)").addClass('active');
    }
  }, {
      offset: '50%'
    });

  // highlight on scroll up
  $('.conceptDiv').waypoint(function (direction) {
    if (direction === 'up') {
      $("li:eq(0)").removeClass('active');
    }
  }, {
      offset: '100%'
    });


  $('.mapDiv').waypoint(function (direction) {
    if (direction === 'up') {
      $("li:eq(0)").addClass('active');
      $("li:eq(1)").removeClass('active');
    }
  }, {
      offset: '100%'
    });


  $('.avisDiv').waypoint(function (direction) {
    if (direction === 'up') {
      $("li:eq(1)").addClass('active');
      $("li:eq(2)").removeClass('active');
    }
  }, {
      offset: '100%'
    });

});


//formulaire page franchisés




$(document).ready(function () {




	// animate navbar on scroll
	$(window).scroll(function () {
		if ($(document).scrollTop() > 100) {
			$('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').addClass('scroll');
		} else {
			$('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').removeClass('scroll');
		}
	});


	// active menu itemps on scroll

	// si le scroll est supérieur à mon ancre #1, je veux que l'élément #1 ait la class active
	// si le scroll est supérieur à mon ancre #2, je veux que l'élément #2 ait la class active

	$(window).scroll(function () {
		console.log($(document).scrollTop())
	});





	$('#map').googleMap({
		zoom: 6, // Initial zoom level (optional)
		coords: [46.1270048, 4.1599028], // Map center (optional)
		type: 'ROADMAP', // Map type (optional)
	});

	// Marker 1
	$('#map').addMarker({
		coords: [45.746404, 4.824766],
	});

	// Marker 2
	$('#map').addMarker({
		coords: [48.4735294, 1.0098665],
	});

	// Marker 3
	$('#map').addMarker({
		coords: [43.601519, 1.439835],
	});
	// Marker 4
	$('#map').addMarker({
		coords: [47.8938701, 1.8920055],
	});
	// Marker 5
	$('#map').addMarker({
		coords: [44.8336476, -0.5682131],
	});
	// Marker 6
	$('#map').addMarker({
		coords: [48.4037414, 2.6921273],
	});







});

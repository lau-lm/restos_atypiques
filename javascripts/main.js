
$(document).ready(function () {
	$('#map').googleMap({
		zoom: 6, // Initial zoom level (optional)
		coords: [46.1270048, 4.1599028], // Map center (optional)
		type: 'ROADMAP', // Map type (optional)
	});

	// Marker 1
	$('#map').addMarker({
		coords: [45.746404, 4.824766],
		title: 'Restaurant atypique Lyon',
		text: `Toujours plus d'atypique, l'atypique c'est trop bien. Viendez !!`,
	});

	// Marker 2
	$('#map').addMarker({
		coords: [48.4735294, 1.0098665],
		title: 'Restaurant atypique La Loupe',
		text: `Toujours plus d'atypique, l'atypique c'est trop bien. Viendez !!`,
	});

	// Marker 3
	$('#map').addMarker({
		coords: [43.601519, 1.439835],
		title: 'Restaurant atypique Toulouse',
		text: `Toujours plus d'atypique, l'atypique c'est trop bien. Viendez !!`,
	});
	// Marker 4
	$('#map').addMarker({
		coords: [47.8938701, 1.8920055],
		title: 'Restaurant atypique Orléans',
		text: `Toujours plus d'atypique, l'atypique c'est trop bien. Viendez !!`,
	});
	// Marker 5
	$('#map').addMarker({
		coords: [44.8336476, -0.5682131],
		title: 'Restaurant atypique Bordeaux',
		text: `Toujours plus d'atypique, l'atypique c'est trop bien. Viendez !!`,
	});
	// Marker 6
	$('#map').addMarker({
		coords: [48.4037414, 2.6921273],
		title: 'Restaurant atypique Fontainebleau',
		text: `Toujours plus d'atypique, l'atypique c'est trop bien. Viendez !!`,
	});
});

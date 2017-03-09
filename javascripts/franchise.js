$(document).ready(function () {


	// animate navbar on scroll
	$(window).scroll(function () {
		if ($(document).scrollTop() > 100) {
			$('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').addClass('scroll');
		} else {
			$('.navbar, .navbar-default .navbar-brand, .navbar-brand img, .navbar-collapse').removeClass('scroll');
		}
	});



	$("#demo02").animatedModal({
		modalTarget: 'animatedModal2',
	});


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





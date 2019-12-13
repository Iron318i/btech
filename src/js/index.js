import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import dropzone from "dropzone";
import 'owl.carousel';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';
import '@fancyapps/fancybox';
import "chart.js";
var SameHeight = require('same-height');
SameHeight.init('.same-height-md', "screen and (min-width: 768px)");
/*device-tmpl-1*/
SameHeight.init('.device-tmpl-1 .device-title');
SameHeight.init('.device-tmpl-1 .device-img');
SameHeight.init('.device-tmpl-1 .device-link');
SameHeight.init('.header-progress .date');
SameHeight.init('.header-progress .heading');
+function ($) {

    // How you want to be Paid temporary script
    $('.payment').on('click', function () {
	$('.payment-options .payment').removeClass('active');
	$(this).addClass('active');
    });
    $('.video').parent().click(function () {
	if ($(this).children(".video").get(0).paused) {
	    $(this).children(".video").get(0).play();
	    $(this).children(".playpause").fadeOut();
	} else {
	    $(this).children(".video").get(0).pause();
	    $(this).children(".playpause").fadeIn();
	}
    });
    $('.reviews.owl-carousel').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	responsiveClass: true,
	navText: ['<svg class="icon"><use xlink:href="./img/sprite.svg#left-arrow"></use></svg>', '<svg class="icon"><use xlink:href="./img/sprite.svg#right-arrow"></use></svg>'],
	responsive: {
	    0: {
		items: 1,
		nav: false,
		dots: true,
		margin: 5
	    },
	    480: {
		items: 2,
		nav: false,
		dots: true,
		margin: 20
	    },
	    768: {
		items: 3,
		nav: true,
		margin: 10
	    },
	    992: {
		items: 4,
		nav: true,
		margin: 18
	    }
	}
    });
    $('.product-gallery.owl-carousel').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	responsiveClass: true,
	navText: ['<svg class="icon"><use xlink:href="./img/sprite.svg#left-arrow"></use></svg>', '<svg class="icon"><use xlink:href="./img/sprite.svg#right-arrow"></use></svg>'],
	responsive: {
	    0: {
		nav: false,
		dots: true,
		items: 4,
		margin: 5
	    },
	    576: {
		items: 3,
		nav: true,
		margin: 10
	    }
	}
    });
    $('#mobileMenuTogller').on('click', function (evt) {
	evt.preventDefault();
	$('.site-header .main-menu').toggleClass('show');
	$('.site-header .user-menu').toggleClass('show');
    });
    /*All Products menu scripts*/
    $('#brandsNav a[href^="#"]').on("click", function (event) {
	event.preventDefault();
	$("#brandsNav a").removeClass('active');
	$(this).addClass('active');
	var menuID = $(this).attr('href');
	$(".sub-menu-wrp").slideUp();
	$(menuID).slideDown({
	    start: function () {
		$(this).css({
		    display: "flex"
		});
	    }
	});
    });
    $(document).on('click', function (e) {
	var menu_opened = $('#allProductsMenu').hasClass('show');
	if (!$(e.target).closest('#allProductsMenu').length &&
		!$(e.target).is('#allProductsMenu') &&
		menu_opened === true) {
	    $('#allProductsMenu').collapse('toggle');
	}
    });
    function checkHeaderHeight() {
	var headerHeight = $('.site-header').height();
	$("#allProductsMenu").css('top', headerHeight);
    }

    $(document).ready(function () {
	checkHeaderHeight();
	$(window).on('resize', checkHeaderHeight);
    });
    /*malihu-custom-scrollbar-plugin*/
    $(window).on("load", function () {
	$(".scroll-y").mCustomScrollbar({});
    });
    /*Category Page*/
    $('.more-filters-show').on('click', function (event) {
	event.preventDefault();
	$(this).siblings('.more-filter-block').show();
	$(this).remove();
    });
    /*Price slider*/
    var slider = document.getElementById("priceRange");
    if (slider) {
	var output = document.getElementById("priceRangeValue");
	output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function () {
	    output.innerHTML = this.value;
	};
    }

//chartOverview
    if ($("canvas").is("#chartOverview")) {
	var ctx = document.getElementById('chartOverview');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	    // The data for our dataset
	    data: {
		labels: ['Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 04', 'Jul 06', 'Jul 09', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25', 'Jul 26', 'Jul 27', 'Jul 28', 'Jul 29', 'Jul 30', 'Jul 31'],
		datasets: [{
			lineTension: 0,
			borderWidth: 2,
			label: '',
			pointRadius: 6,
			pointBackgroundColor: '#ffffff',
			fill: true,
			borderColor: '#bebebe',
			backgroundColor: 'rgba(65, 64, 66, .17)',
			data: [0, 10, 15, 12, 25, 4, 20, 15, 10, 18, 30, 40, 22, 18, 16, 10, 14, 17, 18, 12, 15, 10, 8, 14, 19, 27, 31, 22, 16, 10, 12, 12]
		    }]
	    },
	    // Configuration options go here
	    options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
		    display: false
		},
		tooltips: {
		    mode: 'index',
		    intersect: false
		},
		hover: {
		    mode: 'index',
		    intersect: false
		}
	    }

	});
    }// if ($("canvas").is("#chartOverview"))
//chartPerformance
    if ($("canvas").is("#chartPerformance")) {
	var ctx = document.getElementById('chartPerformance');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	    // The data for our dataset
	    data: {
		labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
		datasets: [{
			lineTension: 0,
			borderWidth: 2,
			label: '',
			pointRadius: 0,
			fill: true,
			borderColor: '#bebebe',
			backgroundColor: 'rgba(65, 64, 66, .17)',
			data: [40, 30, 48, 40, 60, 80, 60, 40, 20, 45]
		    }]
	    },
	    // Configuration options go here
	    options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
		    display: false
		},
		tooltips: {
		    mode: 'index',
		    intersect: false
		},
		hover: {
		    mode: 'index',
		    intersect: false
		}
	    }

	});
    }//if ($("canvas").is("#chartPerformance"))


}(jQuery);
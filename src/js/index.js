import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import dropzone from "dropzone";
import 'owl.carousel';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';
//import bootstrap-touchspin from "bootstrap-touchspin";

var SameHeight = require('same-height');
SameHeight.init('.same-height-md', "screen and (min-width: 768px)");
/*device-tmpl-1*/
SameHeight.init('.device-tmpl-1 .device-title');
SameHeight.init('.device-tmpl-1 .device-img');
SameHeight.init('.device-tmpl-1 .device-link');

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
	navText: ['<svg class="icon"><use xlink:href="#left-arrow"></use></svg>', '<svg class="icon"><use xlink:href="#right-arrow"></use></svg>'],
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
	$(".scroll-y").mCustomScrollbar({
	    setHeight: 1500
	});
    });

}(jQuery);
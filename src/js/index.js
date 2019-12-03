import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import dropzone from "dropzone";
import 'owl.carousel';
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
}(jQuery);
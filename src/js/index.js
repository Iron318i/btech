import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
//import bootstrap-touchspin from "bootstrap-touchspin";

var SameHeight = require('same-height');
SameHeight.init('.same-height-md', "screen and (min-width: 768px)");

+function ($) {
// How you want to be Paid temporary script
    $('.payment').on('click', function () {
	$('.payment-options .payment').removeClass('active');
	$(this).addClass('active');
    });

}(jQuery);
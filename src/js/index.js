import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

+function ($) {
// How you want to be Paid temporary script
    $('.payment').on('click', function () {
	$('.payment-options .payment').removeClass('active');
	$(this).addClass('active');
    });

}(jQuery);
(function ($) {
    $(function () {

        $(document).ready(function () {
            $('.parallax').parallax();
            $('.dropdown-button').dropdown({
                constrain_width: false,
                belowOrigin: true
            });
            $('.scrollspy').scrollSpy({
                scrollOffset: 0
            });
            $('.carousel').carousel();
            $('.scrollspy').scrollSpy();
            $('.carousel').carousel({

                indicators: true
            });
            $('.slider').slider({
                full_width: true
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
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
            $('.carousel').carousel({
                indicators: true
            });
            $('.slider').slider({
                full_width: true
            });

            var home = parseInt($('#home-range').position().top);
            var events = parseInt($('#events-range').position().top);
            var sigs = parseInt($('#sigs-range').position().top);
            var about = parseInt($('#about-range').position().top);
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                $('.nav-home').removeClass('active');
                $('.nav-events').removeClass('active');
                $('.nav-sigs').removeClass('active');
                $('.nav-about').removeClass('active');
                if (scroll < home) {
                    $('.nav-home').addClass('active');
                } else if (scroll > home && scroll < events) {
                    $('.nav-events').addClass('active');
                } else if (scroll > events && scroll < sigs) {
                    $('.nav-sigs').addClass('active');
                } else if (scroll > sigs) {
                    $('.nav-about').addClass('active');
                }
            });
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
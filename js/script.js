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
            console.log(home);
            console.log(events);
            console.log(sigs);
            console.log(about);
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                console.log(scroll);
                if (scroll < home) {
                    $('.nav-home').addClass('active');
                    $('.nav-events').removeClass('active');
                    $('.nav-sigs').removeClass('active');
                    $('.nav-about').removeClass('active');
                } else if (scroll > home && scroll < events) {
                    $('.nav-home').removeClass('active');
                    $('.nav-events').addClass('active');
                    $('.nav-sigs').removeClass('active');
                    $('.nav-about').removeClass('active');
                } else if (scroll > events && scroll < sigs) {
                    $('.nav-home').removeClass('active');
                    $('.nav-events').removeClass('active');
                    $('.nav-sigs').addClass('active');
                    $('.nav-about').removeClass('active');
                } else if (scroll > sigs) {
                    $('.nav-home').removeClass('active');
                    $('.nav-events').removeClass('active');
                    $('.nav-sigs').removeClass('active');
                    $('.nav-about').addClass('active');
                }
            });
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
(function ($) {

    $(function () {

        $(document).ready(function () {
            $('.parallax').parallax();
            $('.dropdown-button').dropdown({
                constrain_width: false,
                belowOrigin: true,
                alignment: 'right',
                gutter: -18
            });
            $('.scrollspy').scrollSpy({
                scrollOffset: 0
            });
            $('.carousel').carousel();
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

            $('.animated').delay(6000).fadeOut(500);

            $('.box').hover(function () {
                $(this).find('.wave-effect').addClass('ripple');
                $(this).find('.black-img').animate({
                    opacity: '0',
                    height: '130px',
                    width: '130px'
                }, 300);
                $(this).find('.white-img').animate({
                    opacity: '1',
                    height: '130px',
                    width: '130px'
                }, 300);
            }, function () {
                $(this).find('.wave-effect').removeClass('ripple');
                $(this).find('.black-img').animate({
                    opacity: '1',
                    height: '150px',
                    width: '150px'
                }, 700);
                $(this).find('.white-img').animate({
                    opacity: '0',
                    height: '150px',
                    width: '150px'
                }, 700);
            });
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
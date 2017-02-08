/*jshint browser: true*/
/*global $:false, jQuery:false*/
(function ($) {

    "use strict";
    $(function () {

        $(document).ready(function () {

            $('.modal').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%', // Ending top style attribute   
            });


            $('.anime_ctd').delay(6000).fadeOut(500);
            $('.button-collapse').sideNav({
                closeOnClick: true
            });
            $('.parallax').parallax();
            $('.scrollspy').scrollSpy({
                scrollOffset: 0
            });
            $('.carousel').carousel();
            $('.slider').slider({
                full_width: true
            });
            //$('.modal').modal();

            var home = parseInt($('#home-range').position().top, 10),
                events = parseInt($('#events-range').position().top, 10),
                ping = parseInt($('#ping-range').position().top, 10),
                sigs = parseInt($('#sigs-range').position().top, 10),
                about = parseInt($('#about-range').position().top, 10);
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                $('#nav-home').removeClass('active');
                $('#nav-events').removeClass('active');
                $('#nav-ping').removeClass('active');
                $('#nav-sigs').removeClass('active');
                $('#nav-about').removeClass('active');
                if (scroll < home) {
                    $('#nav-home').addClass('active');
                } else if (scroll > home && scroll < events) {
                    $('#nav-events').addClass('active');
                } else if (scroll > events && scroll < ping) {
                    $('#nav-ping').addClass('active');
                } else if (scroll > ping && scroll < sigs) {
                    $('#nav-sigs').addClass('active');
                } else if (scroll > sigs) {
                    $('#nav-about').addClass('active');
                }
            });

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
}(jQuery)); // end of jQuery name space
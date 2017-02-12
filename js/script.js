/*jshint browser: true*/
/*global $:false, jQuery:false*/
(function ($) {

    "use strict";
    $(function () {

        $(document).ready(function () {
            $('body').css('overflow', 'hidden');
            setTimeout(function () {
                $('.spinner').fadeIn(1000);
            }, 3000);
            $(window).on("load", function () {
                setTimeout(function () {
                    $('.spinner').fadeOut(1000, function () {
                        $('.anime_ctd').animate({
                            opacity: '0',
                            width: '50%'
                        }, 2000, function () {
                            $('body').css('overflow', 'initial');
                            this.remove();
                        });
                        $('#page').animate({
                            opacity: '1'
                        }, 2000);
                    });
                }, 5000);
            });
            $('.parallax').parallax();
            $('.modal').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: 0.5, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%' // Ending top style attribute   
            });
            $('.button-collapse').sideNav({
                closeOnClick: true
            });

            /*$('.scrollspy').scrollSpy({
                scrollOffset: 0
            });*/
            //$('.carousel').carousel();
            $('.slider').slider({
                full_width: true
            });
            //$('.modal').modal();

            /*var home = parseInt($('#home-range').position().top, 10),
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
            });*/

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

            $.scrollify({
                section: ".scrollify",
                sectionName: "section-name",
                interstitialSection: ".footer",
                easing: "easeOutExpo",
                scrollSpeed: 1000,
                offset: 0,
                scrollbars: true,
                standardScrollElements: ".card-content, .modal-content",
                setHeights: false,
                overflowScroll: true,
                updateHash: true,
                touchScroll: true,
                before: function () {},
                after: function () {},
                afterResize: function () {},
                afterRender: function () {}
            });

            $('#nav-home').on("click", function () {
                $.scrollify.move("#home");
            });
            $('#nav-events').on("click", function () {
                $.scrollify.move("#events");
            });
            $('#nav-ping').on("click", function () {
                $.scrollify.move("#ping");
            });
            $('#nav-sigs').on("click", function () {
                $.scrollify.move("#sigs");
            });
            $('#nav-about').on("click", function () {
                $.scrollify.move("#about");
            });

        });
    }); // end of document ready
}(jQuery)); // end of jQuery name space
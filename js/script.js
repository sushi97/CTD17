/*jshint browser: true*/
/*global $:false, jQuery:false*/
(function ($) {

    "use strict";
    $(function () {

        $(document).ready(function () {
            $('.c').addClass('fadeInRight1');
            $('.t').addClass('fadeInDown1');
            $('.d').addClass('fadeInLeft1');
            $('.welcome2, .welcome3').addClass('fadeInUp1');
            $('.spinner').animate({
                top: '72%'
            }, 1000, "easeOutCubic");
            $('body').css('overflow', 'hidden');
            $(window).on("load", function () {
                setTimeout(function () {
                    $('.spinner').fadeOut(1000, function () {
                        $('.anime_ctd').animate({
                            opacity: '0',
                            width: '75%'
                        }, 1000, function () {
                            $('body').css('overflow', 'auto');
                            this.remove();
                        });
                        $('#page').animate({
                            opacity: '1'
                        }, 2000);
                    });
                    $('body').scrollTop(0);
                }, 4000);
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

            $('.scrollspy').scrollSpy({
                scrollOffset: 0
            });
            $('.slider').slider({
                full_width: true
            });

            var home = parseInt($('#home-range').position().top, 10),
                events = parseInt($('#events-range').position().top, 10),
                ping = parseInt($('#ping-range').position().top, 10),
                sigs = parseInt($('#sigs-range').position().top, 10),
                about = parseInt($('#about-range').position().top, 10),
                lastsec = "home";
            $(window).on("scroll", function () {
                var scroll = $(window).scrollTop(),
                    currsection = "";
                if (scroll < home) {
                    currsection = "home";

                } else if (scroll > home && scroll < events) {
                    currsection = "events";

                } else if (scroll > events && scroll < ping) {
                    currsection = "ping";

                } else if (scroll > ping && scroll < sigs) {
                    currsection = "sigs";

                } else if (scroll > sigs) {
                    currsection = "about";
                }
                if (lastsec !== currsection) {
                    $('#nav-' + lastsec).removeClass('active');
                    $('#nav-' + currsection).addClass('active');
                    if (currsection === "home") {
                        $('#nav-but').removeClass('animated fadeInLeft');
                        $('#nav-but').addClass('animated fadeOutLeft');
                    } else {
                        $('#nav-but').removeClass('animated fadeOutLeft');
                        $('#nav-but').addClass('animated fadeInLeft');
                    }
                    lastsec = currsection;
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

            $('#events-range .card').css('opacity', '0');
            $('#events-sec h2').css('opacity', '0');
            $('#ping-sec h2').css('opacity', '0');
            $('#sigs-sec h2').css('opacity', '0');
            $('#sigs-range .card').css('opacity', '0');
            $('#sigs-range .slider').css('opacity', '0');
            $('#ping-range .section').css('opacity', '0');
            var options = [
                {
                    selector: '#events-range',
                    offset: 400,
                    callback: function () {
                        $('#events-range .card').addClass("animated bounceIn");
                        $('#events-range .card').css('opacity', '1');
                    }
                            },
                {
                    selector: '#events-sec',
                    offset: 300,
                    callback: function () {
                        $('#events-sec h2').addClass("animated fadeInUp");
                    }
                            },
                {
                    selector: '#ping-sec',
                    offset: 300,
                    callback: function () {
                        $('#ping-sec h2').addClass("animated fadeInUp");
                    }
                            },
                {
                    selector: '#ping-range',
                    offset: 300,
                    callback: function () {
                        $('#ping-range .section').addClass("animated fadeIn");
                    }
                            },
                {
                    selector: '#sigs-sec',
                    offset: 300,
                    callback: function () {
                        $('#sigs-sec h2').addClass("animated fadeInUp");
                    }
                            },
                {
                    selector: '#sigs-range',
                    offset: 300,
                    callback: function () {
                        $('#sigs-range .card').addClass("animated bounceIn");
                        $('#sigs-range .card').css('opacity', '1');
                        $('#sigs-range .slider').addClass("animated bounceIn");
                        $('#sigs-range .slider').css('opacity', '1');
                    }
                            }
                        ];
            Materialize.scrollFire(options);
        });
    }); // end of document ready
}(jQuery)); // end of jQuery name space
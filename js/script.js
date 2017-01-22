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
<<<<<<< HEAD
            $('.carousel').carousel();

=======
            $('.scrollspy').scrollSpy();
            $('.carousel').carousel({
                
                indicators:true    
            });
            
             $('.slider').slider({full_width: true});
            
          
           
>>>>>>> origin/Carousel
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
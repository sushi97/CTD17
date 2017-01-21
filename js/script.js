(function ($) {
    $(function () {

        $(document).ready(function () {
            $('.parallax').parallax();
            $('.dropdown-button').dropdown({
                constrain_width: false,
                belowOrigin: true,
            });
            $('.scrollspy').scrollSpy();
            $('.carousel').carousel({
                
                indicators:true
            });
          
           
        });

    }); // end of document ready
    $('.dropdown-button').dropdown();
})(jQuery); // end of jQuery name space
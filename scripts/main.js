;(function($){
    $(function (){
        // Toggle mobile-menu
        $('header label').on('click', function () {
            $('nav').toggleClass('nav__list');
        });
        //Hide toggle-menu
        $('nav a').on('click', function (){
            $('nav').toggleClass('nav__list');
            $('#hamburger').prop('checked', false);
        });
        //
        // Slick-slider
        $('.cameras__slider').slick({
            // autoplay:true,
            // autoplaySpeed: 5000,
            arrows:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1800,
                settings: {
                    arrows: false,
                    dots: true
                }
                },{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }

            }]
        });
        $('.lens__slider').slick({
            // autoplay:true,
            // autoplaySpeed: 5000,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: false,
                    dots: true
                }
            }]
        });
        //
        //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            let fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
        //
    });
})(jQuery);


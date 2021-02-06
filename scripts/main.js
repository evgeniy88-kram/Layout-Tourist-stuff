;(function($){
    $(function (){
        // Toggle mobile-menu
        $('header label').on('click', function () {
            $('nav').toggleClass('nav-list');
        });
        //Hide toggle-menu
        $('nav a').on('click', function (){
            $('nav').toggleClass('nav-list');
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
        //Close modal by html click
        $('html').mouseup(function (e) {
            let container = $(".modal-basket");
            if (container.has(e.target).length === 0){
                container.hide();
                $('.dark-background').hide();
            }
        });
        //
        //Modal bag
        let modalBasket = $('.modal-basket, .dark-background');
        $('.header__logo + svg').on('click', function () {
            modalBasket.show();
        });
        $('.modal-basket__close').on('click', function () {
            modalBasket.hide();
        })
        //
        //Button buy
        let numbClicks = 0,
            basketMark = $('.header__basket-mark');
        $('span + svg').on('click', function(){
            basketMark.text(`${numbClicks += 1}`).css({'display':'flex'});
            if (numbClicks >= 10) {
                basketMark.text(`9+`);
            }
        });
        //
    //    Adding to bag
        let basketContain = [],
            bagsInfo = [
                {name: 'American Tourister Crete Polyester 770 mm Blue', quantity: 0, price: 45.00},
                {name: 'American Tourister Crete Polyester 680 mm Black', quantity: 0, price: 57.00},
                {name: 'Nasher Miles Manarola Soft-Sided Luggage Set', quantity: 0, price: 60.00},
                {name: 'Nasher Miles Santorini PP Hard-Sided Luggage Set', quantity: 0, price: 67.00},
                {name: 'Nasher Miles Santorini PP Hard-Sided Check-In Luggage Bag', quantity: 0, price: 73.00},
                {name: 'American Tourister X-Bags Casual 2 Fabric', quantity: 0, price: 79.00}
            ],
            campsInfo = [
                {name: 'camp1', qua: 1, price: 45.00},
                {name: 'camp', qua: 1, price: 57.00},
                {name: 'camp2', qua: 1, price: 60.00},
            ],
            camerasInfo = [],
            lensInfo = []





        $('.bags__grid__item:nth-child(1) svg').on('click', function(){
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li').text(`${bagsInfo[0].name}`)
        });
    });
})(jQuery);


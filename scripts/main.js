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
            slidesToShow: 2,
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
        //Modal basket
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
            basketMark = $('.header__basket-mark'),
            basketEmptyCont = $('.modal-basket__content svg, .modal-basket__content h3');
        $('span + svg').one('click', function(){
            basketEmptyCont.hide();
            basketMark.text(`${numbClicks += 1}`).css({'display':'flex'});
            if (numbClicks >= 10) {
                basketMark.text(`9+`);
            }
        });
        //
    //    Adding to bag
        let baskCont = [],
            bagsInfo = [
                {name: 'American Tourister Crete Polyester 770 mm Blue', price: 45.00},
                {name: 'American Tourister Crete Polyester 680 mm Black', price: 57.00},
                {name: 'Nasher Miles Manarola Soft-Sided Luggage Set', price: 60.00},
                {name: 'Nasher Miles Santorini PP Hard-Sided Luggage Set', price: 67.00},
                {name: 'Nasher Miles Santorini PP Hard-Sided Check-In Luggage Bag', price: 73.00},
                {name: 'American Tourister X-Bags Casual 2 Fabric', price: 79.00}
            ],
            campsInfo = [
                {name: 'camp1', price: 45.00},
                {name: 'camp', price: 57.00},
                {name: 'camp2', price: 60.00},
            ],
            camerasInfo = [],
            lensInfo = []

        $('.bags__grid__item:nth-child(1) svg').one('click', function(){
            baskCont.push(bagsInfo[0]);
        });
        $('.bags__grid__item:nth-child(2) svg').one('click', function(){
            baskCont.push(bagsInfo[1]);
        });
        $('.bags__grid__item:nth-child(3) svg').one('click', function(){
            baskCont.push(bagsInfo[2]);
        });
        $('.bags__grid__item:nth-child(4) svg').one('click', function(){
            baskCont.push(bagsInfo[3]);
        });
        $('.bags__grid__item:nth-child(5) svg').one('click', function(){
            baskCont.push(bagsInfo[4]);
        });
        $('.bags__grid__item:nth-child(6) svg').one('click', function(){
            baskCont.push(bagsInfo[5]);
        });
        $('.header__logo + svg').on('click', function(){
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li')
                .text(`${baskCont[0].name} - ${baskCont[0].quantity} шт. - ${baskCont[0].quantity * baskCont[0].price} $`);
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li')
                .text(`${baskCont[1].name} - ${baskCont[1].quantity} шт. - ${baskCont[1].quantity * baskCont[1].price} $`);                ;
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li')
                .text(`${baskCont[2].name} - ${baskCont[2].quantity} шт. - ${baskCont[2].quantity * baskCont[2].price} $`);
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li')
                .text(`${baskCont[3].name} - ${baskCont[3].quantity} шт. - ${baskCont[3].quantity * baskCont[3].price} $`);
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li')
                .text(`${baskCont[4].name} - ${baskCont[4].quantity} шт. - ${baskCont[4].quantity * baskCont[4].price} $`);
            $('.modal-basket ol').append('<li></li>');
            $('.modal-basket ol li')
                .text(`${baskCont[5].name} - ${baskCont[5].quantity} шт. - ${baskCont[5].quantity * baskCont[5].price} $`);
        });
    });
})(jQuery);


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
        let btnOpenModal = $('.header__logo + svg');
        btnOpenModal.on('click', function () {
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
        //Adding to bag
        let baskCont = [],
            bagsInfo = [
                {name: 'American Tourister Crete Polyester 770 mm Blue', price: 45.00, quantity: 1},
                {name: 'American Tourister Crete Polyester 680 mm Black', price: 57.00, quantity: 1},
                {name: 'Nasher Miles Manarola Soft-Sided Luggage Set', price: 60.00, quantity: 1},
                {name: 'Nasher Miles Santorini PP Hard-Sided Luggage Set', price: 67.00, quantity: 1},
                {name: 'Nasher Miles Santorini PP Hard-Sided Check-In Luggage Bag', price: 73.00, quantity: 1},
                {name: 'American Tourister X-Bags Casual 2 Fabric', price: 79.00, quantity: 1}
            ]
            // campsInfo = [
            //     {name: 'Diswa Quick Setup 4-Person All Season', price: 67.00, quantity: 1},
            //     {name: 'Dealcrox New 2 Person Tent', price: 67.00, quantity: 1},
            //     {name: 'Ozoy Picnic Camping Portable Waterproof Tent', price: 67.00, quantity: 1}
            // ],
            // camerasInfo = [
            //     {name: 'Basics 60-Inch Lightweight Tripod with Bag (Black)', price: 212.00, quantity: 1},
            //     {name: 'Photron Tripod Stedy 450 with 4.5 Feet Pan Head', price: 240.00, quantity: 1},
            //     {name: 'SONY G7 Mirrorless Camera with LUMIX G VARIO 14-42mm - Black', price: 450.00, quantity: 1}
            // ],
            // lensInfo = [
            //     {name: 'Tamron A17E AF 70-300mm F/4-5.6 Di LD Macro Telephoto Zoom Lens (Black)', price: 221.00, quantity: 1},
            //     {name: 'Nikon AF 70-300mm f/4-5.6G Telephoto Zoom Lens', price: 327.00, quantity: 1},
            //     {name: 'Yongnuo_ EF YN 50mm F/1.8 1:1.8 Standard Prime Lens', price: 450.00, quantity: 1}
            //     ];

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
        btnOpenModal.one('click', function(){
            for (i = 1; i < 7; i++) {
                $('.modal-basket__content section').append('<div></div>');
            }
            $('.modal-basket__content section div:nth-child(1)').text(`${baskCont[0].name}`);
            $('.modal-basket__content section div:nth-child(2)').text(`${baskCont[0].price} $`);
            $('.modal-basket__content section div:nth-child(3)').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content div:nth-child(4)').text(`${baskCont[0].quantity} шт`);
            $('.modal-basket__content div:nth-child(5)').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content div:nth-child(6)').text(`${baskCont[0].quantity * baskCont[0].price} $`);
        });
        $('.modal-basket__content section div:nth-child(3)').on('click', function (){
            if (baskCont[0].quantity > 1) {
                baskCont[0].quantity -= 1;
            }
        });
        $('.modal-basket__content section div:nth-child(5)').on('click', function (){
                baskCont[0].quantity++;
            $('.modal-basket__content div:nth-child(4)').text(`${baskCont[0].quantity} шт`);
            console.log(baskCont[0].quantity);
        });

    });
})(jQuery);


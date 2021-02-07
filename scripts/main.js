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
        let bagsInfo = [
                {name: 'American Tourister Crete Polyester 770 mm Blue', price: 45.00, quantity: 1},
                {name: 'American Tourister Crete Polyester 680 mm Black', price: 57.00, quantity: 1},
                {name: 'Nasher Miles Manarola Soft-Sided Luggage Set', price: 60.00, quantity: 1},
                {name: 'Nasher Miles Santorini Luggage Set', price: 67.00, quantity: 1},
                {name: 'Nasher Miles Santorini Check-In Luggage Bag', price: 73.00, quantity: 1},
                {name: 'American Tourister X-Bags Casual 2 Fabric', price: 79.00, quantity: 1}
            ],
            campsInfo = [
                {name: 'Diswa Quick Setup 4-Person All Season', price: 67.00, quantity: 1},
                {name: 'Dealcrox New 2 Person Tent', price: 67.00, quantity: 1},
                {name: 'Ozoy Picnic Camping Portable Waterproof Tent', price: 67.00, quantity: 1}
            ],
            camerasInfo = [
                {name: 'Basics 60-Inch Lightweight Tripod with Bag (Black)', price: 212.00, quantity: 1},
                {name: 'Photron Tripod Stedy 450 with 4.5 Feet Pan Head', price: 240.00, quantity: 1},
                {name: 'SONY G7 Mirrorless Camera with LUMIX G VARIO 14-42mm - Black', price: 450.00, quantity: 1}
            ],
            lensInfo = [
                {name: 'Tamron A17E AF 70-300mm F/4-5.6 Di LD Macro Telephoto Zoom Lens (Black)', price: 221.00, quantity: 1},
                {name: 'Nikon AF 70-300mm f/4-5.6G Telephoto Zoom Lens', price: 327.00, quantity: 1},
                {name: 'Yongnuo_ EF YN 50mm F/1.8 1:1.8 Standard Prime Lens', price: 450.00, quantity: 1}
            ];

        let basketContent = $('.modal-basket__content section');
        $(`.bags__grid__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="bag1-1"></div>');
            basketContent.append('<div id="bag1-2"></div>');
            basketContent.append('<div id="bag1-3"></div>');
            basketContent.append('<div id="bag1-4"></div>');
            basketContent.append('<div id="bag1-5"></div>');
            basketContent.append('<div id="bag1-6"></div>');
            $('.modal-basket__content section #bag1-1').text(`${bagsInfo[0].name}`);
            $('.modal-basket__content section #bag1-2').text(`${bagsInfo[0].price} $`);
            $('.modal-basket__content section #bag1-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #bag1-4').text(`${bagsInfo[0].quantity} шт`);
            $('.modal-basket__content section #bag1-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #bag1-6').text(`${bagsInfo[0].quantity * bagsInfo[0].price} $`);
        });
        $(`.bags__grid__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="bag2-1"></div>');
            basketContent.append('<div id="bag2-2"></div>');
            basketContent.append('<div id="bag2-3"></div>');
            basketContent.append('<div id="bag2-4"></div>');
            basketContent.append('<div id="bag2-5"></div>');
            basketContent.append('<div id="bag2-6"></div>');
            $('.modal-basket__content section #bag2-1').text(`${bagsInfo[1].name}`);
            $('.modal-basket__content section #bag2-2').text(`${bagsInfo[1].price} $`);
            $('.modal-basket__content section #bag2-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #bag2-4').text(`${bagsInfo[1].quantity} шт`);
            $('.modal-basket__content section #bag2-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #bag2-6').text(`${bagsInfo[1].quantity * bagsInfo[1].price} $`);
        });
        $(`.bags__grid__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="bag3-1"></div>');
            basketContent.append('<div id="bag3-2"></div>');
            basketContent.append('<div id="bag3-3"></div>');
            basketContent.append('<div id="bag3-4"></div>');
            basketContent.append('<div id="bag3-5"></div>');
            basketContent.append('<div id="bag3-6"></div>');
            $('.modal-basket__content section #bag3-1').text(`${bagsInfo[2].name}`);
            $('.modal-basket__content section #bag3-2').text(`${bagsInfo[2].price} $`);
            $('.modal-basket__content section #bag3-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #bag3-4').text(`${bagsInfo[2].quantity} шт`);
            $('.modal-basket__content section #bag3-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #bag3-6').text(`${bagsInfo[2].quantity * bagsInfo[2].price} $`);
        });
        $(`.bags__grid__item:nth-child(4) svg`).one('click', function(){
            basketContent.append('<div id="bag4-1"></div>');
            basketContent.append('<div id="bag4-2"></div>');
            basketContent.append('<div id="bag4-3"></div>');
            basketContent.append('<div id="bag4-4"></div>');
            basketContent.append('<div id="bag4-5"></div>');
            basketContent.append('<div id="bag4-6"></div>');
            $('.modal-basket__content section #bag4-1').text(`${bagsInfo[3].name}`);
            $('.modal-basket__content section #bag4-2').text(`${bagsInfo[3].price} $`);
            $('.modal-basket__content section #bag4-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #bag4-4').text(`${bagsInfo[3].quantity} шт`);
            $('.modal-basket__content section #bag4-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #bag4-6').text(`${bagsInfo[3].quantity * bagsInfo[3].price} $`);
        });
        $(`.bags__grid__item:nth-child(5) svg`).one('click', function(){
            basketContent.append('<div id="bag5-1"></div>');
            basketContent.append('<div id="bag5-2"></div>');
            basketContent.append('<div id="bag5-3"></div>');
            basketContent.append('<div id="bag5-4"></div>');
            basketContent.append('<div id="bag5-5"></div>');
            basketContent.append('<div id="bag5-6"></div>');
            $('.modal-basket__content section #bag5-1').text(`${bagsInfo[4].name}`);
            $('.modal-basket__content section #bag5-2').text(`${bagsInfo[4].price} $`);
            $('.modal-basket__content section #bag5-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #bag5-4').text(`${bagsInfo[4].quantity} шт`);
            $('.modal-basket__content section #bag5-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #bag5-6').text(`${bagsInfo[4].quantity * bagsInfo[4].price} $`);
        });
        $(`.bags__grid__item:nth-child(6) svg`).one('click', function(){
            basketContent.append('<div id="bag6-1"></div>');
            basketContent.append('<div id="bag6-2"></div>');
            basketContent.append('<div id="bag6-3"></div>');
            basketContent.append('<div id="bag6-4"></div>');
            basketContent.append('<div id="bag6-5"></div>');
            basketContent.append('<div id="bag6-6"></div>');
            $('.modal-basket__content section #bag6-1').text(`${bagsInfo[5].name}`);
            $('.modal-basket__content section #bag6-2').text(`${bagsInfo[5].price} $`);
            $('.modal-basket__content section #bag6-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #bag6-4').text(`${bagsInfo[5].quantity} шт`);
            $('.modal-basket__content section #bag6-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #bag6-6').text(`${bagsInfo[5].quantity * bagsInfo[5].price} $`);
        });
        $(`.camps__grid__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="camp1-1"></div>');
            basketContent.append('<div id="camp1-2"></div>');
            basketContent.append('<div id="camp1-3"></div>');
            basketContent.append('<div id="camp1-4"></div>');
            basketContent.append('<div id="camp1-5"></div>');
            basketContent.append('<div id="camp1-6"></div>');
            $('.modal-basket__content section #camp1-1').text(`${campsInfo[0].name}`);
            $('.modal-basket__content section #camp1-2').text(`${campsInfo[0].price} $`);
            $('.modal-basket__content section #camp1-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #camp1-4').text(`${campsInfo[0].quantity} шт`);
            $('.modal-basket__content section #camp1-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #camp1-6').text(`${campsInfo[0].quantity * campsInfo[0].price} $`);
        });
        $(`.camps__grid__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="camp2-1"></div>');
            basketContent.append('<div id="camp2-2"></div>');
            basketContent.append('<div id="camp2-3"></div>');
            basketContent.append('<div id="camp2-4"></div>');
            basketContent.append('<div id="camp2-5"></div>');
            basketContent.append('<div id="camp2-6"></div>');
            $('.modal-basket__content section #camp2-1').text(`${campsInfo[1].name}`);
            $('.modal-basket__content section #camp2-2').text(`${campsInfo[1].price} $`);
            $('.modal-basket__content section #camp2-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #camp2-4').text(`${campsInfo[1].quantity} шт`);
            $('.modal-basket__content section #camp2-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #camp2-6').text(`${campsInfo[1].quantity * campsInfo[1].price} $`);
        });
        $(`.camps__grid__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="camp3-1"></div>');
            basketContent.append('<div id="camp3-2"></div>');
            basketContent.append('<div id="camp3-3"></div>');
            basketContent.append('<div id="camp3-4"></div>');
            basketContent.append('<div id="camp3-5"></div>');
            basketContent.append('<div id="camp3-6"></div>');
            $('.modal-basket__content section #camp3-1').text(`${campsInfo[2].name}`);
            $('.modal-basket__content section #camp3-2').text(`${campsInfo[2].price} $`);
            $('.modal-basket__content section #camp3-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #camp3-4').text(`${campsInfo[2].quantity} шт`);
            $('.modal-basket__content section #camp3-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #camp3-6').text(`${campsInfo[2].quantity * campsInfo[2].price} $`);
        });
        $(`.cameras__slider__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="cameras1-1"></div>');
            basketContent.append('<div id="cameras1-2"></div>');
            basketContent.append('<div id="cameras1-3"></div>');
            basketContent.append('<div id="cameras1-4"></div>');
            basketContent.append('<div id="cameras1-5"></div>');
            basketContent.append('<div id="cameras1-6"></div>');
            $('.modal-basket__content section #cameras1-1').text(`${camerasInfo[0].name}`);
            $('.modal-basket__content section #cameras1-2').text(`${camerasInfo[0].price} $`);
            $('.modal-basket__content section #cameras1-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #cameras1-4').text(`${camerasInfo[0].quantity} шт`);
            $('.modal-basket__content section #cameras1-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #cameras1-6').text(`${camerasInfo[0].quantity * camerasInfo[0].price} $`);
        });
        $(`.cameras__slider__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="cameras2-1"></div>');
            basketContent.append('<div id="cameras2-2"></div>');
            basketContent.append('<div id="cameras2-3"></div>');
            basketContent.append('<div id="cameras2-4"></div>');
            basketContent.append('<div id="cameras2-5"></div>');
            basketContent.append('<div id="cameras2-6"></div>');
            $('.modal-basket__content section #cameras2-1').text(`${camerasInfo[1].name}`);
            $('.modal-basket__content section #cameras2-2').text(`${camerasInfo[1].price} $`);
            $('.modal-basket__content section #cameras2-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #cameras2-4').text(`${camerasInfo[1].quantity} шт`);
            $('.modal-basket__content section #cameras2-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #cameras2-6').text(`${camerasInfo[1].quantity * camerasInfo[1].price} $`);
        });
        $(`.cameras__slider__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="cameras3-1"></div>');
            basketContent.append('<div id="cameras3-2"></div>');
            basketContent.append('<div id="cameras3-3"></div>');
            basketContent.append('<div id="cameras3-4"></div>');
            basketContent.append('<div id="cameras3-5"></div>');
            basketContent.append('<div id="cameras3-6"></div>');
            $('.modal-basket__content section #cameras3-1').text(`${camerasInfo[2].name}`);
            $('.modal-basket__content section #cameras3-2').text(`${camerasInfo[2].price} $`);
            $('.modal-basket__content section #cameras3-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #cameras3-4').text(`${camerasInfo[2].quantity} шт`);
            $('.modal-basket__content section #cameras3-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #cameras3-6').text(`${camerasInfo[2].quantity * camerasInfo[2].price} $`);
        });
        $(`.lens__slider__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="lens1-1"></div>');
            basketContent.append('<div id="lens1-2"></div>');
            basketContent.append('<div id="lens1-3"></div>');
            basketContent.append('<div id="lens1-4"></div>');
            basketContent.append('<div id="lens1-5"></div>');
            basketContent.append('<div id="lens1-6"></div>');
            $('.modal-basket__content section #lens1-1').text(`${lensInfo[0].name}`);
            $('.modal-basket__content section #lens1-2').text(`${lensInfo[0].price} $`);
            $('.modal-basket__content section #lens1-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #lens1-4').text(`${lensInfo[0].quantity} шт`);
            $('.modal-basket__content section #lens1-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #lens1-6').text(`${lensInfo[0].quantity * lensInfo[0].price} $`);
        });
        $(`.lens__slider__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="lens2-1"></div>');
            basketContent.append('<div id="lens2-2"></div>');
            basketContent.append('<div id="lens2-3"></div>');
            basketContent.append('<div id="lens2-4"></div>');
            basketContent.append('<div id="lens2-5"></div>');
            basketContent.append('<div id="lens2-6"></div>');
            $('.modal-basket__content section #lens2-1').text(`${lensInfo[1].name}`);
            $('.modal-basket__content section #lens2-2').text(`${lensInfo[1].price} $`);
            $('.modal-basket__content section #lens2-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #lens2-4').text(`${lensInfo[1].quantity} шт`);
            $('.modal-basket__content section #lens2-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #lens2-6').text(`${lensInfo[1].quantity * lensInfo[1].price} $`);
        });
        $(`.lens__slider__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="lens3-1"></div>');
            basketContent.append('<div id="lens3-2"></div>');
            basketContent.append('<div id="lens3-3"></div>');
            basketContent.append('<div id="lens3-4"></div>');
            basketContent.append('<div id="lens3-5"></div>');
            basketContent.append('<div id="lens3-6"></div>');
            $('.modal-basket__content section #lens3-1').text(`${lensInfo[2].name}`);
            $('.modal-basket__content section #lens3-2').text(`${lensInfo[2].price} $`);
            $('.modal-basket__content section #lens3-3').css('background', '#3ACDD5').text(`-`);
            $('.modal-basket__content section #lens3-4').text(`${lensInfo[2].quantity} шт`);
            $('.modal-basket__content section #lens3-5').css('background', '#3ACDD5').text(`+`);
            $('.modal-basket__content section #lens3-6').text(`${lensInfo[2].quantity * lensInfo[2].price} $`);
        });



    });
})(jQuery);

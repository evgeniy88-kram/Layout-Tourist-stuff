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
            $('#bag1-1').text(`${bagsInfo[0].name}`);
            $('#bag1-2').text(`${bagsInfo[0].price} $`);
            $('#bag1-3').css('background', '#3ACDD5').text(`-`);
            $('#bag1-4').text(`${bagsInfo[0].quantity} шт`);
            $('#bag1-5').css('background', '#3ACDD5').text(`+`);
            $('#bag1-6').text(`${bagsInfo[0].quantity * bagsInfo[0].price} $`);
        });
        $(`.bags__grid__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="bag2-1"></div>');
            basketContent.append('<div id="bag2-2"></div>');
            basketContent.append('<div id="bag2-3"></div>');
            basketContent.append('<div id="bag2-4"></div>');
            basketContent.append('<div id="bag2-5"></div>');
            basketContent.append('<div id="bag2-6"></div>');
            $('#bag2-1').text(`${bagsInfo[1].name}`);
            $('#bag2-2').text(`${bagsInfo[1].price} $`);
            $('#bag2-3').css('background', '#3ACDD5').text(`-`);
            $('#bag2-4').text(`${bagsInfo[1].quantity} шт`);
            $('#bag2-5').css('background', '#3ACDD5').text(`+`);
            $('#bag2-6').text(`${bagsInfo[1].quantity * bagsInfo[1].price} $`);
        });
        $(`.bags__grid__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="bag3-1"></div>');
            basketContent.append('<div id="bag3-2"></div>');
            basketContent.append('<div id="bag3-3"></div>');
            basketContent.append('<div id="bag3-4"></div>');
            basketContent.append('<div id="bag3-5"></div>');
            basketContent.append('<div id="bag3-6"></div>');
            $('#bag3-1').text(`${bagsInfo[2].name}`);
            $('#bag3-2').text(`${bagsInfo[2].price} $`);
            $('#bag3-3').css('background', '#3ACDD5').text(`-`);
            $('#bag3-4').text(`${bagsInfo[2].quantity} шт`);
            $('#bag3-5').css('background', '#3ACDD5').text(`+`);
            $('#bag3-6').text(`${bagsInfo[2].quantity * bagsInfo[2].price} $`);
        });
        $(`.bags__grid__item:nth-child(4) svg`).one('click', function(){
            basketContent.append('<div id="bag4-1"></div>');
            basketContent.append('<div id="bag4-2"></div>');
            basketContent.append('<div id="bag4-3"></div>');
            basketContent.append('<div id="bag4-4"></div>');
            basketContent.append('<div id="bag4-5"></div>');
            basketContent.append('<div id="bag4-6"></div>');
            $('#bag4-1').text(`${bagsInfo[3].name}`);
            $('#bag4-2').text(`${bagsInfo[3].price} $`);
            $('#bag4-3').css('background', '#3ACDD5').text(`-`);
            $('#bag4-4').text(`${bagsInfo[3].quantity} шт`);
            $('#bag4-5').css('background', '#3ACDD5').text(`+`);
            $('#bag4-6').text(`${bagsInfo[3].quantity * bagsInfo[3].price} $`);
        });
        $(`.bags__grid__item:nth-child(5) svg`).one('click', function(){
            basketContent.append('<div id="bag5-1"></div>');
            basketContent.append('<div id="bag5-2"></div>');
            basketContent.append('<div id="bag5-3"></div>');
            basketContent.append('<div id="bag5-4"></div>');
            basketContent.append('<div id="bag5-5"></div>');
            basketContent.append('<div id="bag5-6"></div>');
            $('#bag5-1').text(`${bagsInfo[4].name}`);
            $('#bag5-2').text(`${bagsInfo[4].price} $`);
            $('#bag5-3').css('background', '#3ACDD5').text(`-`);
            $('#bag5-4').text(`${bagsInfo[4].quantity} шт`);
            $('#bag5-5').css('background', '#3ACDD5').text(`+`);
            $('#bag5-6').text(`${bagsInfo[4].quantity * bagsInfo[4].price} $`);
        });
        $(`.bags__grid__item:nth-child(6) svg`).one('click', function(){
            basketContent.append('<div id="bag6-1"></div>');
            basketContent.append('<div id="bag6-2"></div>');
            basketContent.append('<div id="bag6-3"></div>');
            basketContent.append('<div id="bag6-4"></div>');
            basketContent.append('<div id="bag6-5"></div>');
            basketContent.append('<div id="bag6-6"></div>');
            $('#bag6-1').text(`${bagsInfo[5].name}`);
            $('#bag6-2').text(`${bagsInfo[5].price} $`);
            $('#bag6-3').css('background', '#3ACDD5').text(`-`);
            $('#bag6-4').text(`${bagsInfo[5].quantity} шт`);
            $('#bag6-5').css('background', '#3ACDD5').text(`+`);
            $('#bag6-6').text(`${bagsInfo[5].quantity * bagsInfo[5].price} $`);
        });
        $(`.camps__grid__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="camp1-1"></div>');
            basketContent.append('<div id="camp1-2"></div>');
            basketContent.append('<div id="camp1-3"></div>');
            basketContent.append('<div id="camp1-4"></div>');
            basketContent.append('<div id="camp1-5"></div>');
            basketContent.append('<div id="camp1-6"></div>');
            $('#camp1-1').text(`${campsInfo[0].name}`);
            $('#camp1-2').text(`${campsInfo[0].price} $`);
            $('#camp1-3').css('background', '#3ACDD5').text(`-`);
            $('#camp1-4').text(`${campsInfo[0].quantity} шт`);
            $('#camp1-5').css('background', '#3ACDD5').text(`+`);
            $('#camp1-6').text(`${campsInfo[0].quantity * campsInfo[0].price} $`);
        });
        $(`.camps__grid__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="camp2-1"></div>');
            basketContent.append('<div id="camp2-2"></div>');
            basketContent.append('<div id="camp2-3"></div>');
            basketContent.append('<div id="camp2-4"></div>');
            basketContent.append('<div id="camp2-5"></div>');
            basketContent.append('<div id="camp2-6"></div>');
            $('#camp2-1').text(`${campsInfo[1].name}`);
            $('#camp2-2').text(`${campsInfo[1].price} $`);
            $('#camp2-3').css('background', '#3ACDD5').text(`-`);
            $('#camp2-4').text(`${campsInfo[1].quantity} шт`);
            $('#camp2-5').css('background', '#3ACDD5').text(`+`);
            $('#camp2-6').text(`${campsInfo[1].quantity * campsInfo[1].price} $`);
        });
        $(`.camps__grid__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="camp3-1"></div>');
            basketContent.append('<div id="camp3-2"></div>');
            basketContent.append('<div id="camp3-3"></div>');
            basketContent.append('<div id="camp3-4"></div>');
            basketContent.append('<div id="camp3-5"></div>');
            basketContent.append('<div id="camp3-6"></div>');
            $('#camp3-1').text(`${campsInfo[2].name}`);
            $('#camp3-2').text(`${campsInfo[2].price} $`);
            $('#camp3-3').css('background', '#3ACDD5').text(`-`);
            $('#camp3-4').text(`${campsInfo[2].quantity} шт`);
            $('#camp3-5').css('background', '#3ACDD5').text(`+`);
            $('#camp3-6').text(`${campsInfo[2].quantity * campsInfo[2].price} $`);
        });
        $(`.cameras__slider__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="cameras1-1"></div>');
            basketContent.append('<div id="cameras1-2"></div>');
            basketContent.append('<div id="cameras1-3"></div>');
            basketContent.append('<div id="cameras1-4"></div>');
            basketContent.append('<div id="cameras1-5"></div>');
            basketContent.append('<div id="cameras1-6"></div>');
            $('#cameras1-1').text(`${camerasInfo[0].name}`);
            $('#cameras1-2').text(`${camerasInfo[0].price} $`);
            $('#cameras1-3').css('background', '#3ACDD5').text(`-`);
            $('#cameras1-4').text(`${camerasInfo[0].quantity} шт`);
            $('#cameras1-5').css('background', '#3ACDD5').text(`+`);
            $('#cameras1-6').text(`${camerasInfo[0].quantity * camerasInfo[0].price} $`);
        });
        $(`.cameras__slider__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="cameras2-1"></div>');
            basketContent.append('<div id="cameras2-2"></div>');
            basketContent.append('<div id="cameras2-3"></div>');
            basketContent.append('<div id="cameras2-4"></div>');
            basketContent.append('<div id="cameras2-5"></div>');
            basketContent.append('<div id="cameras2-6"></div>');
            $('#cameras2-1').text(`${camerasInfo[1].name}`);
            $('#cameras2-2').text(`${camerasInfo[1].price} $`);
            $('#cameras2-3').css('background', '#3ACDD5').text(`-`);
            $('#cameras2-4').text(`${camerasInfo[1].quantity} шт`);
            $('#cameras2-5').css('background', '#3ACDD5').text(`+`);
            $('#cameras2-6').text(`${camerasInfo[1].quantity * camerasInfo[1].price} $`);
        });
        $(`.cameras__slider__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="cameras3-1"></div>');
            basketContent.append('<div id="cameras3-2"></div>');
            basketContent.append('<div id="cameras3-3"></div>');
            basketContent.append('<div id="cameras3-4"></div>');
            basketContent.append('<div id="cameras3-5"></div>');
            basketContent.append('<div id="cameras3-6"></div>');
            $('#cameras3-1').text(`${camerasInfo[2].name}`);
            $('#cameras3-2').text(`${camerasInfo[2].price} $`);
            $('#cameras3-3').css('background', '#3ACDD5').text(`-`);
            $('#cameras3-4').text(`${camerasInfo[2].quantity} шт`);
            $('#cameras3-5').css('background', '#3ACDD5').text(`+`);
            $('#cameras3-6').text(`${camerasInfo[2].quantity * camerasInfo[2].price} $`);
        });
        $(`.lens__slider__item:nth-child(1) svg`).one('click', function(){
            basketContent.append('<div id="lens1-1"></div>');
            basketContent.append('<div id="lens1-2"></div>');
            basketContent.append('<div id="lens1-3"></div>');
            basketContent.append('<div id="lens1-4"></div>');
            basketContent.append('<div id="lens1-5"></div>');
            basketContent.append('<div id="lens1-6"></div>');
            $('#lens1-1').text(`${lensInfo[0].name}`);
            $('#lens1-2').text(`${lensInfo[0].price} $`);
            $('#lens1-3').css('background', '#3ACDD5').text(`-`);
            $('#lens1-4').text(`${lensInfo[0].quantity} шт`);
            $('#lens1-5').css('background', '#3ACDD5').text(`+`);
            $('#lens1-6').text(`${lensInfo[0].quantity * lensInfo[0].price} $`);
        });
        $(`.lens__slider__item:nth-child(2) svg`).one('click', function(){
            basketContent.append('<div id="lens2-1"></div>');
            basketContent.append('<div id="lens2-2"></div>');
            basketContent.append('<div id="lens2-3"></div>');
            basketContent.append('<div id="lens2-4"></div>');
            basketContent.append('<div id="lens2-5"></div>');
            basketContent.append('<div id="lens2-6"></div>');
            $('#lens2-1').text(`${lensInfo[1].name}`);
            $('#lens2-2').text(`${lensInfo[1].price} $`);
            $('#lens2-3').css('background', '#3ACDD5').text(`-`);
            $('#lens2-4').text(`${lensInfo[1].quantity} шт`);
            $('#lens2-5').css('background', '#3ACDD5').text(`+`);
            $('#lens2-6').text(`${lensInfo[1].quantity * lensInfo[1].price} $`);
        });
        $(`.lens__slider__item:nth-child(3) svg`).one('click', function(){
            basketContent.append('<div id="lens3-1"></div>');
            basketContent.append('<div id="lens3-2"></div>');
            basketContent.append('<div id="lens3-3"></div>');
            basketContent.append('<div id="lens3-4"></div>');
            basketContent.append('<div id="lens3-5"></div>');
            basketContent.append('<div id="lens3-6"></div>');
            $('#lens3-1').text(`${lensInfo[2].name}`);
            $('#lens3-2').text(`${lensInfo[2].price} $`);
            $('#lens3-3').css('background', '#3ACDD5').text(`-`);
            $('#lens3-4').text(`${lensInfo[2].quantity} шт`);
            $('#lens3-5').css('background', '#3ACDD5').text(`+`);
            $('#lens3-6').text(`${lensInfo[2].quantity * lensInfo[2].price} $`);
        });
    });
})(jQuery);

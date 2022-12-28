(function($){
    'use strict'
    // code start
    
    $('.header-menu-icon i.fa-bars').on('click',function () {
        $('.header-menu').slideDown()
        $('.header-menu-icon i.fa-xmark').show()
        $(this).hide()
    })
    
    $('.header-menu-icon i.fa-xmark').on('click',function () {
        $('.header-menu').slideUp()
        $('.header-menu-icon i.fa-bars').show()
        $(this).hide()
    })
    
    $(window).resize(function(){
        var screenSize = $(window).width();
    
        if (screenSize > 991) {
            $('.header-menu').removeAttr('style')
    
        }
    }) 
    
    
    // carosel
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText:['<button class="next"> <i class="fas fa-chevron-left"></i> </button>','<button class="prv"> <i class="fas fa-chevron-right"></i> </button>'],
        autoplay:true,
        autoplayTimeout:3000,
    
    
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


$(window).scroll(function () {
   var distance = $(window).scrollTop()
   if( distance > 500 ) {
    $('.top-button').fadeIn()
   }
   else {
    $('.top-button').fadeOut
   }
})


    
    }) (jQuery);
//start navbar onscroll
$(document).ready(function(){
    $(window).scroll(function(){
    if($(document).scrollTop() > 100){
        $('nav').addClass('scrolled');
        
    }
    else{
        $('nav').removeClass('scrolled');
    }
        
});
    $('.imgo').click(function(){
        let imsrc = $(this).attr('src');
        $('#img-o').attr('src',imsrc)
    });
   
});
    //Aos
         AOS.init();
// strt js
//swiper slider
    var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
      },
    });
    //smothscroll
    var scroll = new SmoothScroll('a[href*="#"]');

    
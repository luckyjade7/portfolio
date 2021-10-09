$(document).ready(function(){

    // main_banner
    $('.mb_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      });


    // contents1
    $('.list_con1').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true
      });

    // event_banner
    $('.list_eve').slick({
        infinite: true,
        speed: 500,
        fade: false,
        arrows: false,
        cssEase: 'linear'
      }); 


}); 
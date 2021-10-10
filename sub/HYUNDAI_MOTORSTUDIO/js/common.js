$(document).ready(function(){

    // depth2
    $('.depth2').hide();
    $('.gnb>li').mouseenter(function(){
        $(this).children('.depth2').stop().slideDown();
    });

    $('.depth2').hide();
    $('.gnb>li').mouseleave(function(){
        $(this).children('.depth2').stop().slideUp();
    });


  }); 
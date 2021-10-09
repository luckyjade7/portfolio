$(document).ready(function(){

    //btn_top
    $('.btn_top').hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
        $('.btn_top').fadeIn();
      }
      else {
        $('.btn_top').fadeOut();
      }
    });

    $('.btn_top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
  });

    


}); 
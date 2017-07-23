//首页选择卡 


$(document).ready(function() {

   $('.nav3').find('li').click(function(){
    $('.nav3').find('li>a').removeClass('current').addClass('cl');
    $(this).find('a').removeClass('cl').addClass('current');
    $('.news-left').find('.news-text').removeClass('dis').addClass('undis'); 
    $('.news-left').find('.news-text').eq($(this).index()).removeClass('undis').addClass('dis'); 
    });




   $('.nav4').find('li').click(function(){
   $('.nav4').find('li>a').removeClass('current').addClass('cl');
    $(this).find('a').removeClass('cl').addClass('current');
    $('.news-right').find('.news-text').removeClass('dis').addClass('undis'); 
    $('.news-right').find('.news-text').eq($(this).index()).removeClass('undis').addClass('dis'); 
    });


$('.head-box').find('ul>li').hover(function(){
  $(this).find('ul').css('display','block');
},function(){
	$(this).find('ul').css('display','none');
}
)

});




$(document).ready(function() {


   $('.nav2').find('li').click(function(){
   $('.nav2').find('li>a').removeClass('current').addClass('cl');
   $(this).find('a').removeClass('cl').addClass('current');
   $('.bot-left').find('.kind').removeClass('dis').addClass('undis');
   $('.bot-left').find('.kind').eq($(this).index()).removeClass('undis').addClass('dis');


});


$(".k1").find('li').click(function(){
   $(".k1").find('li').removeClass('on').addClass('uon');
   $(this).removeClass('uon').addClass('on');
   $(".k1").find('.kind1').removeClass('dis').addClass('undis');
   $(".k1").find('.kind1').eq($(this).index()).removeClass('undis').addClass('dis');
});


$(".k2").find('li').click(function(){
   $(".k2").find('li').removeClass('on').addClass('uon');
   $(this).removeClass('uon').addClass('on');
   $(".k2").find('.kind1').removeClass('dis').addClass('undis');
   $(".k2").find('.kind1').eq($(this).index()).removeClass('undis').addClass('dis');
});


$(".k3").find('li').click(function(){
   $(".k3").find('li').removeClass('on').addClass('uon');
   $(this).removeClass('uon').addClass('on');
   $(".k3").find('.kind1').removeClass('dis').addClass('undis');
   $(".k3").find('.kind1').eq($(this).index()).removeClass('undis').addClass('dis');
});

// 风险控制

$('.danger-ul').find('li').click(function(){
      $('.danger-ul').find('li>a').removeClass('d-on');
      $(this).find('a').addClass('d-on');
      $('.danger').find('.danger-text').removeClass('dis').addClass('undis');
       $('.danger').find('.danger-text').eq($(this).index()).removeClass('undis').addClass('dis');


})


});





















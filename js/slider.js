
    var now_img,next_img;

    function fade_slider(){
   now_img =$('.viewer img:eq(0)');
   next_img =$('.viewer img:eq(1)');

   next_img.addClass('active').css('opacity',0).animate({'opacity':1},1000,function(){
     $('.viewer').append(now_img);now_img.removeClass('active'); });
     } //함수끝
     var timer = setInterval('fade_slider()',3000);


// life news swiper js
$(document).ready(function(){

    $('.gallery>ul').after($('.gallery>ul').clone());
    var position = 0 ; 
    var movesize = 200 ; 
    var timeonoff;

    timeonoff = setInterval(function(){
        position -= movesize ; 
        $('.gallery').stop().animate({'left':position},'fast',function(){
            if(position == -1600){
                $('.gallery').css('left',0);
                position = 0;
            }
        });
    },1500);
});

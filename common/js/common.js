// .sub_menu slide
// $(document).ready(function(){
//     $("#gnb").hover(
//     function(){
//         $(".sub_menu").stop().fadeIn('fast');
//         $(".menu_box").stop().slideDown();
//     },
//     function(){
//         $(".sub_menu").stop().fadeOut('fast');
//         $(".menu_box").stop().slideUp();
//     });
// });

// footer .select>a.arrow
$(document).ready(function(){
    $('.select .arrow').toggle(
        function(){
            $('.select .related_site').fadeIn('fast');
            $('.select .arrow').css({"background-image" : "url(../imgs/arrow.png)"});
        },function(){
            $('.select .related_site').fadeOut('fast');
            $('.select .arrow').css({"background-image" : "url(../imgs/arrow.png)"});
        });
});
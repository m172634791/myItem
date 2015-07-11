$(function() {
    $('.shop_list_show .shop_list dt').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        //console.log($('.shop_list_all')[index]);
        $('.shop_list_all').eq(index).stop().show(300).siblings().stop().hide(300);

    }).mouseleave(function() {
        $(this).removeClass('active');
        $('.shop_list_all').eq($(this).index()).css('display', 'none');
    });
});
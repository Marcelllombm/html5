$(function(){
    // DESLIZA O MENU
    $('.main_menu a[class!="special"]').click(function(){
        let goto = $('.' + $(this).attr('href').replace("#","")).position().top;
        $('html, body').animate({scrollTop: goto}, 1000)
        console.log(goto)
        return false;
    })
})
$(document).ready(function() {
    let windowHeight = $(window).height();
    let headerHeight = $("header").height();
    let footerHeight = $("footer").height();

    $('main div.container').height(windowHeight - (headerHeight + footerHeight) - 15);
    $('main div.container').css("border", "none");


    $(window).resize(function () {
        windowHeight = $(window).height();
        headerHeight = $("header").height();
        footerHeight = $("footer").height();

        $('main div.container').height(windowHeight - (headerHeight + footerHeight) - 15);
        $('main div.container').css("border", "none");
    });

    (function blink() {
        $('.blink_me').fadeOut(500).fadeIn(500, blink); 
    })();

});

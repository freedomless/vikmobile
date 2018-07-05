$(document).ready(function() {
    let windowHeight = $(window).height();
    let headerHeight = $("header").height();
    let footerHeight = $("footer").height();

    $('main div.container').height(windowHeight - (headerHeight + footerHeight) - 30);
    $('main div.container').css("border", "none");

    // console.log("windowHeight: " + windowHeight);
    // console.log("headerHeight: " + headerHeight);
    // console.log("footerHeight: " + footerHeight);
    // console.log(windowHeight - (headerHeight + footerHeight) - 15);

});

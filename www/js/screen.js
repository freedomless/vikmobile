$(document).ready(function() {
    let windowHeight = $(window).height();
    let headerHeight = $("header").height();
    let footerHeight = $("footer").height();

    $('main div.container').height(windowHeight - (headerHeight + footerHeight) - 15);
    $('main div.container').css("border", "none");
});

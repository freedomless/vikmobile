$(document).ready(function() {
    let i = 0;
    let myInterval = setInterval(doSomething, 3000);

    function doSomething () {
        console.log("AJAX ONLINE!");
        i++;
        if (i == 10) clearInterval(myInterval);
    }
});

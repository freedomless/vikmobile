$(document).ready(function() {
    let i = 0;
    let myInterval = setInterval(getDataFromServer, 3000);

    function getDataFromServer () {
        $.ajax({
            url: "http://maverickcardio.com/test/index.php"
        }).done(function(dataFromServer) {
            updateElectricData(dataFromServer);
        });
    }

    function updateElectricData (dataFromServer) {
        let barPurcentage;

        $("#ursLabel").html("Urs:" + dataFromServer[6] / 10 + " V");
        barPurcentage = Number(dataFromServer[6] / 2700 * 100);
        $("#ursBar").css("width", barPurcentage);
        $("#urs").html(dataFromServer[6] / 10 + " V");

        $("#ustLabel").html("Urs:" + dataFromServer[8] / 10 + " V");
        barPurcentage = Number(dataFromServer[8] / 2700 * 100);
        $("#ustBar").css("width", barPurcentage);
        $("#ust").html(dataFromServer[8] / 10 + " V");

        $("#utrLabel").html("Urs:" + dataFromServer[10] / 10 + " V");
        barPurcentage = Number(dataFromServer[10] / 2700 * 100);
        $("#utrBar").css("width", barPurcentage);
        $("#utr").html(dataFromServer[10] / 10 + " V");

        console.log(dataFromServer);
    }
});

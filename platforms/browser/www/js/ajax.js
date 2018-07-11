$(document).ready(function() {
    let i = 0;
    let myInterval = setInterval(getDataFromServer, 3000);

    function getDataFromServer () {
        $.ajax({
            url: "http://maverickcardio.com/test/index.php"
        }).done(function(dataFromServer) {
            updateElectricData(dataFromServer);
        }).fail(function () {
            $("#debug").html(dataFromServer);
        });
    }

    function updateElectricData (dataFromServer) {
        let barPurcentage;

        $("#ursLabel").html("Urs:" + dataFromServer[6] / 10 + " V");
        barPurcentage = Number(dataFromServer[6] / 2700 * 100);
        $("#ursBar").css("width", barPurcentage + "%");
        $("#urs").html(dataFromServer[6] / 10 + " V");

        $("#ustLabel").html("Urs:" + dataFromServer[8] / 10 + " V");
        barPurcentage = Number(dataFromServer[8] / 2700 * 100);
        $("#ustBar").css("width", barPurcentage + "%");
        $("#ust").html(dataFromServer[8] / 10 + " V");

        $("#utrLabel").html("Urs:" + dataFromServer[10] / 10 + " V");
        barPurcentage = Number(dataFromServer[10] / 2700 * 100);
        $("#utrBar").css("width", barPurcentage + "%");
        $("#utr").html(dataFromServer[10] / 10 + " V");
    }

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

    checkConnection();
});

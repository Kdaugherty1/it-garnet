function calculate() {
    "use strict";

    if ($("#myForm").validate()) {

        var fromValue = document.getElementById("FromValue").value;

        var fromUnits;

        if (document.getElementById("fromCentimeters").checked) {
            fromUnits = document.getElementById("fromCentimeters").value;
        }
        if (document.getElementById("fromMeters").checked) {
            fromUnits = document.getElementById("fromMeters").value;
        }
        if (document.getElementById("fromKilometers").checked) {
            fromUnits = document.getElementById("fromKilometers").value;
        }
        if (document.getElementById("frominches").checked) {
            fromUnits = document.getElementById("frominches").value;
        }
        if (document.getElementById("fromFeet").checked) {
            fromUnits = document.getElementById("fromFeet").value;
        }
        if (document.getElementById("fromYards").checked) {
            fromUnits = document.getElementById("fromYards").value;
        }
        if (document.getElementById("fromMiles").checked) {
            fromUnits = document.getElementById("fromMiles").value;
        }

        var toUnits;

        if (document.getElementById("toCentimeters").checked) {
            toUnits = document.getElementById("toCentimeters").value;
        }
        if (document.getElementById("toMeters").checked) {
            toUnits = document.getElementById("toMeters").value;
        }
        if (document.getElementById("toKilometers").checked) {
            toUnits = document.getElementById("toKilometers").value;
        }
        if (document.getElementById("toInches").checked) {
            toUnits = document.getElementById("toInches").value;
        }
        if (document.getElementById("toFeet").checked) {
            toUnits = document.getElementById("toFeet").value;
        }
        if (document.getElementById("toYards").checked) {
            toUnits = document.getElementById("toYards").value;
        }
        if (document.getElementById("toMiles").checked) {
            toUnits = document.getElementById("toMiles").value;
        }

        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";

        var myData = {};
        myData.FromValue = fromValue;
        myData.FromUnit = fromUnits;
        myData.ToUnit = toUnits;

        $(document).ready(function() {

            $.ajax({
                    method: myMethod,
                    data: myData,
                    url: myURL
                })

                .done(function(msg) {
                    document.getElementById("ToValue").innerHTML = msg;
                });
        });
    }
}

function clearform() {
    "use strict";

    document.getElementById("FromValue").value = '';
    $(".radioSelect").prop("checked", false);
    document.getElementById("ToValue").innerHTML = "";

}

$(function() {
    $("#myForm").validate({
        rules: {
            FromValue: {
                required: true,
            },
            FromUnits: {
                required: true,
            },
            ToUnits: {
                required: true,
            }
        }
    });
});

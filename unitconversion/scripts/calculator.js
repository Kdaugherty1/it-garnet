/*Unit Converter JavaScript*/

function calculate() {
  "use strict";

  var form = $("#unitsconverter");

  // Validate the form using jQuery Validation
  if ($("#unitsconverter").valid()) {
      var fromValue = document.getElementById("FromValue").value;

      var fromValuefp = parseFloat(fromValue);

      var fromUnit = getSelectedUnit("FromUnit");
      var toUnit = getSelectedUnit("ToUnit");

      // If both units are selected, proceed with AJAX request
      if (fromUnit && toUnit) {
          CalculateResult(fromValuefp, fromUnit, toUnit);
      } else {
          document.getElementById("Result").innerHTML = "Please select both from and to units.";
      }
  }
}

// Function to get the selected unit from radio buttons
function getSelectedUnit(unitGroupName) {
  var selectedUnit = null;
  $("input[name='" + unitGroupName + "']:checked").each(function() {
      selectedUnit = $(this).val();
  });
  return selectedUnit;
}

async function CalculateResult(fromValue, fromUnit, toUnit) {
  "use strict";

  var myURL =
      "https://brucebauer.info/assets/ITEC3650/unitsconversion.php" +
      "?FromValue=" +
      encodeURIComponent(fromValue) +
      "&FromUnit=" +
      encodeURIComponent(fromUnit) +
      "&ToUnit=" +
      encodeURIComponent(toUnit);

  try {
      console.log("Requesting URL:", myURL); // Log the URL being requested

      let myCalcObject = await fetch(myURL);

      // Check if the response is okay (status code 200)
      if (!myCalcObject.ok) {
          throw new Error('Network response was not ok: ' + myCalcObject.statusText);
      }

      let myResult = await myCalcObject.text();

      // Ensure you see what the response looks like
      console.log("Response:", myResult);

      // Display the result
      document.getElementById("Result").innerHTML = myResult;
  } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      document.getElementById("Result").innerHTML = "Error: " + error.message;
  }
}

function clearform() {
  document.getElementById("FromValue").value = "";
  document.getElementById("Result").innerHTML = "";

  // Uncheck all radio buttons
  $("input[name='FromUnit']").prop("checked", false);
  $("input[name='ToUnit']").prop("checked", false);
}

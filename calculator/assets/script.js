function calculate() {
  // Make sure that the form is valid
  if ($("#calculator").valid()) {
    // get the operands from the form
    var operand1 = document.getElementById("Operand1").value;
    var operand2 = document.getElementById("Operand2").value;

    // convert the operands from string to floating point
    var operand1fp = parseFloat(operand1);
    var operand2fp = parseFloat(operand2);

    // figure out which operator was checked and place the value in operator
    var operator;

    if (document.getElementById("AddOperator").checked) {
      operator = document.getElementById("AddOperator").value;
    }
    if (document.getElementById("SubtractOperator").checked) {
      operator = document.getElementById("SubtractOperator").value;
    }
    if (document.getElementById("MultiplyOperator").checked) {
      operator = document.getElementById("MultiplyOperator").value;
    }
    if (document.getElementById("DivideOperator").checked) {
      operator = document.getElementById("DivideOperator").value;
    }

    // Check if operator is selected
    if (!operator) {
      alert("Please select an operator.");
      return;
    }

    var result;

    // if the operator was "Add" then set result to addition
    if (operator == "Add") {
      result = operand1fp + operand2fp;
    }

    // if the operator was "Subtract" then set result to subtraction
    if (operator == "Subtract") {
      result = operand1fp - operand2fp;
    }

    // if the operator was "Multiply" then set result to multiplication
    if (operator == "Multiply") {
      result = operand1fp * operand2fp;
    }

    // if operator was "Divide" then set result to division
    if (operator == "Divide") {
      if (operand2fp === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = operand1fp / operand2fp;
    }

    // convert the result to a string and display it
    document.getElementById("Result").innerHTML = result.toString();
  }
}

function clearform() {
  // Set all of the form values to blank or false
  document.getElementById("Operand1").value = "";
  document.getElementById("Operand2").value = "";
  document.getElementById("Operand1Error").innerHTML = "";
  document.getElementById("Operand2Error").innerHTML = "";
  document.getElementById("AddOperator").checked = false;
  document.getElementById("SubtractOperator").checked = false;
  document.getElementById("MultiplyOperator").checked = false;
  document.getElementById("DivideOperator").checked = false;
  document.getElementById("OperatorError").innerHTML = "";
  document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$("#calculator").validate({});
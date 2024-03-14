document.addEventListener("DOMContentLoaded", function() {
    const currencyForm = document.getElementById("currency-form");
    const errorMessage = document.getElementById("error-message");
    const chartCtx = document.getElementById("currency-chart").getContext("2d");

    currencyForm.addEventListener("submit", function(event) {
        event.preventDefault();
        clearError();

        const fromCurrency = document.getElementById("from-currency").value;
        const toCurrency = document.getElementById("to-currency").value;
        const fromDate = document.getElementById("from-date").value;
        const toDate = document.getElementById("to-date").value;

       
        if (!fromCurrency || !toCurrency || !fromDate || !toDate) {
            showError("All fields are required.");
            return;
        }

        const apiKey = "https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/2023-01-09/2023-01-09?apiKey=KDmlIYNzy162m6X2TroFWYpY038lUvc3"; // Your Polygon.io API key
        const url = `https://api.polygon.io/v2/aggs/ticker/C:${fromCurrency}${toCurrency}/range/1/day/${fromDate}/${toDate}?apiKey=${apiKey}`;

    });

    document.getElementById("clear-btn").addEventListener("click", function() {
        clearForm();
        clearError();
    });

    function showError(message) {
        errorMessage.textContent = message;
    }

    function clearError() {
        errorMessage.textContent = "";
    }

    function clearForm() {
        currencyForm.reset();
    }
});

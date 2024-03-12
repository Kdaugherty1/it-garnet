$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });


});
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the search query from the input field
  var searchQuery = document.getElementById("searchInput").value;

  // Perform search logic (this is just a placeholder)
  var searchResults = performSearch(searchQuery);

  // Display search results
  displaySearchResults(searchResults);
});

function performSearch(query) {
  // Placeholder function to simulate search functionality
  // Replace this with actual search logic (e.g., AJAX request to a server)
  var results = [];

  // Example: If the query is "example", return some dummy results
  if (query.toLowerCase() === "example") {
      results = ["Result 1", "Result 2", "Result 3"];
  }

  return results;
}

function displaySearchResults(results) {
  var resultsContainer = document.getElementById("searchResults");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Display new results
  results.forEach(function(result) {
      var resultElement = document.createElement("div");
      resultElement.textContent = result;
      resultsContainer.appendChild(resultElement);
  });
}

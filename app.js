var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0&query=snickers",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "44b03f43d8msh496c03f2d1c35bdp148563jsnf3e44a02f2ee"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
console.log("test")
function buildQueryURL() {
	// queryURL is the url we'll use to query the API
	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	
  
	// Begin building an object to contain our API call's query parameters
	// Set the API key
	var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };
  
	// Grab text the user typed into the search input, add to the queryParams object
	queryParams.q = $("#foodInput")
	  .val()
	  .trim();

  
	// Logging the URL so we have access to it for troubleshooting
	console.log("---------------\nURL: " + queryURL + "\n---------------");
	console.log(queryURL + $.param(queryParams));
	return queryURL + $.param(queryParams);
  }
  
  /**
   * takes API data (JSON/object) and turns it into elements on the page
   * @param {object} NYTData - object containing NYT API data
   */
  function updatePage(NYTData) {
	// Get from the form the number of results to display
	// API doesn't have a "limit" parameter, so we have to do this ourselves
	var article = NYTData.response.docs;
	  var articleCount = 5;
  
	  // Create the  list group to contain the articles and add the article content for each
	  var $articleList = $("<ul>");
	  $articleList.addClass("list-group");
  
	  // Add the newly created element to the DOM
	  $("#article").append($articleList);
	  
  
	  // If the article has a headline, log and append to $articleList
	  var headline = article.headline;
	  var $articleListItem = $("<li class='list-group-item articleHeadline'>");
  
	  if (headline && headline.main) {
		console.log(headline.main);
		$articleListItem.append(
		  "<span class='label label-primary'>" +
			articleCount +
			"</span>" +
			"<strong> " +
			headline.main +
			"</strong>"
		);
	  }
  
	  // Append and log url
	  $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
	  console.log(article.web_url);
  
	  // Append the article
	  $articleList.append($articleListItem);
	}
  
  
  // Function to empty out the articles
  function clear() {
	$("#article-section").empty();
  }
  
  // CLICK HANDLERS
  // ==========================================================
  
  // .on("click") function associated with the Search Button
  $("#foodItemButton").on("click", function(event) {
	// This line allows us to take advantage of the HTML "submit" property
	// This way we can hit enter on the keyboard and it registers the search
	// (in addition to clicks). Prevents the page from reloading on form submit.
	event.preventDefault();
  
	// Empty the region associated with the articles
	clear();
  
	// Build the query URL for the ajax request to the NYT API
	var queryURL = buildQueryURL();
  
	// Make the AJAX request to the API - GETs the JSON data at the queryURL.
	// The data then gets passed as an argument to the updatePage function
	$.ajax({
	  url: queryURL,
	  method: "GET"
	}).then(updatePage);
  });
  

  
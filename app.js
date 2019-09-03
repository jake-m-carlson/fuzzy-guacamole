$("#foodItemButton").click(function(event){
	event.preventDefault();
	var ingredientSearch = $("#foodInput").val();
	console.log(ingredientSearch);

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?number=1&query=" + ingredientSearch,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "44b03f43d8msh496c03f2d1c35bdp148563jsnf3e44a02f2ee"
	}
}

$.ajax(settings).done(function (response) {
	var ingredientNumber = response.products;
	var ingredientId= ingredientNumber[0].id;
	console.log(response);

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/" + ingredientId,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "44b03f43d8msh496c03f2d1c35bdp148563jsnf3e44a02f2ee"
		}
	} 
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		var nutritional = response.nutrition;
		console.log(nutritional);
		var calorie = nutritional.calories;
		$("#calorie").text(calorie);
		var fat = nutritional.fat;
		$("#fat").text(fat);
		var protein = nutritional.protein;
		$("#protein").text(protein);
		var carbs = nutritional.carbs;
		$("#carbs").text(carbs);
	});
});

// Constructing a queryURL using the food ingredient 
var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
	ingredientSearch + "&api_key=ePu4sAeJ3pnzZxSW4crhvYCK0zZwNzug&limit=10";

// Ajax request with queryURL
$.ajax({
	url: queryUrl,
	method: "GET"
})

// When data is returned from the request 
.then(function(response) { 
	console.log(queryUrl);

	console.log(response);

	// storing data from AJAX request in results variable
	var results = response.data;

	// Looping through each result item
	for (var i = 0; i < results.length; i++) {

		// creating and storing a div tag
		var foodDiv = $("<div>");

		// create and store an image tag
		var foodImage = $("<img>");

		// set the src attribute of the image to a property pulled off the result item
		foodImage.attr("src", results[i].images.fixed_height.url);

		// appending the image tag to the foodDiv
		foodDiv.append(foodImage);

		// prepending the foodDiv to the html page in the "#images" div
		$("#images").prepend(foodDiv);
	}
});

});

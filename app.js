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


});
// changed test words
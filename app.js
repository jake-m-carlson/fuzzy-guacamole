$("#foodItembutton").click(function(){
	var ingredientSearch = $("#foodInput").val();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=" + ingredientSearch,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "44b03f43d8msh496c03f2d1c35bdp148563jsnf3e44a02f2ee"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
});	
var queryURL= "https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=58863c39&app_key=442ed61f8f641823d49aa8c6ea14c582";

$.ajax({
    url: queryURL,
    method: "GET"
})
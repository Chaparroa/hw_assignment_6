$(document).ready(function() {

	// create array of cities for dropdown
	var city = ["NYC", "SF", "LA", "ATX", "SYD"]; 
	$("#city-type").val(city);
	//create loop that uses array "cities"
	city.forEach(function(element,index){
	console.log(element);

	// add <option> element to list <select>
	$("select").append("<option>"+element+"</option>");
	});
	// user selets one of the options 
	$("select").change(filter);
	function filter(){
	};


	//Select NYC city options
	if(city === "New York City" || city === "NYC" || city === "New York" || city === "new york city" || city === "nyc" || city === "new york") {
		$("body").attr("class", "nyc");
	}
	//Select  SF options
	if(city === "San Francisco" || city === "SF" || city === "san francisco" || city === "sf") {
		$("body").attr("class", "sf");
	}
	// Select LA options
	if(city === "Los Angeles" || city === "LA" || city === "los angeles" || city === "la") {
		$("body").attr("class", "la");
	}
	// Select ATX options
	if(city === "Austin" || city === "ATX" || city === "austin" || city === "atx") {
		$("body").attr("class", "austin");
	}
	// Select SYD options
	if(city === "Sydney" || city === "SYD" || city === "sydney" || city === "syd") {
		$("body").attr("class", "sydney");
	}



});



// - When the user changes the input of the drop-down, update the background image based on what they selected
// - Use `$.append()` in your iteration on the drop-down menu 
// - Use the ```$.attr()``` function to update html classes 
// - Get the value of user input using ```$.val()```
// - Use the ```$.change``` event handler to capture user actions
// - Use ```if/else if/else ``` conditionals to control the flow of your application




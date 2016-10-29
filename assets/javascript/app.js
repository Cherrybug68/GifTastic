// Initial array of TV Shows
var tvShows = ['Revolution', 'How to Get Away With Murder', 'M*A*S*H', 'Rat Patrol'];

// Display the TV Show pics
function displayTVShowPic(){
	
	var tvShow = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + tvShow + "&limit=20&api_key=dc6zaTOxFJmzC";

	// AJAX call for the specific tv show
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		
		console.log(response);

		// Generic divs to hold tv show
		$("#myTVShow").append("<p>Rating: " + response.data.rating + "</p>");
		console.log(tvShow);

		$("#tvShowView").append('<p><img id="tvShowView" src = ' + response.data.images + '></p>');
		console.log(tvShowView);
	});
}

// function for displaying buttons
function renderButtons(){

	//Removes previous butttons
	$('#buttonsView').empty();

	// Loop throught array to create the buttons
	for (var i = 0; i < tvShows.length; i++){

		var a = $('<button>');

		a.addClass('tv');
		a.attr('data-name', tvShows[i]);
		a.text(tvShows[i]);
		$('#buttonsView').append(a);
	}
}

// function for handling the click event
$('#addTV').on('click', function(){

	var tvShow = $('#show-input').val().trim();

	tvShows.push(tvShow);

	renderButtons();

	return false;
})

// function for displaying TV Show gifs
displayTVShowPic();

renderButtons();





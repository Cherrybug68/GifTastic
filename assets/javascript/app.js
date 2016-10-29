// Initial array of TV Shows
var tvShows = ['Revolution', 'How to Get Away With Murder', 'M*A*S*H'];

// Display the TV Show pics
function getData()
	{ $('#tvShowView').empty();

	var tvShow = $(this).attr('data-name');
	console.log(tvShow);
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=dc6zaTOxFJmzC&limit=10";

	// AJAX call for the specific tv show
	$.ajax({url: queryURL, method: 'GET'}).done(function(response)
		{// console.log(response);

		var results = response.data;
		console.log(results.length);

		for (var i = 0; i < results.length; i++)
			{// Generic divs to hold tv show

			var div = $("<div>").attr("class", "img");

			div.append("<p>Rating: " + results[i].rating + "</p>");
			// console.log(tvShow);

			div.append('<p><img src = "' + results[i].images.fixed_height.url + '"></p>');

			$("#tvShowView").append(div);

			console.log(results[i].images.fixed_height.url);
		};
	});
}

// function for displaying buttons
function renderButtons()
	{ //Removes previous butttons
	$('#buttonsView').empty();

	// Loop throught array to create the buttons
	for (var i = 0; i < tvShows.length; i++){

	createButton(tvShows[i]);
	}
	// event listener for button with class tv
	$('.tv').on('click', getData);
	}


// renders new/additional button when submit button is clicked
$('#addTV').on('click', function()
	{ var tvShow = $('#show-input').val().trim();

	// tvShows.push(tvShow);

	createButton(tvShow);

	// event listener for button with class tv
	$('.tv').on('click', getData);
	return false;
	});


function createButton(value)
	{ var a = $('<button>');

		a.attr("class",'tv');
		a.attr('data-name', value);
		console.log(a.attr("data-name"));
		a.text(value);
		$('#buttonsView').append(a);

	}

renderButtons();





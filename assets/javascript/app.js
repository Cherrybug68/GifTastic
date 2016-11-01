"use strict";

// Initial array of dogs
var dogs = [
	'Yorkshire Terrier',
	'Weimaraner',
	'Dachshund'];

// Get Dog image data
function getData()
	{
	$('#dogView').empty();

	var dog = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dog + "&breed&api_key=dc6zaTOxFJmzC&limit=10";

	// AJAX call to get data
	$.ajax({url: queryURL, method: 'GET'}).done(function(response)
		{
		var results = response.data;

		for (var i = 0; i < results.length; i++)
			{
			var div = $("<div>").attr("class", "img");

			div.append("<p>Rating: " + results[i].rating + "</p>");

			div.append('<p><img src = "' + results[i].images.fixed_height_still.url + '"></p>');

			$("#dogView").append(div);
			};

			$('img').on('click', toggleStill);

			function toggleStill()
				{
				if (state == 'still'){
					$(this).attr('src', $(this).data('animate'));
					$(this).attr('data-state', 'animate');
				} else {
					$(this).attr('src', $(this).data('still'));
					$(this).attr('data-state', 'still');
				}
			}
		});
}


// function for displaying buttons
function renderButtons()
	{ //Removes previous butttons
	$('#buttonsView').empty();

	// Loop throught array to create the buttons
	for (var i = 0; i < dogs.length; i++){

	createButton(dogs[i]);
	}
	// event listener for button with class tv
	$('.dog').on('click', getData);
	}


// renders new/additional button when submit button is clicked
$('#addDog').on('click', function()
	{ var dog = $('#dog-input').val().trim();

	createButton(dog);

	// event listener for button with class tv
	$('.dog').on('click', getData);
	return false;
	});


function createButton(value)
	{ var a = $('<button>');

		a.attr("class",'dog');
		a.attr('data-name', value);
		console.log(a.attr("data-name"));
		a.text(value);
		$('#buttonsView').append(a);
	}



renderButtons();




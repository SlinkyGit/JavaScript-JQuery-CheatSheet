$(document).ready(function(){
	alert("The document is ready");

	for (i=0; i<6; i++){
		$('body').append('<h1>My Name is Nikhil</h1>')
		}

		for (i=0; i<6; i++){
			$('body').append('<img src="Images/bird.jpg" height="100" width="100">')
		}

	var friends = ["John", "Mike", "Steve"];

		for(i=0; i<friends.length; i++){
			$('body').append(friends[i]);
		};

	var car = {
		make: "Honda",
		model: "Santa Fe"
	};

	var person = {
		firstName="Nikhil",
		lastName="Solanki"
	}

	console.log(car.make);
	console.log(person.firstName);

	$('body').after(car.make);

	$('h1').css("color", "salmon");

	function addName (name){
		$('body').after(name);
	};

	addName("Nikhil");
	addName("John");
	addName("Jeremy");

});
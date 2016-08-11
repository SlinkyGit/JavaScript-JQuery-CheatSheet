alert ('Hey!')
//This is a basic alert

console.log ("This is an example of you typing things directly into the Console");

var name: "Nikhil";
//You can add properties to properties to variables
var x = 5;

console.log ('Hello Nikhil');

var isCodingFun = true;

//You can add multiple values to variables called Arrays
var Peanuts = ["charlie brown", "snoopy"]

console.log (Peanuts)

var user = {
	firstName: "Nikhil",
	lastName: "Solanki",
	birthday: "August 20, 2001"
};

console.log (user.firstName + " " + user.lastName);

//You can add Logic, which are true or false statements
if (5>10) {
	console.log ("You'll never see this because 5 isn't greater than 10")
}else {
	alert ("This is true!")
}

//You can alert the user anything you want, by using functions
function alertUser (name) {
	return alert (name);
}

alertUser("John Appleseed II");
alertUser("Dr. Suess");
}

alertUser("Pizza")
alertUser("Pasta")
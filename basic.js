var fs = require("fs");
var inquirer = require(inquirer);


// takes in a pair of strings from the front-side and the back-side 
function BasicFlashcard = function(frontSide,backSide) {
	this.frontSide;
	this.backSide;
}


//inquirer promise collects the front-side and back-side information 

BasicFlashcard.prototype.save = function(object){
	fs.appendFile("basic_card.txt", object, function(error){
		if (error) throw error;
		console.log("Successfully added to the database");
	});
}


module.exports = BasicFlashcard;
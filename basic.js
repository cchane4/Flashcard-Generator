var fs = require("fs");
var inquirer = require(inquirer);


// takes in a pair of strings from the front-side and the back-side 
function BasicFlashcard = function(frontSide,backSide) {
	this.frontSide;
	this.backSide;
}


//inquirer promise collects the front-side and back-side information and
//creates and instance of a new basic flashcard then console.logs the card  
inquirer.prompt([{
	type: "input", 
	name: "frontside", 
	message: "What is the question for you would like to ask?"
},{ 
	type: "input", 
	name: "backside",
	message: "What is the answer to the question?"
}]).then(function(inputs){ 
	var card = new BasicFlashcard(inputs.frontSide, inputs.backSide)
	console.log(card); 
})


/*BasicFlashcard.prototype.save = function(object){
	fs.appendFile("basic_card.txt", object, function(error){
		if (error) throw error;
		console.log("Successfully added to the database");
	});
}


module.exports = BasicFlashcard;*/ 
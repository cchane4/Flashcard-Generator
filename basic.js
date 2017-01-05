var fs = require("fs"); 



 
BasicFlashcard = function() {
	this.front,
	this.back
} 
	
BasicFlashcard.prototype.save = function(object){
	fs.appendFile("basic_card.txt", object, function(error){ 
		if (error) throw error;
		console.log("Successfully added to the database"); 
	});
}


module.exports = BasicFlashcard;
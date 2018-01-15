// imports inquirer for command-line prompts 
var inquirer = require("inquirer");
//imports the node package that is required fs for reading file systems(json,txt,etc.) 
var fs = require("fs"); 
// imports the clozeCard json file for storing inputs
var cardData = require('./clozeCards.json'); 

//constructor function that will have the fullText and answer
//clozePositions stores where the answer is located within the fullText
function ClozeCard(fullText,answer) {
//stores where the start and end positions are for the partial text 
	var clozePositions = clozeDelete(fullText, answer); 
// 
	this.partial = getPartial(fullText,clozePositions);
//stores the answer to the question
	this.answer = answer; 


//start is equal to the index of the answer within the full text
//if there is no answer in the fulltext , returns the position of start and position of start plus length of answer 

	function clozeDelete(fullText,answer){ 
		var start = fullText.indexOf(answer);
		if (start !== -1){ 
			return [start, start+answer.length]; 
			}
			throw new Error('Could not find answer in fullText');
	} 


//start is the first letter to the start of the answer
//end is the end of the answer to the end of the full text
// 
	function getPartial(fullText,clozePositions){ 
		var start = fullText.slice(0,clozePositions[0]); 
		var end = fullText.slice(clozePositions[1],fullText.length); 
		return start+"..."+end; 
	} 
}

//displays the card in the terminal by storing the result of the constructor within a prototype of the card.
// replaces  with the actual answer that the user typed as input
// this prototype is a reference or copy of the clozeCard object
ClozeCard.prototype.displayCard = function displayCard(){ 
	console.log(this.partial.replace('...', this.answer)); 
}

// takes in the full text and the answer, creates a new card with user inputs which make up the front and back of the card
// also stores the card to the clozeCard json file and displays "Done!" message at the command line when the process is complete 
function createNewCard() {
    inquirer.prompt([{
        type: "input",
        name: "fullText",
        message: "What is the full text of the flashcard you want to make?"
    },{
        type: "input",
        name: "answer",
        message: "What is the answer to the flashcard?"
    }]).then(function(inputs){
        var card = new ClozeCard(inputs.fullText,inputs.answer);
        card.displayCard();
        cardData.push(card);
        var newCarddata = JSON.stringify(cardData, null, '\t');
        fs.writeFile('./clozeCards.json', newCarddata, function(err) {
            if (err) throw err;
            console.log('Done!');
        })
    })
}

createNewCard(); 

module.exports = clozeCard;  
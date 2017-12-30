
var inquirer = require("inquirer");
var fs = require("fs"); 
var cardData = require('./clozeCards.json'); 

//constructor function 
function ClozeCard(fullText,answer) {
	var clozePositions = clozeDelete(fullText, answer); 

	this.partial = getPartial(fullText,clozePositions);
//stores the answer to the question
	this.answer = answer; 

//if there is no answer , return the position of start and lenght of answer 
	function clozeDelete(fullText,answer){ 
		var start = fullText.indexOf(answer);
		if (start !== -1){ 
			return [start, start+answer.length]; 
			}
			throw new Error('Could not find answer in fullText');
	} 
	function getPartial(fullText, clozePositions){ 
		var start = fullText.slice(0,clozePositions[0]); 
		var end = fullText.slice(clozePositions[1],fullText.length); 
		return start+"..."+end; 
	} 
}

//displays the card in the terminal by storing the result of  the constructor within a prototype of the card.
ClozeCard.prototype.displayCard = function displayCard(){ 
	console.log(this.partial.replace('...', this.answer)); 
}

// takes in the full text and the answer 
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
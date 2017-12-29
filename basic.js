// require inquirer npm package 
var inquirer = require("inquirer");
//preinstalled in node is fs for writing data 
var fs = require('fs');

var cardData = require('./basicCards.json');




// takes in a pair of strings from the front-side and the back-side 
// this refers to the object that "owns" the constructor 
// this.front becomes the resulting input values of the front side of the new Basica Flashcard object  
function BasicFlashcard(frontSide, backSide) {
    this.front = frontSide;
    this.back = backSide;
}


//inquirer promise collects the front-side and back-side information and
//creates and instance of a new basic flashcard then console.logs the card  
function createNewCard() {
    inquirer.prompt([{
        type: "input",
        name: "frontSide",
        message: "What is the question for you would like to ask?"
    }, {
        type: "input",
        name: "backSide",
        message: "What is the answer to the question?"
    }]).
    then(function(inputs) {
        var card = new BasicFlashcard(inputs.frontSide, inputs.backSide);
        cardData.push(card);

        var newCarddata = JSON.stringify(cardData, null, '\t');
        fs.writeFile('./basicCards.json', newCarddata, function(err) {
            if (err) throw err;
            console.log('Done!');
        })

    })
}

createNewCard();

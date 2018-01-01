// imports inquirer npm package 
var inquirer = require("inquirer");
//imports preinstalled in node is fs for writing data 
var fs = require('fs');
// importsthe json file that holds basic cards 
var cardData = require('./basicCards.json');




// constructor function takes in a pair of strings from the front-side and the back-side 
// this refers to the object that "owns" the constructor 
// this.front becomes the resulting input values of the front side of the new Basica Flashcard object  
function BasicFlashcard(frontSide, backSide) {
    this.front = frontSide;
    this.back = backSide;
}

// this function takes user input at the command line 
//inquirer promise collects the input and allocates them to  the front-side and back-side of the newly created card 
// the new card is stored in the json file and then console.logs "Done!" when the process is complete
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

var inquirer = require ('inquirer'); 
var fs = require('fs'); 
//imports the basic.js file 
var BasicFlashcard = require("./basic.js"); 
//imports the cloze.js file 
var clozeCard = require("./cloze.js");
// imports inquirer
 





// takes in the user's choice of creating basic flashcards or cloze/delete flashcards 
function makeChoice(){
    var flashcardType = {
    type:'list',
    message: 'What type of card would you like to create?', 
 	choices:['basic','cloze'],  
    name: 'choice'
    }; 

    inquirer.prompt(flashcardType).then(function(flashcard){ 
        if(flashcard.choice === 'basic'){ 
            BasicFlashcard(); 
        } else if (flashcard.choice === 'cloze'){ 
            clozeCard(); 
        }
    }); 
}

makeChoice(); 

    

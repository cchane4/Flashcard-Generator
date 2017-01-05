var inquirer = require("inquirer"); 
var BasicCard = require("./basic.js");

var basicOne = new BasicCard();
// var cardChoice;

function run(){ 
	inquirer.prompt({ 
		type: 'list',
		name: 'choice',
		message: 'Would you like to create a Basic or Cloze-Deleted card?',
		choices: ['basic', 'cloze']
	}).then(function(response){
		// cardChoice = response.choice;
		if(response.choice === "basic"){
			inquirer.prompt([{
				type: 'input', 
				name: 'question',
				message: 'Enter the question portion of your basic card.'
			},{
				type: 'input', 
				name: 'answer', 
				message: 'Enter the answer portion of your basic card.'
			}]).then(function(answer){
				console.log('sup');
				basicOne.front = answer.question; 
				basicOne.back = answer.answer;
				save(basicOne.save(JSON.stringify(basicOne))); 
			})
		} else if (response.choice === "cloze"){ 

		}

	});
}

function save(callback){ 
	inquirer.prompt({ 
		type: 'confirm', 
		name: 'save', 
		message: "Do you want to save this card?"
	}).then(function(response){
		if (response.save) {
			console.log(JSON.stringify(basicOne));
			callback();
		} else {
			console.log("That's OK.");
		}
	})
}

run();

var inquirer = require("inquirer");

var fs = require('fs');

//constructor function 
function ClozeCard(fullText,answer) {
	var clozePositions = clozeDelete(fullText, answer); 

this.partial = getPartial(fullText,clozePositions);
this.answer = answer; 

//if there is no answer , return the position of start and lenght of answer 
	function clozeDelete(fullText,answer){ 
		var start = fullText.indexOf(answer);
		if (start !== -1){ 
			return start, start+answer.length]; 
			}
			throw new Error('Could not find answer in fullText');
	}
} 

function getPartial(fullText, clozePositions){ 
	var start = fullText.slice(0, clozePositions[0])}; 
	var end = fullText.slice(clozePositions[1],fullText.length); 
	return start+"..."+ end; 
	} 
}


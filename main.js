const model = {
	submitPressed:false,
	values : ["family","friends","community","environment","work","edu","rec","spiritual","health","partner"],
	valuePhrases : {
		"family":"family",
		"friends":"friends",
		"community":"community",
		"environment":"environment",
		"work":"work",
		"edu":"education",
		"rec":"fun/recreation",
		"spiritual":"spirituality",
		"health":"health, phsical well-being",
		"partner":"intamacy, partnership"
	},
	initialRank : []
};

const view = {
	valuesDiv : document.getElementById("values_list"),
	submitButton : document.getElementById("submit"),
	instructionSpan : document.getElementById("values_text"),
	resultsDiv : document.getElementById("results"),
	minValueSpan : document.getElementById("moreV"),
	maxValueSpan : document.getElementById("lessV"),
	valuesInput : {}
};
const controller = {
	getInitialValues : function(){
		// need to change sumbitPressed to true as this is used to tell which level the app is onabort
		// need to go through each of the values
		//     get the value (remember to parseInt) and save to the appropriate initial rank
		//     reset the value to "0" in the input 
		// update the instructios to consistent your actions are in relation to the value
		model.submitPressed = true;
		let v = ""
		for (let i = 0; i < model.values.length; i++){
			v = model.values[i];
			model.initialRank[i] = parseInt(view.valuesInput[v].value);
			view.valuesInput[v].value="0";			
		}
		view.instructionSpan.textContent = "consistent your actions are in relation to the value.";
	},
	updateResults : function(){
		// need to get the finalRank
		// hide the values Div
		// calculate the difference between the initial and final
		let minDiff = 1;
		let maxDiff = -1;
		let minValue = ""; //more time
		let maxValue = ""; //less time
		let v = "";
		let finalV = 0;
		let initialV = 0;
		let diff = 0;
		for (let i = 0; i < model.values.length; i++){
			v = model.values[i];
			initalV = model.initialRank[i];
			finalV = parseInt(view.valuesInput[v].value);
			diff = finalV-initialV;
			if (diff > maxDiff) {
				maxValue = v;
				maxDiff = diff;}
			if (diff < minDiff) {
				minValue = v;
				minDiff = diff;
				}
		}
		// update cntent in the div (not created yet) of which value you are spending too much time on and not enough time on
		view.valuesDiv.classList.add("hidden");
		view.minValueSpan.textContent=model.valuePhrases[minValue];
		view.maxValueSpan.textContent=model.valuePhrases[maxValue];
		view.resultsDiv.classList.remove("hidden");
	},
	submitPressed : function(){
		if (model.submitPressed){controller.updateResults();}
		else {controller.getInitialValues();}
	},
	init : function(){
		for (let i = 0; i < model.values.length; i++){
			view.valuesInput[model.values[i]] = document.getElementById(model.values[i])
			model.initialRank.push(0)
		}
		view.submitButton.addEventListener("click",controller.submitPressed);
	}
};

controller.init();
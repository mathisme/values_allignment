const model = {
	submitPressed:false,
	values : ["family","friends","community","environment","work","edu","rec","spiritual","health","partner"],
	initialRank : [],
	finalRank : [],
};

const view = {
	valuesDiv : document.getElementById("values_list"),
	submitButton : document.getElementById("submit"),
	instructionSpan : document.getElementById("values_text"),
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
		for (let i = 0; i < model.values.length; i++){
			let v = model.values[i];
			model.initialRank[i] = parseInt(view.valuesInput[v].value);
			view.valuesInput[v].value="0";			
		}
		view.instructionSpan.textContent = "consistent your action are in relation to the value.";
	},
	updateResults : function(){
		// need to get the finalRank
		// hide the values Div
		// calculate the difference between the initial and final
		// will want to keep the index of the greatest negative difference and greatest positive difference
		// update cntent in the div (not created yet) of which value you are spending too much time on and not enough time on
	},
	submitPressed : function(){
		if (model.sumbitPressed){controller.updateResults();}
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
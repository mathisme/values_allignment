const model = {
	valuesDiv : document.getElementById("values_list"),
	submitButton : document.getElementById("submit"),
	instructionSpan : document.getElementById("values_text"),
	valuesInput : {
		family : document.getElementById("family"),
		friends : document.getElementById("friends"),
		community : document.getElementById("community"),
		environment : document.getElementById("environment"),
		work : document.getElementById("work"),
		edu : document.getElementById("edu"),
		rec : document.getElementById("rec"),
		spiritual : document.getElementById("spiritual"),
		health : document.getElementById("health"),
		partner : document.getElementById("partner")
	}
};
const view = {};
const controller = {
	init : function(){}
};

controller.init();
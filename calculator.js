document.getElementById("answerBox").value = "";
document.getElementById("inputBox").value = "";

function getNumber (x) {
	var output = document.getElementById("inputBox");
	output.value += x;
}

function calculate () {
	boxValue = document.getElementById("inputBox").value;
	answer = eval(boxValue);
	document.getElementById("answerBox").value = answer;
	document.getElementById("inputBox").value = "";
}

function reset() {
	document.getElementById("answerBox").value = "";
	document.getElementById("inputBox").value = "";
}
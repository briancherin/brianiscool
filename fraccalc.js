var finalNumbers = {
	finalNum: 0,
	finalDen: 0
};


function get (value) {
	switch (value) {
		case 'num1':
			return parseInt(document.getElementById("numerator1").value);
			break;
		case 'num2':
			return parseInt(document.getElementById("numerator2").value);
			break;
		case 'den1':
			return parseInt(document.getElementById("denominator1").value);
			break;
		case 'den2':
			return parseInt(document.getElementById("denominator2").value);
			break;
	}
}



function calculate() {
	var operator = document.getElementById("operator").value;

	switch (operator) {
		case 'add':
			addFractions();
			break;
		case 'subtract':
			subtractFractions();
			break;
		case 'multiply':
			multiplyFractions();
			break;
		case 'divide':
			divideFractions();
			break;
	}
	
	simplify();
	
}

function addFractions() {
	var output = document.getElementById("resultValue");
	var num1 = get("num1");
	var num2 = get("num2");
	var den1 = get("den1");
	var den2 = get("den2");
	
	if (den1 == den2) output.innerHTML = ((num1 + num2) + " / " + den1);
	else output.innerHTML = ( ( (num1 * den2) + (den1 * num2) ) + " / " + (den1 * den2) );
	
	finalNumbers.finalNum = (num1 * den2) + (den1 * num2);
	finalNumbers.finalDen = (den1 * den2);
	
}

function subtractFractions() {
	var output = document.getElementById("resultValue");
	var num1 = get("num1");
	var num2 = get("num2");
	var den1 = get("den1");
	var den2 = get("den2");
	
	if (den1 == den2) output.innerHTML = ((num1 - num2) + " / " + den1);
	else output.innerHTML = ( ( (num1 * den2) - (den1 * num2) ) + " / " + (den1 * den2) );
	
	finalNumbers.finalNum = (num1 * den2) - (den1 * num2);
	finalNumbers.finalDen = (den1 * den2);
}

function multiplyFractions () {
	var output = document.getElementById("resultValue");
	var num1 = get("num1");
	var num2 = get("num2");
	var den1 = get("den1");
	var den2 = get("den2");
	
	output.innerHTML = ((num1 * num2) + " / " + (den1 * den2));
	
	finalNumbers.finalNum = (num1 * num2);
	finalNumbers.finalDen = (den1 * den2)
}

function divideFractions () {
	var output = document.getElementById("resultValue");
	var num1 = get("num1");
	var num2 = get("num2");
	var den1 = get("den1");
	var den2 = get("den2");
	
	output.innerHTML = ((num1 * den2) + " / " + (den1 * num2));
	
	finalNumbers.finalNum = (num1 * den2);
	finalNumbers.finalDen = (den1 * num2);
}

function simplify () {
	var num = finalNumbers.finalNum;
	var den = finalNumbers.finalDen;
	var numFactors = new Array();
	var denFactors = new Array();
	var commonFactors = new Array();
	var gcf = 1;
		
	for (var i = 0; i <= num; i++) {
		if (num % i == 0) {
			numFactors.push(i);
		}
	}
	for (var i = 0; i <= den; i++) {
		if (den % i == 0) {
			denFactors.push(i);
		}
	}

	//Find common factors
	for (var i = 0; i < numFactors.length || i < denFactors.length; i++) {
		for (var j = 0; j < numFactors.length || j < denFactors.length; j++) {
			if (numFactors[i] == denFactors[j]) {
				commonFactors.push(numFactors[i]);
			}
		}
	}

	for (var i = 0; i < commonFactors.length; i++){
		console.log(commonFactors[i]);
	}
	
	for (var i = 0; i < numFactors.length; i++){
		console.log("num " + numFactors[i]);
	}
	
	for (var i = 0; i < denFactors.length; i++){
		console.log("den " + denFactors[i]);
	}

	//Find greatest common factor
	for (var i = 0; i < commonFactors.length; i++) {
		if (commonFactors[i] > gcf) {
			gcf = commonFactors[i];
		}
	}
	
	//Divide num and den by gcf
	num = num/gcf;
	den = den/gcf;

	var finalSimplified = finalNumbers.finalNum + "/" + finalNumbers.finalDen;
	document.getElementById("simplifiedValue").innerHTML = num + "/" + den;
}
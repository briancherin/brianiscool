//Sell plants for money, then once x moneys are gotton, createNewElement('button') to buy cow, 
	//then make leather and stuff and make recipes and more advanced stuff
//Or maybe buy an egg, then hatch a random animal(sheep, cow, pig, etc.), then get resources from that
//Animal pen! ASCII Art! add them when you get new egg

//Testing createElement:
/*function testCreate(){
	var button = document.createElement('button');
	var t = document.createTextNode("Click Me");
	button.appendChild(t);
	button.setAttribute('onclick', 'freeMoney()');
	document.getElementById('addButton').appendChild(button);
	
}*/


var money = 10.00;
var seedCost = 0.25;
var eggCost = 100;

var seeds = 0;
var plants = 0;
var eggs = 0;
var animals = {pig:0, cow:0, sheep:0, chicken:0};
var food = 0;

var growPlantActivated = false;
var sellPlantsActivated = false;
var buyEggActivated = false;
var hatchEggActivated = false;
var slaughterPigActivated = false;
var slaughterCowActivated = false;
var slaughterSheepActivated = false;
var slaughterChickenActivated = false;



//Do this every time a button is clicked
function clickButton(){
	displayAllInventory();
	checkForNew();
}

//Check if new button should appear
function checkForNew(){

	//grow plant
	if (seeds >= 4 && growPlantActivated === false) {
		createNewGrowPlant();
		growPlantActivated = true;
	}
	//sell plant
	if(plants >= 4 && sellPlantsActivated === false) {
		createNewSellPlants();
		sellPlantsActivated = true;
	}
	//buy egg
	if(money >= eggCost && buyEggActivated === false) {
		createNewBuyEgg();
		buyEggActivated = true;
	}
	//hatch egg
	if (eggs >= 1 && hatchEggActivated === false){
		createNewHatchEgg();
		hatchEggActivated = true;
	}
	
	//slaughter animals:
	if (animals.pig > 0 && slaughterPigActivated === false) {
		createNewSlaughterPig();
		slaughterPigActivated = true;
	}
	if (animals.chicken > 0 && slaughterChickenActivated === false) {
		createNewSlaughterChicken();
		slaughterChickenActivated = true;
	}
	if (animals.sheep > 0 && slaughterSheepActivated === false) {
		createNewSlaughterSheep();
		slaughterSheepActivated = true;
	}
	if (animals.cow > 0 && slaughterCowActivated === false) {
		createNewSlaughterCow();
		slaughterCowActivated = true;
	}
	
	
}



//refresh inventory and money
function displayAllInventory(){
	document.getElementById('money').innerHTML = money;
	document.getElementById('seeds').innerHTML = seeds;
	document.getElementById('plants').innerHTML = plants;
	document.getElementById('eggs').innerHTML = eggs;
	document.getElementById('pigs').innerHTML = animals.pig;
	document.getElementById('cows').innerHTML = animals.cow;
	document.getElementById('sheep').innerHTML = animals.sheep;
	document.getElementById('chickens').innerHTML = animals.chicken;
	
}

//Write a message to the message box
function writeMessage(message){
	var box = document.getElementById('messages');
	box.innerHTML = message + "<br />" + box.innerHTML;
	//newLabel('cowLabel', "Cows: ", "cow");
}


//Create a new button
function newElement(element, text, a1, d1, a2, d2, spanId){
	var button = document.createElement(element);
	var t = document.createTextNode(text);
	button.appendChild(t);
	button.setAttribute(a1, d1);
	button.setAttribute(a2, d2);
	document.getElementById(spanId).appendChild(button);
}

//Create a new label in inventory
function newLabel(spanId, text, labelValue){
	document.getElementById(spanId).innerHTML = text;
	document.getElementById(labelValue).innerHTML = 0;
}


//Buy a seed
function buySeed(){
	if (money - seedCost >= 0) {
	
		seeds += 1;
		money -= seedCost;
		
	
		clickButton();
		changeHunger(0.1, "add");
		writeMessage("You bought a seed.");
	}
	else{
		writeMessage("not enough money.");
	}
}

function createNewGrowPlant() {
	newElement('button', 'Grow plant (-4 seeds)', 'id', 'growPlant', 'onclick', 'growPlant()', 'growPlantLocation');
}	


//Grow a plant
function growPlant() {
	if (seeds >= 4) {
		
		plants += 1;
		seeds -= 4;
		
		clickButton();
		changeHunger(0.34, "add");
		writeMessage("You grew a plant.");

	}
	else {
		writeMessage("not enough seeds");
	}
}

//Create sellPlants button
function createNewSellPlants(){
	newElement('button', 'Sell Plants(-4 plants, +16)', 'id', 'sellPlants', 'onclick', 'sellPlants()', 'sellPlantsLocation');
}

//Sell plant
function sellPlants(){
	if(plants >= 4) {
		
		money += 16;
		plants -= 4;
		
		clickButton();
		changeHunger(0.4, "add");
		writeMessage("You sold four plants");
	}
	else{
		writeMessage("not enough plants.");
	}
}

//Create buyEgg button
function createNewBuyEgg(){
	newElement('button', 'Buy egg(-$100, +1 egg)', 'id', 'buyEgg', 'onclick', 'buyEgg()', 'buyEggLocation');
}

//Buy egg
function buyEgg(){
	if (money >= eggCost) {
		eggs += 1;
		money -= eggCost;
		
		clickButton();
		changeHunger(0.34, "add");
		writeMessage("You bought one egg");
	}
	else{
		writeMessage("not enough money.");
	}
}

//create hatchEgg button
function createNewHatchEgg(){
	newElement('button', 'Hatch egg(-1 egg, +1 animal)', 'id', 'hatchEgg', 'onclick', 'hatchEgg()', 'hatchEggLocation');
}

//Hatch egg
function hatchEgg(){
	if (eggs >= 1) {
		eggs -=1;
		
		var whichAnimal = randomAnimal();
		
		clickButton();
		writeMessage("egg hatched a " + whichAnimal);
		changeHunger(1, "add");
		newAnimal(whichAnimal);
	}
	else {
		writeMessage("no eggs to hatch");
	}
}

//Pick a random animal to hatch from egg
function randomAnimal(){
	var animals = ['pig', 'cow', 'sheep', 'chicken'];
	var num = Math.floor(Math.random() * animals.length);
	var pick = animals[num];
	return pick;
}

 function newAnimal(displayAnimal) {
 	switch(displayAnimal){
 		case 'pig':
            animalPics.pig();
            animals.pig += 1;
            break;
        case 'cow':
       		animalPics.cow();
       		animals.cow += 1;
            break;
        case 'sheep':
        	animalPics.sheep();
        	animals.sheep += 1;
        	break;
        case 'chicken':
        	animalPics.chicken();
        	animals.chicken += 1;
        	break; 
    }
	displayAllInventory();
}

//Create pictures in animal pen
var animalPics = {
	pig: function() {newElement('img', null, 'id', 'pig', 'src', 'pig.png', 'animalPen'); },
	cow: function() {newElement('img', null, 'id', 'cow', 'src', 'cow.png', 'animalPen'); },
	sheep: function() {newElement('img', null, 'id', 'sheep', 'src', 'sheep.png', 'animalPen'); },
	chicken: function() {newElement('img', null, 'id', 'chicken', 'src', 'chicken.png', 'animalPen'); }
};

//Slaughter animal buttons:
function createNewSlaughterCow() {
	newElement('button', 'Slaughter cow for resources(- 1 cow)', 'id', 'slaughterCow', 'onclick', 'slaughterAnimal("cow")', 'slaughterAnimalLocation');
} 
function createNewSlaughterSheep() {
	newElement('button', 'Slaughter sheep for resources(- 1 sheep)', 'id', 'slaughterSheep', 'onclick', 'slaughterAnimal("sheep")', 'slaughterAnimalLocation');
} 
function createNewSlaughterChicken() {
	newElement('button', 'Slaughter chicken for resources(- 1 chicken)', 'id', 'slaughterChicken', 'onclick', 'slaughterAnimal("chicken")', 'slaughterAnimalLocation');
} 
function createNewSlaughterPig() {
	newElement('button', 'Slaughter pig for resources(- 1 pig)', 'id', 'slaughterPig', 'onclick', 'slaughterAnimal("pig")', 'slaughterAnimalLocation');
} 


//Modify hunger bar
var totalWidth = 145;
var width = totalWidth;
function changeHunger(amt, addOrNo) {
	var bar = document.getElementById('hungerProgressBar');
	if (addOrNo === "add"){
		if (width - amt > 0){
			width -= amt;
			var bar = document.getElementById('hungerProgressBar');
			bar.style.width = width + 'px';
		} else {
			writeMessage("You died of hunger!");
			alert("You died of hunger! Click okay to reset game.");
			history.go(0);
		}
	}
	if (addOrNo === "subtract") {
		if (width + amt <= totalWidth) {
			width += amt;
			bar.style.width = width + 'px';
		}
		else {
			bar.style.width = totalWidth + 'px';
		}
	}
}


function slaughterAnimal(breed) {
	if (animals[breed] >= 1) {
		var animal = document.getElementById(breed);
		animal.remove();
		animals[breed] -= 1;
		clickButton();

		changeHunger(35, "subtract");
		writeMessage(breed + " slaughtered");
	}
	else {
		writeMessage("none to slaughter");
	}
} 
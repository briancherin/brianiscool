//repeat text
function clickButton() {
	var input = document.getElementById("getText").value;
	
	if (input !="") {
		alert("You typed: " + input);
	}
	else {
		alert("Please type something in!");
	}
}


//COOKIES from http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

//END of COOKIES code



//change subtitle text on home page
var change = {
	toggle: true
}

function stupid() {
	if (change.toggle){
		document.getElementById("not").innerHTML = "HAHA lol Just kidding!!! BRIAN'S COOLER THAN YOU!";
		change.toggle = false;
	}
	else {
		document.getElementById("not").innerHTML = "YOU ARE THE COOLEST";
		change.toggle = true;

	}
}



//change background to what typed in
function changeBackground() {
	var color = document.getElementById("changeBackground").value;
	document.body.style.background = color;
	
	switch  (color.toLowerCase()) {
		case 'frac':
			window.location.href = 'fraccalc.html';
			break;
		case 'roll-a-ball':
			window.location.href = 'Roll-a-Ball/Roll-a-Ball.html';
			break;
		case 'eroll-a-ball':
			window.location.href = 'ERoll-a-Ball/ERoll-a-Ball.html';
		case 'numbers':
			window.location.href = 'numbergame.html';
	}
	
	createCookie("color", color, 7);
}

/*
//Show options for background colors
function backgroundChoices() {
	var span = document.getElementById('backGroundChoices');
	var text = "Try these:\nColor, AliceBlue, AntiqueWhite, Aqua, Aquamarine, Azure, Beige, Bisque, Black, BlanchedAlmond, Blue, BlueViolet, Brown, BurlyWood, CadetBlue, Chartreuse, Chocolate, Coral, CornflowerBlue, Cornsilk, Crimson, Cyan, DarkBlue, DarkCyan, DarkGoldenRod, DarkGray, DarkGreen, DarkKhaki, DarkMagenta, DarkOliveGreen, DarkOrange, DarkOrchid, DarkRed, DarkSalmon, DarkSeaGreen, DarkSlateBlue, DarkSlateGray, DarkTurquoise, DarkViolet, DeepPink, DeepSkyBlue, DimGray, DodgerBlue, FireBrick, FloralWhite, ForestGreen, Fuchsia, Gainsboro, GhostWhite, Gold, GoldenRod, Gray, Green, GreenYellow, HoneyDew, HotPink, IndianRed, Indigo, Ivory, Khaki, Lavender, LavenderBlush, LawnGreen, LemonChiffon, LightBlue, LightCoral, LightCyan, LightGoldenRodYellow, LightGray, LightGreen, LightPink, LightSalmon, LightSeaGreen, LightSkyBlue, LightSlateGray, LightSteelBlue, LightYellow, Lime, LimeGreen, Linen, Magenta, Maroon, MediumAquaMarine, MediumBlue, MediumOrchid, MediumPurple, MediumSeaGreen, MediumSlateBlue, MediumSpringGreen, MediumTurquoise, MediumVioletRed, MidnightBlue, MintCream, MistyRose, Moccasin, NavajoWhite, Navy, OldLace, Olive, OliveDrab, Orange, OrangeRed, Orchid, PaleGoldenRod, PaleGreen, PaleTurquoise, PaleVioletRed, PapayaWhip, PeachPuff, Peru, Pink, Plum, PowderBlue, Purple, Red, RosyBrown, RoyalBlue, SaddleBrown, Salmon, SandyBrown, SeaGreen, SeaShell, Sienna, Silver, SkyBlue, SlateBlue, SlateGray, Snow, SpringGreen, SteelBlue, Tan, Teal, Thistle, Tomato, Turquoise, Violet, Wheat, White, WhiteSmoke, Yellow, YellowGreen"; 

	span.innerHTML = text;
}
*/



var hardmodetoggle = false;
var numlimit = 100;

function hardmode() {
	hardmodetoggle = true;
	var limit = document.getElementById("numlimit");
	limit.innerHTML = 1000;
	numlimit = 1000;
}


//number game Object
var numberGame = {
	number: this.number = Math.floor(Math.random()*(numlimit) + 1),
	turns: 5,
	hardmode: this.hardmode,
	numlimit: this.numlimit,
	
	newNumber: function() {
		this.number = Math.floor(Math.random()*(numlimit) + 1);
		console.log(number);
	},
	
	checkGuess: function(guess) { 
		
		
		if (guess == this.number){
			alert("You're right! You win! \n\n I will reset the game for you now.");
			this.reset();
		}

		else if (guess > numlimit) {
			alert("NOT COOL. I said from 1 to " +  numlimit + ". UGH. You never listen.");
		}

		else if (guess > this.number){
			this.turns--;
			alert("Too high! \n\n You have " + this.turns + " turns left.");
		}

		else if (guess < this.number){
			this.turns--;
			alert("Too low! \n\n You have " + this.turns + " turns left.");
		}
		
		if (this.turns == 0) {
			alert("You ran out of turns! The answer was " + this.number + "\n\n I will reset the game now.");
			this.reset();
		}
			
		var turnsLeft = document.getElementById('turnsLeft');
		turnsLeft.innerHTML = "Turns Remaining: " + this.turns;

	},
	
	reset: function() {
		this.newNumber();
		this.turns = 5;
		turnsLeft.innerHTML = "Turns Remaining: " + this.turns;
		document.getElementById('numberGameInput').value = "";
	},
	
	giveUp: function() {
		
		alert("Too bad! YOU ARE NOT COOL! You couldn't even guess a simple number. You should be ashamed of yourself. \n\n Better luck next time . . . NOT! \n\n The number was " + this.number + " . Press okay to start another game.");
		
		this.reset();

	}
}
//Number Game 
function guessNumber() {
	var guess = document.getElementById('numberGameInput').value;	
	numberGame.checkGuess(guess);
}

//Number Game
function giveUp() {
	numberGame.giveUp();
}





//Hello page:

//hello red
function red(){
	document.getElementById('hello').style.color='red';
}

//hello page goodbye
function goodbye(){
	document.getElementById('firstL').style.color='green';
}

//under goodbye
function undoGoodbye() {
	document.getElementById('firstL').style.color='';
}

//make marquee
function makeMarquee(){
	var marq = document.createElement('marquee');
	var node = document.createTextNode("Catch me if you can!");
	marq.appendChild(node);
	marq.setAttribute('id', 'catchMarquee');
	marq.setAttribute('scrollamount', '200');
	//marq.setAttribute('behavior', 'alternate');
	marq.setAttribute('onClick', "parent.location='cupcake.png'");
	document.getElementById('toMove').appendChild(marq);
}

/*function testCreate(){
	var button = document.createElement('button');
	var t = document.createTextNode("Click Me");
	button.appendChild(t);
	button.setAttribute('onclick', 'freeMoney()');
	document.getElementById('addButton').appendChild(button);
	
}*/




//From randomcolour.com
function randomColour() {
	var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);
      document.body.style.background = bg_colour;
}

function popupFun () {
	for (var i=100; i >0; i--) {
		alert("Countdown from: " + i);
	}
}

function getName () {


}

/*
Assignment: Project 3 - The Oregon Trail
File:       proj3.js
Class:      CMSC433 (Summer 2019)
Group:      Timothy Coffelt, Katherine Lehew, Jake Klemp
Description: 
*/

var playMusic=true;
var ctrlDown = false;
var ctrlKey = 17;
var inACity = true;    

/*window.addEventListener("keydown", function(e) {
    	
    if (e.keyCode == ctrlKey) {
    	ctrlDown = true;
    }
    
    if (ctrlDown && (e.keyCode == 83)){
    	toggleMusic();
    }
    
});

window.addEventListener("keyup", function(e) {
	
    if (e.keyCode == ctrlKey) {
    	ctrlDown = false;
    }
});*/


var userInput = document.getElementById("choice");
userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		getChoice(userInput.value);
	}
	if(event.key === "a"){
		redirectToTitle();
	}
});



// this was all just brainstorming I was doing
function getChoice( val ) {
	if ( val >= 1 && val <= 6 ) {
		if ( val == 1 ) {travelTrail();}
		if ( val == 2 ) {learnTrail();}
		if ( val == 3 ) {viewHighScores();}
		if ( val == 4 ) {toggleMusic();}
		if ( val == 5 ) {displayMgmtOptions();}
		if ( val == 6 ) {quitGame();}
	}
	else {
	    // can be removed, was here for testing.
		console.log("I went to the else");
		
	}
}

function getMgmtInput( val ) {
	if ( val >= 1 && val <= 8 ) {
		if ( val == 1 ) {seeTopTen(val);}
		if ( val == 2 ) {seeTopTen(val);}
		if ( val == 3 ) {eraseTopTen(val);}
		if ( val == 4 ) {getDB(val);} // not implemented yet
		if ( val == 5 ) {getDB(val);} // not implemented yet
		if ( val == 6 ) {activateJoystick();} // not implemented
		if ( val == 7 ) {calibrateJoystick();} // not implemented
		if ( val == 8 ) {redirectToTitle();}
	}
}

// Option 1, Travel the trail.
function travelTrail(){
    
    begin();
}

// Option 2, Learn about the trail.
function learnTrail(){
	document.getElementById("spaceBarPrompt").style.display="block";
	document.getElementById("titlePageOptions").innerHTML = 
		"<p> Try taking a journey by covered wagon across 2000 miles of plains."  +
		"Try!  On the plains, will you slosh your oxen through mud and water-filled ruts" +
		"or will you plod through dust six inches deep?</p>";
	var page_number=1;
	document.body.onkeyup = function(event){
		console.log("there has been a key.");
		if(event.key === ' ' && page_number === 1){
			document.getElementById("titlePageOptions").innerHTML = 
				"<p> How will you cross the rivers? If you have money, you might take a ferry (if there is a ferry). Or, you can ford the river and hope you and your wagon aren't swallowed alive!</p>";
			page_number=2;
		}
		else if(event.key === ' ' && page_number === 2){
			document.getElementById("titlePageOptions").innerHTML = 
				"<p>What about supplies? Well, if you're low on food you can fish. " +
				"You might get a trout....you might. And there are bear in the mountains.</p>";
			page_number=3;
		}
		else if(event.key === ' ' && page_number === 3){
			document.getElementById("titlePageOptions").innerHTML = 
				"<p>At the Dalles, you can try navigating the Columbia River, but " +
				"if running the rapids with a makeshift raft makes you queasy, better take " +
				"the Barlow Road.</p>";
			page_number=4;
		}
		else if(event.key === ' ' && page_number === 4){
			document.getElementById("titlePageOptions").innerHTML = 
				"<p>If for some reason you don't survive -- your wagon burns, or thieves " +
				"steal your oxen, or you run out of provision, or you die of cholera -- don't " +
				"give up!  Try again...and again... until your name is up with the others on the " +
				"Oregon Top Ten</p>";
			page_number=5;
		}
		else if(event.key === ' ' && page_number === 5){
			document.getElementById("titlePageOptions").innerHTML = 
				"<h2>Control-S key</h2>" +
				"<p>You may turn the sound on or off during the program by pressing Control-S.</p>";
			page_number=6;
		}
		else if(event.key === ' ' && page_number === 6){
			document.getElementById("titlePageOptions").innerHTML = 
				"<h2>Esc key</h2>" +
				"<p>You may want to quit in the middle of the program. If so, press the Escape " +
				"(Esc) key twice whenever the computer is waiting for a response.</p>";
			page_number=7;
		}
		else if(event.key === ' ' && page_number === 7){
			document.getElementById("titlePageOptions").innerHTML = 
				"<p>The software team responsible for the creation of this product includes:</p>" +
				"<p>Ed Gratz</p>" +
				"<p>Charolyn Kapplinger</p>" +
				"<p>Mark Paquette</p>" +
				"<p>Larry Phenow</p>" +
				"<p>Julie Redland</p>";
			page_number=8;
		}
		else if(event.key === ' ' && page_number === 8){
			document.getElementById("titlePageOptions").innerHTML = 
				"<p>The software team responsible for this web implementation includes:</p>" +
				"<p>Katherine Lehew</p>" + 
				"<p>Jacob Klemp</p>" +
				"<p>Timothy Coffelt</p>";
			page_number=9;
		}
		else if(event.key === ' ' && page_number === 9){
			window.location ='OregonTrailTitleScreen.html';
		}
		else{}
	}
}
// Option 4
function toggleMusic(){
	var titleMusic = document.querySelector('audio');
	if(playMusic === true){
		titleMusic.loop = true;
		titleMusic.play();
		playMusic=false;
	}
	else{
		titleMusic.pause();
		playMusic=true;
	}
}

// Option 5
function displayMgmtOptions() {
	document.getElementById("spaceBarPrompt").style.display="none";
	document.getElementById("mainPage").innerHTML =
		"<div id='mgmtPage'>" +
		"<div class='mgmtHeader'>The Oregon Trail</div>" +
		"<div class='mgmtHeader'>Version 2.0</div>" +
		"<h1><span class='underline'></span></h1>" +
		"<div class='mgmtHeader'>Management Options</div>" +
		"<div id='titlePageOptions'>" +
		"You may:" +
		"<ol>" +
			"<li>See the current Top Ten list</li>" +
			"<li>See the original Top Ten list</li>" +
			"<li>Erase the current Top Ten list</li>" +
			"<li>Erase the tombstone messages</li>" +
			"<li>Erase saved games</li>" +
			"<li>Turn joystick on</li>" +
			"<li>Calibrate joystick</li>" +
			"<li>Return to the main menu</li>" +
		"</ol>" +
		"What is your choice? " +
		"<input type='text' autofocus='' class='cursor' id='mgmtInput' onkeydown='getMgmtInput(this)'>" +
		"</div></div>" +
		"<center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";

	// Get user input from management options menu
	var userOption = document.getElementById("mgmtInput");
	userOption.addEventListener("keyup", function(event) {
		if(event.key === "Enter"){
			getMgmtInput(userOption.value);
		}
		if(event.key === "a"){
			redirectToTitle();
		}
	});
}

// Connect to database for viewing and editing
function openDB(val) {
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("mgmtPage").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "DB.php?q="+val, true);
	xhttp.send();
}


/* Still needs to be implemented
function viewHighScores() {
	document.getElementById("mainPage").innerHTML = seeTopTen(1); // option for current high scores
}
*/


// View Top Ten lists
function seeTopTen(val) {
	openDB(val);
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayMgmtOptions();
		}
		if(event.key === "a"){
			redirectToTitle();
		}
	};
}

// Option 6
function quitGame(){
	window.location='quitGame.html';
	
}
// This function gets called after option 6 is used.
function redirectToTitle(){
	window.location='OregonTrailTitleScreen.html';
}


// For making these classes I used this information:
// https://stackoverflow.com/questions/812961/getters-setters-for-dummies
// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
class Person{
	constructor(name){
		this.name = name;
		this.health = "good";
	}
	
	get personName(){
		return this.name;
	}
	
	set personName(name){
		this.name = name;
	}
	
	get personHealth(){
		return this.health;
	}
	
	set personHealth(health){
		this.health = health;
	}
}

class Wagon{
	constructor(){
		this.money = 0;
		this.people = [];
		this.oxen = 0;
		this.food = 0;
		this.clothing = 0;
		this.fishBait = 0;
		this.wagonWheel = 0;
		this.wagonAxle = 0;
		this.wagonTongue = 0;
		this.wagonLeader;
		this.characterClass;
		this.generalStoreBill = 0;
		this.averageHealth = "good";
	    this.averageHealthRating = 1;
	    this.pace = 10;
	}
	
	setcharacterClass(charclass){
		this.characterClass = charclass;}
	
	setwagonLeader(leader){
		this.wagonLeader = leader;}
	
	setInitialMoney(characterClass){
		if(characterClass == "banker"){
			this.money = 1600;
		}
		if(characterClass == "carpenter"){
			this.money = 800;
		}
		if(characterClass == "farmer"){
			this.money = 400;
		}
	}
	
	purchaseOxen(numberOfYoke){
		var totalCost = numberOfYoke * 40; 
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		// Two oxen per yoke.
		var newOxenNumber = this.oxenNumber + (numberOfYoke * 2);
		
		//this.wagonMoney = newTotalMoney;
		this.oxenNumber = newOxenNumber;
		
		// Was able to buy what I needed.
		return true;
	}
	
	purchaseFood(poundsOfFood){
		var totalCost = poundsOfFood * .20;
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		var newFoodAmount = parseInt(this.poundsOfFood) + parseInt(poundsOfFood);
		
		//this.wagonMoney = newTotalMoney;
		this.poundsOfFood = newFoodAmount;
		
		// Was able to buy what I needed.
		return true;
	}
	
	purchaseClothing(setsOfClothes){
		var totalCost = setsOfClothes * 10;
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		var newClothingAmount = this.setsOfClothes + setsOfClothes;
		
		//this.wagonMoney = newTotalMoney;
		this.setsOfClothes = newClothingAmount;
		
		// Was able to buy what I needed.
		return true;
	}
	
	purchaseBait(numberOfBaitBoxes){
		var totalCost = numberOfBaitBoxes * 2;
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		var newBaitAmount = this.fishBaitCount + (numberOfBaitBoxes * 20);
		
		//this.wagonMoney = newTotalMoney;
		this.fishBaitCount = newBaitAmount;
		
		// Was able to buy what I needed.
		return true;
	}
	
	purchaseWagonWheels(numberOfWagonWheels){
		var totalCost = numberOfWagonWheels * 10;
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		var newWagonWheelAmount = this.wagonWheelCount + numberOfWagonWheels;
		
		//this.wagonMoney = newTotalMoney;
		this.wagonWheelCount = newWagonWheelAmount;
		
		// Was able to buy what I needed.
		return true;
	}
	
	purchaseWagonAxles(numberOfWagonAxles){
		var totalCost = numberOfWagonAxles * 10;
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		var newWagonAxleAmount = this.wagonAxleCount + numberOfWagonAxles;
		
		//this.wagonMoney = newTotalMoney;
		this.wagonAxleCount = newWagonAxleAmount;
		
		// Was able to buy what I needed.
		return true;
	}
	
	purchaseWagonTongues(numberOfWagonTongues){
		var totalCost = numberOfWagonTongues * 10;
		if(this.wagonMoney < totalCost){
			// Can't buy because you don't have enough money.
			return false;
		}
		
		var newTotalMoney = this.wagonMoney - totalCost;
		var newWagonTongueAmount = this.wagonTongueCount + numberOfWagonTongues;
		
		//this.wagonMoney = newTotalMoney;
		this.wagonTongueCount = newWagonTongueAmount;
		
		// Was able to buy what I needed.
		return true;
	}
	
	get wagonMoney(){
		return this.money;
	}
	
	set wagonMoney(money){
		this.money = money;
	}
	
	// Gets a specific person object from the people array.
	getNumberPeople(arrayIndex){
		return this.people[arrayIndex];
	}
	
	// Adds a person to the people array when given an index
	setNumberPeople(personObject, arrayIndex){
		this.people[arrayIndex] = personObject;
	}
	
	get oxenNumber(){
		return this.oxen;
	}
	
	set oxenNumber(oxen){
		this.oxen = oxen;
	}
	
	get poundsOfFood(){
		return this.food;
	}
	
	set poundsOfFood(food){
		this.food = food;
	}
	
	get setsOfClothes(){
		return this.clothing;
	}
	
	set setsOfClothes(clothing){
		this.clothing = clothing;
	}
	
	get fishBaitCount(){
		return this.fishBait;
	}
	
	set fishBaitCount(fishBait){
		this.fishBait = fishBait;
	}
	
	get wagonWheelCount(){
		return this.wagonWheel;
	}
	
	set wagonWheelCount(wagonWheel){
		this.wagonWheel = wagonWheel;
	}
	
	get wagonAxleCount(){
		return this.wagonAxle;
	}
	
	set wagonAxleCount(wagonAxle){
		this.wagonAxle = wagonAxle;
	}
	
	get wagonTongueCount(){
		return this.wagonTongue;
	}
	
	set wagonTongueCount(wagonTongue){
		this.wagonTongue = wagonTongue;
	}
}

class Game {
	constructor(){
	this.startMonth = "";
	this.month = 0;
	this.day = 1;
	this.year = 1848;
	this.weather = "good";
	this.nextLandmark = 102;
	this.milesTraveled = 0;
	this.pace = "steady";
	this.foodRations = "filling";
	this.rest = 0;
	this.currentCity = "Kansas River Crossing";
	}
}

let testgame = new Game();
let testwagon = new Wagon();

function begin(){

	document.getElementById("titlePageOptions").innerHTML =
		"Many kinds of people made the trip to Oregon.<br><br>"+
	"You may:"+
	"<ol>"+
	    "<li>Be a banker from Boston</li>"+
		"<li>Be a carpenter from Ohio</li>"+
		"<li>Be a farmer from Illinois</li>"+
		"<li>Find out the difference between these choices</li>"+
	"</ol>"+
	"What is your choice? "+
	"<input type='text' autofocus='' class='cursor' id='charChoice' onkeydown='getCharChoice(this)'>";

	var playMusic=true;

	var userInput = document.getElementById("charChoice");
	userInput.addEventListener("keyup", function(event) {
		if(event.key === "Enter"){
			getCharChoice(userInput.value);
		}
});}


	function getCharChoice( val ) {
		if ( val >= 1 && val <= 6 ) {
			if ( val == 1 ) {selectBanker();}
			if ( val == 2 ) {selectCarpenter();}
			if ( val == 3 ) {selectFarmer();}
			if ( val == 4 ) {learnDifferences();}
		}
	}

	// Store character choice here, use mysql to store?
	var character;

	// Option 1
	function selectBanker(){
	character = "banker";
	console.log(character);
	testwagon.characterClass = character;
	console.log(testwagon.characterClass);
	testwagon.setInitialMoney(character);
	console.log(testwagon.money);
	intro2();
	}

	// Option 2
	function selectCarpenter(){
	character = "carpenter";
	console.log(character);
	testwagon.characterClass = character;
	testwagon.setInitialMoney(character);
	intro2();
	}

	// Option 3
	function selectFarmer(){
	character = "farmer";
	console.log(character);
	testwagon.characterClass = character;
	testwagon.setInitialMoney(character);
	intro2();
	}

	// Option 4, Learn the differences between characters
	function learnDifferences(){
		document.getElementById("spaceBarPrompt").style.display="block";
		document.getElementById("titlePageOptions").innerHTML = "<p> Traveling to Oregon isn't easy! But if you're a banker, you'll have more money for supplies and services than a carpenter or a farmer. </p><p> However, the harder you have to try, the more points you deserve! Therefore, the farmer earns the greatest number of points and the banker earns the least.</p>";
		var page_number=1;
		document.body.onkeyup = function(event){
			if(event.key === ' ' && page_number === 1){
				begin();
			}
			else{}
		}
	}

	function intro2(){
		document.getElementById("mainPage").innerHTML =
		"<center><img src='intro2.png'><br></center>"+
		"<p>What is the first name of the wagon <br>leader? " +
		"<input type='text' autofocus='' class='cursor' id='partyLeaderChoice'>";
		
		var userInput = document.getElementById("partyLeaderChoice");
		userInput.addEventListener("keyup", function(event) {
		if(event.key === "Enter"){
			getPartyLeader(userInput.value);
		}
	});
		}

	function getPartyLeader( val ) {
		if(event.key === "Enter"){
		var wagonLeadervar = val;
		console.log(wagonLeadervar);
		testwagon.setwagonLeader(wagonLeadervar);
		console.log(testwagon.wagonLeader);
		intro3();
		}
	}

	function intro3(){
		document.getElementById("mainPage").innerHTML =
		"<center><img src='intro2.png'><br></center>"+
		"<p>What are the first names of the four other members in your party?"+
	"<ol id = 'dynamicList'>"+
	    "<li id = '1'></li>"+
	"</ol>"+
	"Enter name here: <input type='text' onclick='this.value=''' class='cursor' id='partymember' onkeydown='getPartyMember(this)' value=''>"+
	"<p id='next'></p>";
		document.getElementById('1').innerHTML = testwagon.wagonLeader;
		var userInput = document.getElementById("partymember");
		userInput.addEventListener("keyup", function(event) {
		if(event.key === "Enter"){
			//getPartyMember(userInput.value);
		}
	});
		}
		
	var index = 0;
	var party1;
	var party2;
	var party3;
	var party4;
	var answer;

	function getPartyMember() {
		if (event.key === "Enter" && index < 4){
			if (index === 0){
			party1 = document.getElementById("partymember").value;}
			else if (index === 1){
			party2 = document.getElementById("partymember").value;}
			else if (index === 2){
			party3 = document.getElementById("partymember").value;}
			else if (index === 3){
			party4 = document.getElementById("partymember").value;}
		var ol = document.getElementById("dynamicList");
		var candidate = document.getElementById("candidate");
		var li = document.createElement("li");
		li.setAttribute('id',dynamicList.value);
		li.appendChild(document.createTextNode(document.getElementById("partymember").value));
		ol.appendChild(li);
		index++;
		console.log(party1);
		console.log(party2);
		console.log(party3);
		console.log(party4);
		if (index >= 4){
		console.log("next")
		
		document.getElementById("next").innerHTML = "Are these names correct?(y/n): <input type='text' class='cursor' id='answer' value=''>";
		var userInput = document.getElementById("answer");
		console.log("before the function call");
		moveOn1();
		userInput.addEventListener("keyup", function(event) {
		if (event.key === "Enter"){
			moveOn1();
		}
	});
	}}}

	function moveOn1(){
		answer = document.getElementById("answer").value;
		console.log(answer);
		if (answer == "y"){
		testwagon.people.push(party1);
		testwagon.people.push(party2);
		testwagon.people.push(party3);
		testwagon.people.push(party4);
		console.log(testwagon.people[0]);
		console.log(testwagon.people[1]);
		console.log(testwagon.people[2]);
		console.log(testwagon.people[3]);
		intro4();}
		}
		
	function intro4(){
		document.getElementById("mainPage").innerHTML =
		"<img src='OregonTrailTitleTop.png'>"+
		"<div id='titlePageOptions'>"+
		"It is 1848. Your jumping off place for Oregon is Independence, Missouri. You must decide which month to leave Independence.<br>"+
	"<ol>"+
	    "<li>March</li>"+
		"<li>April</li>"+
		"<li>May</li>"+
		"<li>June</li>"+
		"<li>July</li>"+
		"<li>Ask for advice</li>"+
	"</ol>"+
	"What is your choice? "+
	"<input type='text' autofocus='' class='cursor' id='monthChoice' onkeydown='getMonthChoice(this)'></div>"+
	"<center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>"+
	"<img src='OregonTrailTitleBottom.png'>";
		
		var userInput = document.getElementById("monthChoice");
		userInput.addEventListener("keyup", function(event) {
		if(event.key === "Enter"){
			getMonthChoice(userInput.value);
		}
	});
		}
		
	function getMonthChoice( val ) {
		if ( val >= 1 && val <= 6 ) {
			if ( val == 1 ) {selectMarch();}
			if ( val == 2 ) {selectApril();}
			if ( val == 3 ) {selectMay();}
			if ( val == 4 ) {selectJune();}
			if ( val == 5 ) {selectJuly();}
			if ( val == 6 ) {askAdvice();}
		}
	}

	// Store month choice here
	var month;
	var money = "placeholder";

	// Option 1
	function selectMarch(){
	month = "March";
	console.log(month);
	testgame.month = month;
	console.log(testgame.month);
	moveOn();
	}

	// Option 2
	function selectApril(){
	month = "April";
	console.log(month);
	testgame.month = month;
	console.log(testgame.month);
	moveOn();
	}

	// Option 3
	function selectMay(){
	month = "May";
	console.log(month);
	testgame.month = month;
	console.log(testgame.month);
	moveOn();
	}

	// Option 4
	function selectJune(){
	month = "June";
	console.log(month);
	testgame.month = month;
	console.log(testgame.month);
	moveOn();
	}

	// Option 5
	function selectJuly(){
	month = "July";
	console.log(month);
	testgame.month = month;
	console.log(testgame.month);
	moveOn();
	}

	// Option 6, Ask for advice
	function askAdvice(){
		document.getElementById("spaceBarPrompt").style.display="block";
		document.getElementById("titlePageOptions").innerHTML = "<p>You attend a public meeting held for \"folks with the California - Oregon fever.\" You're told:<br><br>If you leave too early, there won't be any grass for your oxen to eat. If you leave too late, you may not get to Oregon before winter comes. If you leave at just the right time, there will be green grass and the weather will still be cool.</p>";
		var page_number=1;
		document.body.onkeyup = function(event){
			if(event.key === ' ' && page_number === 1){
				intro4();
			}
			else{}
		}
	}

	function moveOn(){
		document.getElementById("spaceBarPrompt").style.display="block";
		document.getElementById("titlePageOptions").innerHTML = "<p>Before leaving Independence you should buy equipment and supplies. You have " + money + " in cash, but you don't have to spend it all now.</p>";
		var page_number=1;
		document.body.onkeyup = function(event){
			if(event.key === ' ' && page_number === 1){
				document.getElementById("titlePageOptions").innerHTML = "<p>You can buy whatever you need at Matt's General Store.</p>";
				page_number=2;
			}
			else if(event.key === ' ' && page_number === 2){
				document.getElementById("mainPage").innerHTML = "<p>Hello, I'm Matt. So you're going to Oregon! I can fix you up with what you need: </p><img src='Matt.png' align='left'><br><ul align='center' style='list-style-type:none;'><li>- a team of oxen to pull your wagon</li><li>- clothing for both summer and winter</li></ul><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
				document.getElementById("spaceBarPrompt").style.display="block";
				page_number=3;
			}
			else if(event.key === ' ' && page_number === 3){
				document.getElementById("mainPage").innerHTML = "<p>Hello, I'm Matt. So you're going to Oregon! I can fix you up with what you need: </p><img src='Matt.png' align='left'><br><ul align='center' style='list-style-type:none;'><li>- plenty of food for the trip</li><li>- bait for fishing</li><li>- spare parts for your wagon</li></ul><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
				document.getElementById("spaceBarPrompt").style.display="block";
				console.log(page_number);
				page_number=4;
				console.log(page_number);
			}
			else if(event.key === ' ' && page_number === 4){
				console.log(page_number);
				testwagon.generalStoreBill = 0;
				generalStore();
			}
			else{}
		}
	}

	function generalStore(){

		document.getElementById("mainPage").innerHTML = 
		"<head>"+
		"<link rel='stylesheet' type='text/css' href='proj3.css'>"+
		"</head>"+
		"<body class='intro'>"+
		"<audio id='gameMusic'>"+
		"<source src='OregonTrailMusic.mp3' type='audio/mpeg'>"+
		"</audio>"+
		"<style>ol.indent{ padding-left: 5em }"+
		"hr.indent{ margin-left: 5em }</style>"+
		"<div id='titlePageOptions'><hr style='border:4px solid red;' align='center' width='50%'>"+
		"<center>Matt's General Store<br>Idependence, Missouri<br><br><div id='month'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
		testgame.month + " 1, 1848</div></center>"+
		"<hr style='border:4px solid red;' align='center' width='50%'>"+
		"<img src='Matt.png' align='left'>"+
		"<ol class='indent'>"+
		    "<li>&emsp;Oxen $<f id='oxen'>0</f></li>"+
			"<li>&emsp;Food $<f id='food'>0</f></li>"+
			"<li>&emsp;Clothing $<f id='clothing'>0</f></li>"+
			"<li>&emsp;Bait Boxes $<f id='bait'>0</f></li>"+
			"<li>&emsp;Spare parts $<f id='spareParts'>0</f></li>"+
		"</ol>"+
		"<hr style='border:4px solid red;' width='50%' class='indent'>"+
		"<center>Total bill:&emsp;&emsp;$<f id='totalBill'>0</f>&emsp;&emsp;&emsp;"+
		"<br><br>Amount you have: $<f id='amount'>0</f>&emsp;&emsp;&emsp;&emsp;&emsp;</center>"+
		"<br>Which item would you like to <br>buy? "+
		"<input type='text' autofocus='' class='cursor' id='generalStoreChoice'>"+
		"</div><br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to leave store</div></center>";

		document.getElementById("spaceBarPrompt").style.display="block";

		var generalStoreBill = testwagon.generalStoreBill;
		generalStoreBill = generalStoreBill.toFixed(2);
		var totalmoney = testwagon.money;
		totalmoney = totalmoney.toFixed(2);
		var oxen = testwagon.oxen;
		var food = testwagon.food;
		var clothing = testwagon.clothing;
		var bait = testwagon.fishBait;
		var spareParts = parseFloat(testwagon.wagonWheel) + parseFloat(testwagon.wagonAxle) + parseFloat(testwagon.wagonTongue);
		document.getElementById("amount").innerHTML = totalmoney;
		document.getElementById("totalBill").innerHTML = generalStoreBill;
		var oxenCost = (oxen/2)*40;
		oxenCost = oxenCost.toFixed(2);
		document.getElementById("oxen").innerHTML = oxenCost;
		var foodCost = (food*.20);
		foodCost = foodCost.toFixed(2);
		document.getElementById("food").innerHTML = foodCost;
		var clothingCost = clothing*10;
		clothingCost = clothingCost.toFixed(2);
		document.getElementById("clothing").innerHTML = clothingCost;
		var baitCost = (bait/20)*2;
		baitCost = baitCost.toFixed(2);
		document.getElementById("bait").innerHTML = baitCost;
		var sparePartsCost = spareParts*10;
		sparePartsCost = sparePartsCost.toFixed(2);
		document.getElementById("spareParts").innerHTML = sparePartsCost;
		var playMusic=true;

		var userInput = document.getElementById("generalStoreChoice");
		userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				getMenuOption(userInput.value);
			}
		});
		var page_number = 1;
		document.body.onkeyup = function(event){
			if(event.key === ' ' && page_number === 1 && testwagon.generalStoreBill <= testwagon.money){
				document.getElementById("mainPage").innerHTML =
				"<img src='Matt.png' align='left'>"+
				"<p><center>Well then, you're ready to start. Good luck! You have a long and difficult journey ahead of you.</center></p>"+
				"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
				document.getElementById("spaceBarPrompt").style.display="block";
				testwagon.money = testwagon.money - testwagon.generalStoreBill;
				page_number=2;
			}
			if(event.key === ' ' && page_number === 2){
				console.log(testwagon.money);
				testwagon.generalStoreBill = 0;
				// put function to jump to trail here
				Independence();
			}
		}
		}

		function getMenuOption( val ) {
			if ( val >= 1 && val <= 6 ) {
				if ( val == 1 ) {selectOxen();}
				if ( val == 2 ) {selectFood();}
				if ( val == 3 ) {selectClothing();}
				if ( val == 4 ) {selectBait();}
				if ( val == 5 ) {selectSpareParts();}
			}
		}

		// Option 1
		function selectOxen(){
		document.getElementById("mainPage").innerHTML = 
		"<style>ol.indent{ padding-left: 5em }"+
		"hr.indent{ margin-left: 5em }</style>"+
		"<div id='titlePageOptions'><hr style='border:4px solid red;' align='center' width='50%'>"+
		"<center>Matt's General Store<br>Idependence, Missouri"+
		"<hr style='border:4px solid red;' align='center' width='50%'>"+
		"<img src='Matt.png' align='left'>"+
		"<p>There are 2 oxen in a yoke; I recommend at least 3 yoke. I charge $40 a yoke.</p>"+
		"<p>How many yoke do you <br>want? "+
		"<input type='text' autofocus='' class='cursor' id='oxenChoice'>"+
		"<br><br><img src='oxen.png'>"+
		"<center>Bill so far:&emsp;&emsp;$<f id='totalBill'>0</f>&emsp;&emsp;&emsp;"+
		"</p></div>";
		var generalStoreBill = testwagon.generalStoreBill;
		generalStoreBill = generalStoreBill.toFixed(2);
		document.getElementById("totalBill").innerHTML = generalStoreBill;
		var userInput = document.getElementById("oxenChoice");
		userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				oxenChoice(userInput.value);
			}
		});
		}

		function oxenChoice(val){
			if(event.key === "Enter" && val < 10){
			testwagon.generalStoreBill = testwagon.generalStoreBill - ((testwagon.oxen/2)*40);
			testwagon.oxen = 0;
			console.log(val);
			var test = testwagon.purchaseOxen(val);
			if(test == true){
			console.log(test);
			console.log(testwagon.oxen);
			console.log(testwagon.money);
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * 40);}
			generalStore();
			}
		}

		// Option 2
		function selectFood(){
		document.getElementById("mainPage").innerHTML = 
		"<style>ol.indent{ padding-left: 5em }"+
		"hr.indent{ margin-left: 5em }</style>"+
		"<div id='titlePageOptions'><hr style='border:4px solid red;' align='center' width='50%'>"+
		"<center>Matt's General Store<br>Idependence, Missouri"+
		"<hr style='border:4px solid red;' align='center' width='50%'>"+
		"<img src='Matt.png' align='left'>"+
		"<p>I recommend you take at least 200 pounds of food for each person in your family. I see that you have 5 people in all. You'll need flour, sugar, bacon, and coffee. My price is 20 cents a pound.</p>"+
		"<p>How many pounds of food do you want? "+
		"<input type='text' autofocus='' class='cursor' id='foodChoice'>"+
		"<br><br><img src='food.png'>"+
		"<center>Bill so far:&emsp;&emsp;$<f id='totalBill'>0</f>&emsp;&emsp;&emsp;"+
		"</p></div>";
		var generalStoreBill = testwagon.generalStoreBill;
		generalStoreBill = generalStoreBill.toFixed(2);
		document.getElementById("totalBill").innerHTML = generalStoreBill;
		var userInput = document.getElementById("foodChoice");
		userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				foodChoice(userInput.value);
			}
		});

		}

		function foodChoice(val){
			if(event.key === "Enter" && val <= 2000){
			testwagon.generalStoreBill = testwagon.generalStoreBill - (testwagon.food*.20);
			testwagon.food = 0;
			var test = testwagon.purchaseFood(val);
			if(test == true){
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * .20);}
			generalStore();
			}
		}

		// Option 3
		function selectClothing(){
		document.getElementById("mainPage").innerHTML = 
		"<style>ol.indent{ padding-left: 5em }"+
		"hr.indent{ margin-left: 5em }</style>"+
		"<div id='titlePageOptions'><hr style='border:4px solid red;' align='center' width='50%'>"+
		"<center>Matt's General Store<br>Idependence, Missouri"+
		"<hr style='border:4px solid red;' align='center' width='50%'>"+
		"<img src='Matt.png' align='left'>"+
		"<p>You'll need warm clothing in the mountains. I recommend taking at least 2 sets of clothes per person. Each set is $10.00.</p>"+
		"<p>How many sets of clothes do you <br>want? "+
		"<input type='text' autofocus='' class='cursor' id='clothingChoice'>"+
		"<br><br><img src='clothing.png'>"+
		"<center>Bill so far:&emsp;&emsp;$<f id='totalBill'>0</f>&emsp;&emsp;&emsp;"+
		"</p></div>";
		var generalStoreBill = testwagon.generalStoreBill;
		generalStoreBill = generalStoreBill.toFixed(2);
		document.getElementById("totalBill").innerHTML = generalStoreBill;
		var userInput = document.getElementById("clothingChoice");
		userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				clothingChoice(userInput.value);
			}
		});

		}

		function clothingChoice(val){
			if(event.key === "Enter" && val < 100){
			testwagon.generalStoreBill = testwagon.generalStoreBill - (testwagon.clothing*10);
			testwagon.clothing = 0;
			var test = testwagon.purchaseClothing(val);
			if(test == true){
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * 10);}
			console.log(testwagon.clothing);
			generalStore();
			}
		}

		// Option 4
		function selectBait(){
		document.getElementById("mainPage").innerHTML = 
		"<style>ol.indent{ padding-left: 5em }"+
		"hr.indent{ margin-left: 5em }</style>"+
		"<div id='titlePageOptions'><hr style='border:4px solid red;' align='center' width='50%'>"+
		"<center>Matt's General Store<br>Idependence, Missouri"+
		"<hr style='border:4px solid red;' align='center' width='50%'>"+
		"<img src='Matt.png' align='left'>"+
		"<p>I sell fish bait in boxes of 20. Each box costs $2.00.</p>"+
		"<p>How many boxes do you <br>want? "+
		"<input type='text' autofocus='' class='cursor' id='baitChoice'>"+
		"<br><br><img src='bait.png'>"+
		"<center>Bill so far:&emsp;&emsp;$<f id='totalBill'>0</f>&emsp;&emsp;&emsp;"+
		"</p></div>";
		var generalStoreBill = testwagon.generalStoreBill;
		generalStoreBill = generalStoreBill.toFixed(2);
		document.getElementById("totalBill").innerHTML = generalStoreBill;
		var userInput = document.getElementById("baitChoice");
		userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				baitChoice(userInput.value);
			}
		});

		}

		function baitChoice(val){
			if(event.key === "Enter" && val < 100){
			testwagon.generalStoreBill = testwagon.generalStoreBill - (testwagon.fishBait*2);
			testwagon.fishBait = 0;
			var test = testwagon.purchaseBait(val);
			if(test == true){
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * 2);}
			generalStore();
			}
		}

		// Option 5
		function selectSpareParts(){
		document.getElementById("mainPage").innerHTML = 
		"<style>ol.indent{ padding-left: 5em }"+
		"hr.indent{ margin-left: 5em }</style>"+
		"<div id='titlePageOptions'><hr style='border:4px solid red;' align='center' width='50%'>"+
		"<center>Matt's General Store<br>Idependence, Missouri"+
		"<hr style='border:4px solid red;' align='center' width='50%'>"+
		"<img src='Matt.png' align='left'>"+
		"<p>It's a good idea to have a few spare parts for your wagon. Here are the prices:</p>"+
		"<ul><li>wagon wheel - $10 each</li><li>wagon axle - $10 each</li><li>wagon tongue - $10 each</li></ul>"+
		"<div id='prompt'><p>How many wagon wheels? "+
		"<input type='text' autofocus='' class='cursor' id='partsChoice'></div>"+
		"<br><br><img src='parts.png'>"+
		"<center>Bill so far:&emsp;&emsp;$<f id='totalBill'>0</f>&emsp;&emsp;&emsp;"+
		"</p></div>";
		var generalStoreBill = testwagon.generalStoreBill;
		generalStoreBill = generalStoreBill.toFixed(2);
		document.getElementById("totalBill").innerHTML = generalStoreBill;
		var userInput = document.getElementById("partsChoice");
		userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				partsChoice(userInput.value);
			}
		});}

		function partsChoice(val){
			if(event.key === "Enter" && val < 4){
			testwagon.generalStoreBill = testwagon.generalStoreBill - (testwagon.wagonWheel*10);
			testwagon.wagonWheel = 0;
			var test = testwagon.purchaseWagonWheels(val);
			if(test == true){
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * 10);}
			document.getElementById("prompt").innerHTML = "<div id='prompt'><p>How many wagon axles? "+
			"<input type='text' autofocus='' class='cursor' id='axelChoice'></div>";
			var userInput = document.getElementById("axelChoice");
			userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				axelChoice(userInput.value);
			}
			});
			}
		}
			
		function axelChoice(val){
			if(event.key === "Enter" && val < 4){
			testwagon.generalStoreBill = testwagon.generalStoreBill - (testwagon.wagonAxle*10);
			testwagon.wagonAxle = 0;
			var test = testwagon.purchaseWagonAxles(val);
			if(test == true){
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * 10);}
			document.getElementById("prompt").innerHTML = "<div id='prompt'><p>How many wagon <br>tongues? "+
			"<input type='text' autofocus='' class='cursor' id='tongueChoice'></div>";
			var userInput = document.getElementById("tongueChoice");
			userInput.addEventListener("keyup", function(event) {
			if(event.key === "Enter"){
				tongueChoice(userInput.value);
			}
			});
			}
		}
			
		function tongueChoice(val){
			if(event.key === "Enter" && val < 4){
			testwagon.generalStoreBill = testwagon.generalStoreBill - (testwagon.wagonTongue*10);
			testwagon.wagonTongue = 0;
			var test = testwagon.purchaseWagonTongues(val);
			if(test == true){
			testwagon.generalStoreBill = testwagon.generalStoreBill + (val * 10);}
			generalStore();}
		}

/* game.js is below */	
function moveAlongTrail(){
	inACity = false;
	document.getElementById("mainPage").innerHTML = 
	"<div id=\"backgroundgrass\"></div>" +
	"<div id=\"demo\">" +
	"<p id=\"wagonImage\" onload=\"animateScript()\"> </p>" +
	"</div>" +
	"<div id=\"trailMenu\"></div>" +
	"<div id=\"greenBlock\"></div>" +
	"<div id=\"whiteBlock\">" +
	"<div id=\"textWithinBlock\">" +
	"Date: "+ testgame.month + " " + testgame.day + ", " + testgame.year +
	"<br>" +
	"Weather: " + testgame.weather + 
	"<br>" +
	"Health: " + testwagon.averageHealth + 
	"<br>" +
	"Food: " + testwagon.food + " pounds" +
	"<br>" +
	"Next Landmark: " + testgame.nextLandmark + " miles" +
	"<br>" +
	"Miles traveled: " + testgame.milesTraveled + " miles" +
	"</div>" +
	"</div>";

	var tID;
	
	document.getElementById("greenBlock").style.display = "block";
	document.getElementById("whiteBlock").style.display = "block";
	document.getElementById("backgroundgrass").style.display = "block";
	document.getElementById("wagonImage").style.display = "block";
	document.getElementById("trailMenu").innerHTML = " ";
	playAnimation();
	
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			stopAnimation();
			displayWagonMenu();
		}
	}
}


function stopAnimation() {
clearInterval(tID);
}

function displayCityMenu(){

	document.getElementById("mainPage").innerHTML =
		"<div>" + testgame.month + " " + testgame.day + ", " + testgame.year + "</div>" +
		"<div id=\"trailWhiteBlock\">" +
			"Weather: " + testgame.weather +
			"<br>" +
			"Health: " + testgame.averageHeatlh +
			"<br>" +
			"Pace:  " + testgame.pace +
			"<br>" +
			"Rations: " + testgame.foodRations +
			"</div>" +
		"<div id=\"trailOptions\">" +
			"You may:" +
			"<ol id=\"trailOptionsList\">" +
			"<li>Continue on trail</li>" +
			"<li>Check supplies</li>" +
			"<li>Look at map</li>" +
			"<li>Change pace</li>" +
			"<li>Change food rations</li>" +
			"<li>Stop to rest</li>" +
			"<li>Attempt to trade</li>" +
			"<li>Talk to people</li>" +
			"<li>Buy supplies</li>" +
			"</ol>" +
			"What is your choice? " +
			"<input type=\"text\" autofocus=\"\" class=\"cursor\" id=\"trailChoices\">" +
		"</div>";
	var userInputTrail = document.getElementById("trailChoices");
	userInputTrail.addEventListener('keydown', function(event) {
		if(event.key === 'Enter'){
			getCityChoice(userInputTrail.value);
		}
	});
	
}

function displayWagonMenu(){

	document.getElementById("mainPage").innerHTML =
		"<div>" + testgame.month + " " + testgame.day + ", " + testgame.year + "</div>" +
		"<div id=\"trailWhiteBlock\">" +
			"Weather: " + testgame.weather +
			"<br>" +
			"Health: " + testgame.averageHeatlh +
			"<br>" +
			"Pace:  " + testgame.pace +
			"<br>" +
			"Rations: " + testgame.foodRations +
			"</div>" +
		"<div id=\"trailOptions\">" +
			"You may:" +
			"<ol id=\"trailOptionsList\">" +
			"<li>Continue on trail</li>" +
			"<li>Check supplies</li>" +
			"<li>Look at map</li>" +
			"<li>Change pace</li>" +
			"<li>Change food rations</li>" +
			"<li>Stop to rest</li>" +
			"<li>Attempt to trade</li>" +
			"<li>Fish for food</li>" +
			"</ol>" +
			"What is your choice? " +
			"<input type=\"text\" autofocus=\"\" class=\"cursor\" id=\"trailChoices\">" +
		"</div>";
	var userInputTrail = document.getElementById("trailChoices");
	userInputTrail.addEventListener('keydown', function(event) {
		if(event.key === 'Enter'){
			getTrailChoice(userInputTrail.value);
		}
	});
	
}

function continueOnTrail(){
	moveAlongTrail();	
}



function getTrailChoice( value ) {
	var val = parseInt(value);
	console.log(value);
	if ( val >= 1 && val <= 8 ) {
		if ( val == 1 ) {continueOnTrail();}
		if ( val == 2 ) {checkSupplies();}
		if ( val == 3 ) {lookAtMap();}
		if ( val == 4 ) {changePace();}
		if ( val == 5 ) {changeFoodRations();}
		if ( val == 6 ) {stopToRest();}
		if ( val == 7 ) {attemptToTrade();}
		if ( val == 8 ) {goFishing();}
	}
	else {
	    // can be removed, was here for testing.
		console.log("I went to the else");
		
	}
}

function getCityChoice( value ) {
	var val = parseInt(value);
	console.log(value);
	if ( val >= 1 && val <= 9 ) {
		if ( val == 1 ) {continueOnTrail();}
		if ( val == 2 ) {checkSupplies();}
		if ( val == 3 ) {lookAtMap();}
		if ( val == 4 ) {changePace();}
		if ( val == 5 ) {changeFoodRations();}
		if ( val == 6 ) {stopToRest();}
		if ( val == 7 ) {attemptToTrade();}
		if ( val == 8 ) {talkToPeople();}
		if ( val == 9 ) {buySupplies();}
	}
	else {
	    // can be removed, was here for testing.
		console.log("I went to the else");
		
	}
}

function decideDirectionSouthPass(){
	document.getElementById("mainPage").innerHTML =
		"<div>" + testgame.month + " " + testgame.day + ", " + testgame.year + "</div>" +
		"<div id=\"trailWhiteBlock\">" +
			"Weather: " + testgame.weather +
			"<br>" +
			"Health: " + testgame.averageHeatlh +
			"<br>" +
			"Pace:  " + testgame.pace +
			"<br>" +
			"Rations: " + testgame.foodRations +
			"</div>" +
		"<div id=\"trailOptions\">" +
			"The trail divides here. You may:" +
			"<ol id=\"trailOptionsList\">" +
			"<li>Head for Green River crossing</li>" +
			"<li>Head for Fort Bridger</li>" +
			"</ol>" +
			"What is your choice? " +
			"<input type=\"text\" autofocus=\"\" class=\"cursor\" id=\"trailChoices\">" +
		"</div>";
	var userInputTrail = document.getElementById("trailChoices");
	userInputTrail.addEventListener('keydown', function(event) {
		if(event.key === 'Enter'){
			if(parseInt(userInputTrail.value) == 1){
				testgame.nextLandmark = 57;
				testgame.currentCity = "Green River";
			}
			if(parseInt(userInputTrail.value) == 2){
				testgame.nextLandmark = 125;
				testgame.currentCity = "Fort Bridger";
			}
			moveAlongTrail();
		}
	});
	
}

function decidePathBlueMountain(){
	document.getElementById("mainPage").innerHTML =
		"<div>" + testgame.month + " " + testgame.day + ", " + testgame.year + "</div>" +
		"<div id=\"trailWhiteBlock\">" +
			"Weather: " + testgame.weather +
			"<br>" +
			"Health: " + testgame.averageHeatlh +
			"<br>" +
			"Pace:  " + testgame.pace +
			"<br>" +
			"Rations: " + testgame.foodRations +
			"</div>" +
		"<div id=\"trailOptions\">" +
			"The trail divides here. You may:" +
			"<ol id=\"trailOptionsList\">" +
			"<li>Head for Fort Walla Walla</li>" +
			"<li>Head for The Dalles</li>" +
			"</ol>" +
			"What is your choice? " +
			"<input type=\"text\" autofocus=\"\" class=\"cursor\" id=\"trailChoices\">" +
		"</div>";
	var userInputTrail = document.getElementById("trailChoices");
	userInputTrail.addEventListener('keydown', function(event) {
		if(event.key === 'Enter'){
			if(parseInt(userInputTrail.value) == 1){
				testgame.nextLandmark = 55;
				testgame.currentCity = "Fort Walla Walla";
			}
			if(parseInt(userInputTrail.value) == 2){
				testgame.nextLandmark = 125;
				testgame.currentCity = "The Dalles";
			}
			moveAlongTrail();
		}
	});
	
}

function goToNextDestination(){
	inACity = true;
	//if(testgame.currentCity == "Independence"){
	//	testgame.currentCity = "Kansas River Crossing";
	//}
	
	if(testgame.currentCity == "Kansas River Crossing"){
		testgame.nextLandmark = 83;
		testgame.currentCity = "Big Blue River Crossing"
		// Here for testing.
		stopAnimation();
		KansasRiverCrossing();
		//moveAlongTrail();
	}

	else if(testgame.currentCity == "Big Blue River Crossing"){
		testgame.nextLandmark = 119;
		testgame.currentCity = "Fort Kearney";
		stopAnimation();
		BigBlueRiverCrossing();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Fort Kearney"){
		testgame.nextLandmark = 250;
		testgame.currentCity = "Chimney Rock";
		// Here for testing.
		stopAnimation();
		FortKearney();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Chimney Rock"){
		testgame.nextLandmark = 86;
		testgame.currentCity = "Fort Laramie";
		// Here for testing.
		stopAnimation();
		ChimneyRock();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Fort Laramie"){
		testgame.nextLandmark = 190;
		testgame.currentCity = "Independence Rock";
		// Here for testing.
		stopAnimation();
		FortLaramie();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Independence Rock" ){
		testgame.nextLandmark = 102;
		testgame.currentCity = "South Pass";
		// Here for testing.
		stopAnimation();
		IndependenceRock();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "South Pass"){
		// Here for testing.
		stopAnimation();
		SouthPass();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Fort Bridger"){
		testgame.nextLandmark = 162;
		testgame.currentCity = "Soda Springs";
		// Here for testing.
		stopAnimation();
		FortBridger();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Green River"){
		testgame.nextLandmark = 144;
		testgame.currentCity = "Soda Springs";
		// Here for testing.
		stopAnimation();
		GreenRiverCrossing();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Soda Springs"){
		testgame.nextLandmark = 57;
		testgame.currentCity = "Fort Hall";
		// Here for testing.
		stopAnimation();
		SodaSprings();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Fort Hall"){
		testgame.nextLandmark = 182;
		testgame.currentCity = "Snake River Crossing";
		// Here for testing.
		stopAnimation();
		FortHall();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Snake River Crossing"){
		testgame.nextLandmark = 114;
		testgame.currentCity = "Fort Boise";
		// Here for testing.
		stopAnimation();
		SnakeRiverCrossing();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Fort Boise"){
		testgame.nextLandmark = 160;
		testgame.currentCity = "Blue Mountains";
		// Here for testing.
		stopAnimation();
		FortBoise();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Blue Mountains"){
		// Here for testing.
		stopAnimation();
		BlueMountains();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Fort Walla Walla"){
		testgame.nextLandmark = 120;
		testgame.currentCity = "The Dalles";
		// Here for testing.
		stopAnimation();
		FortWallaWalla();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "The Dalles"){
		testgame.nextLandmark = 0;
		testgame.currentCity = "Columbia River";
		// Here for testing.
		stopAnimation();
		TheDalles();
		//moveAlongTrail();
	}
	
	else if(testgame.currentCity == "Columbia River"){
		stopAnimation();
		WillametteValley();
	}
	else {
		console.log("I should not get here");
	}
	
}

function changeMonth(){
	
	if(testgame.month == "March" && testgame.day >= 32){
  		testgame.month = "April";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "April" && testgame.day >= 31){
  		testgame.month = "May";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "May" && testgame.day >= 32){
  		testgame.month = "June";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "June" && testgame.day >= 31){
  		testgame.month = "July";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "July" && testgame.day >= 32){
  		testgame.month = "August";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "August" && testgame.day >= 31){
  		testgame.month = "September";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "September" && testgame.day >= 32){
  		testgame.month = "October";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "October" && testgame.day >= 32){
  		testgame.month = "November";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "November" && testgame.day >= 31){
  		testgame.month = "December";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "December" && testgame.day >= 32){
  		testgame.month = "January";
  		testgame.day = 1;
  		testgame.year = 1849;
  	}
  	
  	if(testgame.month == "January" && testgame.day >= 31){
  		testgame.month = "February";
  		testgame.day = 1;
  	}
  	
  	if(testgame.month == "February" && testgame.day >= 29){
  		testgame.month = "March";
  		testgame.day = 1;
  	}
}

function playAnimation(){
  var    position = 400;
  const  interval = 1000;
  const  diff = 400;
  tID = setInterval ( () => {
    document.getElementById("wagonImage").style.backgroundPosition = `0px -${position}px`;

    if (position < 400)
      { position = position + diff;}
    else
      { position = 0; 
      	// advance the day of the month.
      	testgame.day = parseInt(testgame.day) + 1;
      	
      	// Set the distance to next landmark, miles traveled, and food consumed,
      	// depending on the pace.
      	if(testgame.pace == "steady"){
      		var milesPerDay = 15;
      		testgame.nextLandmark = parseInt(testgame.nextLandmark) - milesPerDay;
      		testgame.milesTraveled = parseInt(testgame.milesTraveled) + milesPerDay;
      		testwagon.food = parseInt(testwagon.food) - 5;
      	}
      	
      	if(testgame.pace == "streneous"){
      		var milesPerDay = 23;
      		testgame.nextLandmark = parseInt(testgame.nextLandmark) - milesPerDay;
      		testgame.milesTraveled = parseInt(testgame.milesTraveled) + milesPerDay;
      		testwagon.food = parseInt(testwagon.food) - 7;
      	}
      	
      	if(testgame.pace == "grueling"){
      		var milesPerDay = 30;
      		testgame.nextLandmark = parseInt(testgame.nextLandmark) - milesPerDay;
      		testgame.milesTraveled = parseInt(testgame.milesTraveled) + milesPerDay;
      		testwagon.food = parseInt(testwagon.food) - 10;
      	}
      	changeMonth();
      	
      	
      	if(parseInt(testgame.nextLandmark) <= 0){
      		goToNextDestination();
      	}
      	
      	if(parseInt(testwagon.food) <= 0){
      		document.getElementById("textWithinBlock").innerHTML =
      			"You ran out of food and died!" +
      			"<br>" +
      			"Refresh the page to play again!";
      			stopAnimation();
      			
      	}
      	else{
      	document.getElementById("textWithinBlock").innerHTML = 
      		"Date: "+ testgame.month + " " + testgame.day + ", " + testgame.year +
      		"<br>" +
      		"Weather: " + testgame.weather + 
      		"<br>" +
      		"Health: " + testwagon.averageHealth + 
      		"<br>" +
      		"Food: " + testwagon.food + " pounds" +
      		"<br>" +
      		"Next Landmark: " + testgame.nextLandmark + " miles" +
      		"<br>" +
      		"Miles traveled: " + testgame.milesTraveled + " miles" +
      		"</div>" +
      		"</div>";
      	}
      }
  }, interval );
}	
/* game.js is above */

/* below is the trail menu*/

function checkSupplies(){
	
	document.getElementById("mainPage").innerHTML = 
	"<center><br>Your Supplies</center>"+
	"<ul style='list-style-type:none;text-align:center;'>"+
	"<img align='left' src='food.png'>"+
	"<li>oxen&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<f id='oxen'></f></li>"+
	"<li>sets of clothing&emsp;&emsp;&nbsp;<f id='clothing'></f></li><li>fishing bait&emsp;&emsp;&emsp;&emsp;&emsp;<f id='bait'></f></li><li>wagon wheels&emsp;&emsp;&emsp;&emsp;&emsp;<f id='wagonWheels'></f></li>"+
	"<img align='left' src='parts.png'>"+
	"<li>&nbsp;wagon axles&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<f id='wagonAxles'></f></li><li>&nbsp;wagon tongues&emsp;&emsp;&emsp;&nbsp;&nbsp;<f id='wagonTongues'></f></li><li>&nbsp;pounds of food&emsp;&emsp;&emsp;&nbsp;<f id='food'></f></li>"+
	"<li>&nbsp;money left&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$<f id='money'>0.00</f></li></ul>"+
	"<img align='left' src='oxen.png'>"+
	"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img align='center' src='clothing.png'>"+
	"<img align='right' src='bait.png'>"+
	"</div><br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue</div></center>";
document.getElementById("spaceBarPrompt").style.display="block";
var oxen = Number(testwagon.oxen).toString();
document.getElementById("oxen").innerHTML = oxen;
var clothing = Number(testwagon.clothing).toString();
document.getElementById("clothing").innerHTML = clothing;
var bait = Number(testwagon.fishBait).toString();
document.getElementById("bait").innerHTML = bait;
var wheel = Number(testwagon.wagonWheel).toString();
document.getElementById("wagonWheels").innerHTML = wheel;
var axle = Number(testwagon.wagonAxle).toString();
document.getElementById("wagonAxles").innerHTML = axle;
var tongue = Number(testwagon.wagonTongue).toString();
document.getElementById("wagonTongues").innerHTML = tongue;
var food = Number(testwagon.food).toString();
document.getElementById("food").innerHTML = food;
document.getElementById("money").innerHTML = testwagon.money.toFixed(2);

document.body.onkeyup = function(event){
if(event.key === ' '){
	console.log("back to menu");
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
	// put function to go back to the main menu
}}

}

function lookAtMap(){
	document.getElementById("mainPage").innerHTML = 
	"<center><img src='map.png'></center>"+
	"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
	if(event.key === ' '){
		console.log("back to menu");
		if(inACity == true){
			displayCityMenu();
		}
		displayWagonMenu();
		// put function to go back to the main menu
	}}
}

function changePace(){
	document.getElementById("mainPage").innerHTML = 
	"<img src='OregonTrailTitleBottom.png'>"+
"<div id='titlePageOptions'>"+
"Change Pace<br>(currently \"<f id='pace'></f>\")"+
"<ol>"+
    "<li>a steady pace</li>"+
	"<li>a strenuous pace</li>"+
	"<li>a grueling pace</li>"+
	"<li>find out what these different paces mean</li>"+
"</ol>"+
"What is your choice? "+
"<input type='text' autofocus='' class='cursor' id='paceChoice'>"+
"</div>"+
"<img src='OregonTrailTitleBottom.png'>";

document.getElementById("pace").innerHTML = testgame.pace;

var userInput = document.getElementById("paceChoice");
userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		paceChoice(userInput.value);
	}
});
}

function paceChoice(val){
	if (val == 1){
	setSteady();}
	if (val == 2){
	setStrenuous();}
	if (val == 3){
	setGrueling();}
	if (val == 4){
	differentPaces();}
}

function setSteady(){
	testgame.pace = "steady";
	console.log(testgame.pace);
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function setStrenuous(){
	testgame.pace = "strenuous";
	console.log(testgame.pace);
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function setGrueling(){
	testgame.pace = "grueling";
	console.log(testgame.pace);
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function differentPaces(){
		document.getElementById("mainPage").innerHTML = 
"<div id='titlePageOptions'>"+
"<p><u>steady</u> - You travel about 8 hours a day, taking frequent rests."+
" You take care not to get too tired</p>"+
"<p><u>strenuous</u> - You travel about 12 hours a day, starting just after sunrise and stopping shortly before sunset."+
" You stop to rest only when necessary. You finish each day feeling very tired.</p>"+
"<p><u>grueling</u> - You travel about 16 hours a day, starting before sunrise and continuing until dark."+
" You almost never stop to rest. You do not get enough sleep at night. You finish each day feeling absolutely exhausted, and your health suffers.</p>"+
"</div><br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
document.getElementById("spaceBarPrompt").style.display="block";

document.body.onkeyup = function(event){
	if(event.key === ' '){
		changePace();
	}
}
}

function changeFoodRations(){
	document.getElementById("mainPage").innerHTML = 
	"<img src='OregonTrailTitleBottom.png'>"+
"<div id='titlePageOptions'>"+
"Change food rations<br>(currently \"<f id='foodRations'></f>\")"+
"<br><br>The amount of food the people in your party eat each day can"+
" change. These amounts are:"+
"<ol>"+
    "<li>filling - meals are large and generous.</li>"+
	"<li>meager - meals are small, but adequate.</li>"+
	"<li>bare bones - meals are very small; everyone stays hungry.</li>"+
"</ol>"+
"What is your choice? "+
"<input type='text' autofocus='' class='cursor' id='foodRationsChoice'>"+
"</div>"+
"<img src='OregonTrailTitleBottom.png'>";

document.getElementById("foodRations").innerHTML = testgame.foodRations;

var userInput = document.getElementById("foodRationsChoice");
userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		foodRationsChoice(userInput.value);
	}
});
}

function foodRationsChoice(val){
	if (val == 1){
	setFilling();}
	if (val == 2){
	setMeager();}
	if (val == 3){
	setBareBones();}
}

function setFilling(){
	testgame.foodRations = "filling";
	console.log(testgame.foodRations);
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function setMeager(){
	testgame.foodRations = "meager";
	console.log(testgame.foodRations);
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function setBareBones(){
	testgame.foodRations = "bareBones";
	console.log(testgame.foodRations);
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function stopToRest(){
	var daysToRest = prompt("How many days would you like to rest?");
	testgame.rest = daysToRest;
	console.log(testgame.rest);
	console.log(testgame.day);
	testgame.day = parseInt(testgame.day) + parseInt(daysToRest);
	console.log(testgame.day);
	changeMonth();
	// game menu
	if(inACity == true){
		displayCityMenu();
	}
	displayWagonMenu();
}

function attemptToTrade(){

	
	document.getElementById("mainPage").innerHTML = 
	"<center><br>Your Supplies</center>"+
	"<ul style='list-style-type:none;text-align:center;'>"+
	"<img align='left' src='food.png'>"+
	"<li>oxen&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<f id='oxen'>0</f></li>"+
	"<li>sets of clothing&emsp;&emsp;&nbsp;<f id='clothing'>0</f></li><li>fishing bait&emsp;&emsp;&emsp;&emsp;&emsp;<f id='bait'>0</f></li><li>wagon wheels&emsp;&emsp;&emsp;&emsp;&emsp;<f id='wagonWheels'>0</f></li>"+
	"<img align='left' src='parts.png'>"+
	"<li>&nbsp;wagon axles&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<f id='wagonAxles'>0</f></li><li>&nbsp;wagon tongues&emsp;&emsp;&emsp;&nbsp;&nbsp;<f id='wagonTongues'>0</f></li><li>&nbsp;pounds of food&emsp;&emsp;&emsp;&nbsp;<f id='food'>0</f></li>"+
	"</ul>"+
	"<img align='left' src='oxen.png'>"+
	"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img align='center' src='clothing.png'>"+
	"<img align='right' src='bait.png'>"+
	"</div><br><br><br><center><f id='trade'>You meet another emigrant who wants 50 pounds of food. She will trade you 2 sets of clothing.</f>"+
	"<br><br><br>Are you willing to trade? Enter (y/n) here: "+
	"<input type='text' autofocus='' class='cursor' id='tradeChoice'></center>";

document.getElementById("oxen").innerHTML = testwagon.oxen;
document.getElementById("clothing").innerHTML = testwagon.clothing;
document.getElementById("bait").innerHTML = testwagon.fishBait;
document.getElementById("wagonWheels").innerHTML = testwagon.wagonWheel;
document.getElementById("wagonAxles").innerHTML = testwagon.wagonAxle;
document.getElementById("wagonTongues").innerHTML = testwagon.wagonTongue;
document.getElementById("food").innerHTML = testwagon.food;

var userInput = document.getElementById("tradeChoice");
userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		tradeChoice(userInput.value);
	}
});
}

function tradeChoice(val){
	if (val == "y"){
		if (testwagon.food >= 50){
			console.log(testwagon.food);
			console.log(testwagon.clothing);
			testwagon.food = testwagon.food - 50;
			testwagon.clothing = testwagon.clothing + 2;
			console.log(testwagon.food);
			console.log(testwagon.clothing);
			// return to main menu
			if(inACity == true){
				displayCityMenu();
			}
			displayWagonMenu();
		}
	}
	if (val == "n"){
	// return to main menu
		if(inACity == true){
			displayCityMenu();
		}
	displayWagonMenu();
	}
}

function talkToPeople(){
document.getElementById("mainPage").innerHTML = 
"<img src='OregonTrailTitleBottom.png'>"+
"<div id='titlePageOptions'>"+
"A traveler, Miles Hendricks, tells you:<br><br>\"Did you read the Missouri Republican today? --Says"+
" some folk start for Oregon without carrying spare parts, not even an extra wagon axle. Must think"+
" they grow on trees! Hope they're lucky enough to find an abandoned wagon."+
"</div><img src='OregonTrailTitleBottom.png'>"+
"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
document.getElementById("spaceBarPrompt").style.display="block";

document.body.onkeyup = function(event){
	if(event.key === ' '){
		// return to main menu
		displayCityMenu();
	}
}
}

function buySupplies(){
	
	document.getElementById("mainPage").innerHTML = 
	"<div id='titlePageOptions'>"+
	"<style>"+
			"#box {"+
			"background-color: white;"+
			"color:black;"+
			"width:500px;}</style>"+
			"<div id='box'><center>"+testgame.currentCity+"<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br>You may buy:<br>"+
			"<ol><li>Oxen&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;20.00 per ox</li>"+
			"<li>Clothing&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp10.00 per set</li>"+
			"<li>Bait boxes&emsp;&emsp;&emsp;&emsp;&emsp;2.00 per box</li>"+
			"<li>Wagon wheels&emsp;&emsp;&emsp;&nbsp;10.00 per wheel</li>"+
			"<li>Wagon axles&emsp;&emsp;&emsp;&emsp;10.00 per axle</li>"+
			"<li>Wagon tongues&emsp;&emsp;&emsp;10.00 per tongue</li>"+
			"<li>Food&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;0.20 per pound</li>"+
			"<li>Leave store</li></ol>"+
		"You have $"+testwagon.money.toFixed(2)+" to spend."+
		"<br>Which number? "+
		"<input type='text' autofocus='' class='cursor' id='storeChoice'></center>"+
		"<div id='quantity'></div>";
			
	var userInput = document.getElementById("storeChoice");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		storeChoice(userInput.value);
	}
});
			
}

function storeChoice( val ) {
	if ( val >= 1 && val <= 8 ) {
		if ( val == 1 ) {buyOxen();}
		if ( val == 2 ) {buyClothing();}
		if ( val == 3 ) {buyBait();}
		if ( val == 4 ) {buyWheels();}
		if ( val == 5 ) {buyAxles();}
		if ( val == 6 ) {buyTongues();}
		if ( val == 7 ) {buyFood();}
		if ( val == 8 ) {leaveStore();}
	}
}

function buyOxen(){
	document.getElementById("quantity").innerHTML =
	"<br>How many oxen? "+
	"<input type='text' autofocus='' class='cursor' id='oxenNumber'></center>";
	
	var userInput = document.getElementById("oxenNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.oxen);
		var number = userInput.value;
		var oxenCost = number * 20;
		var test = testwagon.purchaseOxen(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(oxenCost);
		console.log(testwagon.money);
		console.log(testwagon.oxen);
		buySupplies();}
	}
});
	
}

function buyClothing(){
	document.getElementById("quantity").innerHTML =
	"<br>How many sets? "+
	"<input type='text' autofocus='' class='cursor' id='clothingNumber'></center>";
	
	var userInput = document.getElementById("clothingNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.clothing);
		var number = userInput.value;
		var clothingCost = number * 10;
		var test = testwagon.purchaseClothing(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(clothingCost);
		console.log(testwagon.money);
		console.log(testwagon.clothing);
		buySupplies();}
	}
});
	
}

function buyBait(){
	document.getElementById("quantity").innerHTML =
	"<br>How many boxes? "+
	"<input type='text' autofocus='' class='cursor' id='baitNumber'></center>";
	
	var userInput = document.getElementById("baitNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.fishBait);
		var number = userInput.value;
		var baitCost = number * 2;
		var test = testwagon.purchaseBait(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(baitCost);
		console.log(testwagon.money);
		console.log(testwagon.fishBait);
		buySupplies();}
	}
});
	
}

function buyWheels(){
	document.getElementById("quantity").innerHTML =
	"<br>How many wheels? "+
	"<input type='text' autofocus='' class='cursor' id='wheelNumber'></center>";
	
	var userInput = document.getElementById("wheelNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.wagonWheel);
		var number = userInput.value;
		var wheelCost = number * 10;
		var test = testwagon.purchaseWagonWheels(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(wheelCost);
		console.log(testwagon.money);
		console.log(testwagon.wagonWheel);
		buySupplies();}
	}
});
	
}

function buyAxles(){
	document.getElementById("quantity").innerHTML =
	"<br>How many axles? "+
	"<input type='text' autofocus='' class='cursor' id='axleNumber'></center>";
	
	var userInput = document.getElementById("axleNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.wagonAxle);
		var number = userInput.value;
		var axleCost = number * 10;
		var test = testwagon.purchaseWagonAxles(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(axleCost);
		console.log(testwagon.money);
		console.log(testwagon.wagonAxle);
		buySupplies();}
	}
});
	
}

function buyTongues(){
	document.getElementById("quantity").innerHTML =
	"<br>How many tongues? "+
	"<input type='text' autofocus='' class='cursor' id='tongueNumber'></center>";
	
	var userInput = document.getElementById("tongueNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.wagonTongue);
		var number = userInput.value;
		var tongueCost = number * 10;
		var test = testwagon.purchaseWagonTongues(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(tongueCost);
		console.log(testwagon.money);
		console.log(testwagon.wagonTongue);
		buySupplies();}
	}
});
	
}

function buyFood(){
	document.getElementById("quantity").innerHTML =
	"<br>How many pounds? "+
	"<input type='text' autofocus='' class='cursor' id='foodNumber'></center>";
	
	var userInput = document.getElementById("foodNumber");
	userInput.addEventListener("keyup", function(event) {
	if(event.key === "Enter"){
		console.log(testwagon.money);
		console.log(testwagon.food);
		var number = userInput.value;
		var foodCost = number * .20;
		var test = testwagon.purchaseFood(number);
		if (test == true){
		testwagon.money = parseFloat(testwagon.money) - parseFloat(foodCost);
		console.log(testwagon.money);
		console.log(testwagon.food);
		buySupplies();}
	}
});
	
}

function leaveStore(){
	displayCityMenu();
}

function goFishing(){
var randomFish = Math.floor(Math.random() * 51);
console.log(randomFish);

document.getElementById("mainPage").innerHTML = 
"<div id='titlePageOptions'>"+
"<br><br><br><br><br>You have caught "+randomFish+" pounds of fish today."+
"</div><br><br><br><br><br>"+
"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
document.getElementById("spaceBarPrompt").style.display="block";

testwagon.food = parseInt(testwagon.food) + parseInt(randomFish);
console.log(testwagon.food);
testwagon.fishBait = parseInt(testwagon.fishBait) - 3;
testgame.day = testgame.day + 1;

// Advance to the next month if adding a day makes it the next month.
changeMonth();

document.body.onkeyup = function(event){
	if(event.key === ' '){
		// return to main menu
		displayWagonMenu();
	}
}
}

/* above is the ingame trail menu*/

/* below are the city screens */

function Independence() {
		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='Independence.png'>"+
			"<div id='box'>Independence<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			// put function here
			// just for testing
			//document.getElementById("mainPage").innerHTML =
			//"Move On";
			displayCityMenu();
	}}
	}

function KansasRiverCrossing() {
	
		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='KansasRiverCrossing.png'>"+
			"<div id='box'>Kansas River crossing<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			riverCrossing();
	}}
	}

function BigBlueRiverCrossing() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='BigBlueRiverCrossing.png'>"+
			"<div id='box'>Big Blue River crossing<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			riverCrossing();
	}}
	}

function FortKearney() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='FortKearney.png'>"+
			"<div id='box'>Fort Kearney<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayCityMenu();
	}}
	}

function ChimneyRock() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='ChimneyRock.png'>"+
			"<div id='box'>Chimney Rock<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			moveAlongTrail();
	}}
	}

function FortLaramie() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='FortLaramie.png'>"+
			"<div id='box'>Fort Laramie<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayCityMenu();
	}}
	}

function IndependenceRock() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='IndependenceRock.png'>"+
			"<div id='box'>Independence Rock<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			moveAlongTrail();
	}}
	}

function SouthPass() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='SouthPass.png'>"+
			"<div id='box'>South Pass<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			decideDirectionSouthPass();
	}}
	}

function FortBridger() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='FortBridger.png'>"+
			"<div id='box'>Fort Bridger<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayCityMenu();
	}}
	}

function GreenRiverCrossing() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='GreenRiverCrossing.png'>"+
			"<div id='box'>Green River crossing<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			riverCrossing();
	}}
	}

function SodaSprings() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='SodaSprings.png'>"+
			"<div id='box'>Soda Springs<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			moveAlongTrail();
	}}
	}

function FortHall() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='FortHall.png'>"+
			"<div id='box'>Fort Hall<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayCityMenu();
	}}
	}

function SnakeRiverCrossing() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='SnakeRiverCrossing.png'>"+
			"<div id='box'>Snake River Crossing<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			riverCrossing();
	}}
	}

function FortBoise() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='FortBoise.png'>"+
			"<div id='box'>Fort Boise<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayCityMenu();
	}}
	}

function BlueMountains() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='BlueMountains.png'>"+
			"<div id='box'>Blue Mountains<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			decidePathBlueMountain();
	}}
	}

function FortWallaWalla() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='FortWallaWalla.png'>"+
			"<div id='box'>Fort Walla Walla<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			displayCityMenu();
	}}
	}

function TheDalles() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='TheDalles.png'>"+
			"<div id='box'>The Dalles<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			moveAlongTrail();
	}}
	}

function WillametteValley() {

		document.getElementById("mainPage").innerHTML = 
			"<style>"+
				"#box {"+
				"background-color: white;"+
				"color:black;"+
				"width:500px;}</style>"+
			"<center><img src='WillametteValley.png'>"+
			"<div id='box'>Willamette Valley<br>"+testgame.month+" "+testgame.day+", "+testgame.year+"</center></div>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	document.body.onkeyup = function(event){
		if(event.key === ' '){
			endScreen();
	}}
	}


/* above are the city screens */
	
/* below is the river crossing */
	function riverCrossing(){
		// for testing
		//testgame.month = "March";
		
		var riverDepth;
		var riverWidth;
		console.log(riverDepth);
		if (riverWidth == null){
		var riverWidth = Math.floor(Math.random() * 700);}
		if (riverDepth == null){
		riverDepth = (Math.random() * 10).toFixed(1);}
		
		document.getElementById("mainPage").innerHTML = 
	"<center>"+testgame.currentCity+"<br>"+
	testgame.month+
	" "+testgame.day+
	", "+testgame.year+
	"<br></center>"+
	"<img src='OregonTrailTitleBottom.png'>"+
	"<div id='titlePageOptions'>"+
	"You must cross the river in order to continue. The river at this point is currently "+
	riverWidth+" feet across, and "+riverDepth+" feet deep in the middle."+
	"</div><img src='OregonTrailTitleBottom.png'>"+
	"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";

	document.body.onkeyup = function(event){
		if(event.key === ' '){
				document.getElementById("mainPage").innerHTML = 
					"<center>"+testgame.currentCity+"<br>"+
					testgame.month+
					" "+testgame.day+
					", "+testgame.year+
					"<br></center>"+
					"<img src='OregonTrailTitleBottom.png'>"+
					"Weather: "+testgame.weather+"<br>River width: "+riverWidth+
					" feet<br>River depth: "+riverDepth+" feet<br><br>You may:"+
					"<ol><li>attempt to ford the river</li><li>caulk the wagon and float it across</li>"+
					"<li>take a ferry across</li><li>wait to see if conditions improve</li><li>get more information</li></ol>"+
					"What is your choice? "+
					"<input type='text' autofocus='' class='cursor' id='riverChoice'></center>"+
					"</div><img src='OregonTrailTitleBottom.png'>";
					var userInput = document.getElementById("riverChoice");
					userInput.addEventListener("keyup", function(event) {
					if(event.key === "Enter"){
					riverChoice(userInput.value,riverDepth);
					}
					});
				
					}
					}
	}

	function riverChoice(val,riverDepth, riverWidth){
		if ( val >= 1 && val <= 5 ) {
			if ( val == 1 ) {fordRiver(riverDepth, riverWidth);}
			if ( val == 2 ) {caulkRiver(riverDepth, riverWidth);}
			if ( val == 3 && testwagon.money >= 5 ) {takeFerry(riverDepth, riverWidth);}
			if ( val == 4 ) {waitRiver(riverDepth, riverWidth);}
			if ( val == 5 ) {riverInfo(riverDepth, riverWidth);}
		}
	}

	function fordRiver(riverDepth, riverWidth){
		var failure = Math.floor(Math.random()*50);
		if (riverDepth > 5){
		// fail
		// animation here
		alert("Your supplies got wet. Lose 1 day.");
		testgame.day = parseInt(testgame.day) + 1;
		changeMonth();
		console.log(testgame.day);
		moveAlongTrail()
		}
		if (riverDepth <= 5){
			if (failure > 40)
			{
			// fail
			// animation here
			alert("You become stuck in the mud. Lose 1 day.");
			testgame.day = parseInt(testgame.day) + 1;
			changeMonth();
			console.log(testgame.day);
			moveAlongTrail()
			}
			if (failure <= 40)
			{
			// succeed
			// animation here
			alert("You made the crossing successfully.");
			moveAlongTrail()
			}
		}
	}

	function caulkRiver(riverDepth, riverWidth){
		if (riverWidth <= 350){
			var failure = Math.floor(Math.random()*40);
		}
		if (riverWidth > 350){
			var failure = Math.floor(Math.random()*50);
		}
		var failure = Math.floor(Math.random()*50);
		if (failure > 25)
		{
		// fail
		// for testing
		/*testwagon.food = 500;
		testwagon.wagonWheel = 1;
		testwagon.fishBait = 20;*/
		// animation here
		alert("The wagon tipped over while floating. You lose: 10 fish bait, 1 wagon wheel, 200 pounds of food");
		if (testwagon.food >= 200){
		testwagon.food = parseFloat(testwagon.food) - 200;}
		if (testwagon.wagonWheel >= 1){
		testwagon.wagonWheel = parseInt(testwagon.wagonWheel) - 1;}
		if (testwagon.fishBait >= 10){
		testwagon.fishBait = parseInt(testwagon.fishBait) - 10;}
		console.log(testwagon.food);
		console.log(testwagon.wagonWheel);
		console.log(testwagon.fishBait);
		moveAlongTrail()
		}
		if (failure <= 25)
		{
		// succeed
		// animation here
		alert("You made the crossing successfully.");
		moveAlongTrail()
		}
	}

	function takeFerry(riverDepth, riverWidth){
		var failure = Math.floor(Math.random()*50);
		testwagon.money = parseFloat(testwagon.money) - 5;
		if (failure > 45)
		{
		// fail
		// for testing
		/*testwagon.food = 500;
		testwagon.wagonWheel = 1;
		testwagon.fishBait = 20;*/
		// animation here
		alert("The ferry broke loose from moorings. You lose: 6 sets of clothing, 1 wagon axle, 3 oxen, 25 pounds of food");
		if (testwagon.food >= 25){
		testwagon.food = parseFloat(testwagon.food) - 25;}
		if (testwagon.wagonAxle >= 1){
		testwagon.wagonAxle = parseInt(testwagon.wagonAxle) - 1;}
		if (testwagon.clothing >= 6){
		testwagon.clothing = parseInt(testwagon.clothing) - 6;}
		if (testwagon.oxen >= 3){
		testwagon.oxen = parseInt(testwagon.oxen) - 3;}
		moveAlongTrail()
		}
		if (failure <= 45)
		{
		// succeed
		// animation here
		alert("You made the crossing successfully.");
		moveAlongTrail()
		}
	}

	function waitRiver(riverDepth, riverWidth){
		testgame.day = parseInt(testgame.day) + 1;
		changeMonth();
		riverCrossing();
	}

	function riverInfo(riverDepth, riverWidth){
		document.getElementById("mainPage").innerHTML = 
	"<center>"+testgame.currentCity+"<br>"+
	testgame.month+
	" "+testgame.day+
	", "+testgame.year+
	"<br></center>"+
	"<img src='OregonTrailTitleBottom.png'>"+
	"<div id='titlePageOptions'>"+
	"<p>To ford a river means to pull your wagon across a shallow part of the river, with the oxen still attached.</p></div>"+
	"<img src='OregonTrailTitleBottom.png'>"+
	"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";

	document.body.onkeyup = function(event){
		if(event.key === ' '){
			document.getElementById("mainPage").innerHTML = 
			"<center>"+testgame.currentCity+"<br>"+
			testgame.month+
			" "+testgame.day+
			", "+testgame.year+
			"<br></center>"+
			"<img src='OregonTrailTitleBottom.png'>"+
			"<div id='titlePageOptions'>"+
			"<p>To caulk the wagon means to seal it so that no water can get in. The wagon can then be floated across like a boat.</p></div>"+
			"<img src='OregonTrailTitleBottom.png'>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
			document.getElementById("spaceBarPrompt").style.display="block";
			
			document.body.onkeyup = function(event){
		if(event.key === ' '){
			document.getElementById("mainPage").innerHTML = 
			"<center>"+testgame.currentCity+"<br>"+
			testgame.month+
			" "+testgame.day+
			", "+testgame.year+
			"<br></center>"+
			"<img src='OregonTrailTitleBottom.png'>"+
			"<div id='titlePageOptions'>"+
			"<p>To use a ferry means to pull your wagon on top of a flat boat that belongs to someone else. The owner of the ferry will take your wagon across the river.</p></div>"+
			"<img src='OregonTrailTitleBottom.png'>"+
			"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
			document.getElementById("spaceBarPrompt").style.display="block";
			
			document.body.onkeyup = function(event){
		if(event.key === ' '){
			riverCrossing(riverDepth, riverWidth);
		}
		}
		}
	}
	}
	}
	}
/* above is the river crossing */
	
/* below is the end screen */
	
function endScreen(){
	var score;
	if(testwagon.characterClass == "banker"){
		score = testwagon.food
	}
	else if(testwagon.characterClass == "carpenter"){
		score = 2 * parseInt(testwagon.food);
	}
	else if(testwagon.characterClass = "farmer"){
		score = 3 * parseInt(testwagon.food);
	}
	document.getElementById("mainPage").innerHTML =
		"<h1>Points for arriving at Oregon</h1>" +
		"<br>" +
		"<p>Since you were a: " + testwagon.characterClass + "</p>" +
		"<br>" +
		"<p>Your score is: " + score + "</p>" +
		"<br><br><center><div id='spaceBarPrompt'>Press SPACE BAR to continue.</div></center>";
	document.getElementById("spaceBarPrompt").style.display="block";
	
	document.body.onkeyup = function(event){
if(event.key === ' '){
	window.location = "quitGame.html";
}
}

	
}
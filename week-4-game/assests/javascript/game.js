// set global var
//========================================================= 

// crystal varaibles
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green: 
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};

// scores target & current

var currentScore = 0;
var targetScore = 0;

// win and loses

var winCount = 0;
var lossCount = 0;


// functions
//========================================================= 


// helper function for getting random numbers
var getRandom = function(min,max){
	return Math.floor(Math.random() * (max - min +1)) + min;
}


// starts the game along with resets 
var startGame = function(){
	// reset current score
	currentScore = 0;
	// set a new target between 19 - 120

	targetScore = getRandom(19, 120);
	// set a different value for each of the crystals between 1-12

	crystal.blue.value 		= getRandom(1,12);
	crystal.green.value 	= getRandom(1,12);
	crystal.red.value 		= getRandom(1,12);
	crystal.yellow.value 	= getRandom(1,12);
	// change html to reflect all of these changes


	//testing results into console.log 

		console.log ("---------------------------------------");

		console.log ("target Score " + targetScore );

		console.log ("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);

		console.log ("---------------------------------------");



};


// respond to clicks on the crystals

var addValues = function(crystal){
	currentScore = currentScore + crystal.value;
	// change the html to reflect changes int current score
	$("#yourScore").html(currentScore);

	// cal check win function
	checkWin();

	// testing 
	console.log("Your Score: "+ currentScore);


};

// check if user won or lost and rest the game

var checkWin = function(){

	// check if current score is larger than targetscore
	if(currentScore > targetScore) {
		alert("loser");
		console.log("loser")

		// add to lose counter
		lossCount++;

		$("#lossCount").html(lossCount)
		// restart the game 
		startGame();


	}
	else if (currentScore == targetScore){
		alert("winner winner, chicken dinner!");
		console.log("winner")

		// add to win counter

		winCount++;

		$("#winCount").html(winCount)

		// restart the game 
		startGame();

	}

}

// main process
//========================================================= 

// starts the game first time
startGame();

	$("#yourScore").html(currentScore)
	$("#targetScore").html(targetScore)


$("#blue").click(function(){
	addValues(crystal.blue);
});

$("#green").click(function(){
	addValues(crystal.green);
});

$("#red").click(function(){
	addValues(crystal.red);
});

$("#yellow").click(function(){
	addValues(crystal.yellow);
});


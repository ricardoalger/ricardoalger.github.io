$(function(){
	console.log("Page Loaded")
	console.log("-----------")
});

/*
1 	firebase initialize  
2	build function to collect data elements within a form
  	and push into firebase
3 	display results from firebase into html
  	(sub process - provide detailed calculation of minutes away
*/

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDTyVWUhREUwR--KixMSMZ6upunEK8TefE",
    authDomain: "trainschedulev2.firebaseapp.com",
    databaseURL: "https://trainschedulev2.firebaseio.com",
    projectId: "trainschedulev2",
    storageBucket: "",
    messagingSenderId: "738951763176"
  };
  firebase.initializeApp(config);

// create all var and initialize as empty 

var trainData = firebase.database();

$("#add-train").on("click",function(){
	var	trainName 			= $('#name-input').val().trim();
	var	destination 		= $('#destination-input').val().trim();
	var	firstTrainTime 		= moment($('#first-train-time-input').val().trim(),"HH:mm").subtract(10,"years").format("x");
	var	frequency 			= $('#frequency-input').val().trim();

// create var for all data inputs from form

	var newTrain = {
		name: 			trainName,
		destination: 	destination,
		firstTrainTime: firstTrainTime,
		frequency:      frequency
	}

// push to firebase 
	trainData.ref().push(newTrain);

	alert("Train Addeded")

	$("#name-input").val("");
	$("#destination-input").val("");
	$("#first-train-time-input").val("");
	$("#frequency-input").val("");

	return false;

});

trainData.ref().on("child_added",function(snapshot){
	var name 			= snapshot.val().name;
	var destination 	= snapshot.val().destination;
	var	frequency   	= snapshot.val().frequency;
	var firstTrainTime 	= snapshot.val().frequency;

	var remainder 		= moment().diff(moment.unix(firstTrainTime),"minutes")%frequency;
	var minutes   		= frequency - remainder;
	var arrival			= moment().add(minutes,"m").format("hh:mm A");

	console.log(remainder);
	console.log("--------");
	console.log(minutes);
	console.log("--------");
	console.log(arrival);
	console.log("--------");
	console.log(name);
	console.log(destination);
	console.log(frequency);
	console.log(firstTrainTime);
	console.log("--------");	


	$("#trainSchedule > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");
})




///////////////////////////////////////////////
  	/* var trainName 			= '';
	var destination 		= '';
	var firstTrainTime 		= '';
	var frequency 			= '';
	var firstTimeConverted 	= '';
	var currentTime			= '';
	var diffTime			= '';
	var tRemainder			= '';
	var minutesTillTrain	= '';
	var nextTrain 			= '';
	var nextTrainFormatted	= '';
	*/


// create function to grab data from form and push into firebase
/*
$(document).ready(function){
	$("#add-train").on("click",function(){
		trainName 			= $('#name-input').val().trim();
		destination 		= $('#destination-input').val().trim();
		firstTrainTime 		= $('#first-train-time-input').val().trim();
		frequency 			= $('#frequency-input').val().trim();

		// var updates for calculations

		firstTimeConverted  = moment(first-train-time-input, "hh:mm").subtract(1, "years");
		currentTime			= moment();
		diffTime			= moment().dif(moment(firstTimeConverted), "minutes");
		tRemainder			= diffTime % frequency;
		minutesTillTrain	= frequency - tRemainder;
		nextTrain 			= moment().add(minutesTillTrain, "minutes");
		nextTrainFormatted  = moment(nextTrain).format("hh:mm");
		firstTimeConverted  = moment(firstTrainTime, "hh:mm").subtract(1, "years");
        currentTime         = moment();
        diffTime            = moment().diff(moment(firstTimeConverted), "minutes");
        tRemainder          = diffTime % frequency;
        minutesTillTrain    = frequency - tRemainder;
        nextTrain           = moment().add(minutesTillTrain, "minutes");
        nextTrainFormatted  = moment(nextTrain).format("hh:mm"); 

		database.ref().push({
			trainName: trainName,
			destination: destination,
			firstTrainTime: firstTrainTime,
			frequency: frequency
		});


	}); // close 1st function

}); */
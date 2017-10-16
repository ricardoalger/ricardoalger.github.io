$(function(){
	console.log("Page Loaded")
});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbJ2E454mJfBInhJBOxZv2xSJ06QJjSz8",
    authDomain: "trainschedule-e170c.firebaseapp.com",
    databaseURL: "https://trainschedule-e170c.firebaseio.com",
    projectId: "trainschedule-e170c",
    storageBucket: "trainschedule-e170c.appspot.com",
    messagingSenderId: "911822076345"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

/*
1 	firebase initialize  
2	build function to collect data elements within a form
  	and push into firebase
3 	display results from firebase into html
  	(sub process - provide detailed calculation of minutes away
*/

	var trainName 			= '';
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


$(document).ready(function(){

	$("#add-train").on("click",function(){
		trainName 			= $('#name-input').val().trim();
		destination 		= $('#destination-input').val().trim();
		firstTrainTime 		= $('#first-train-time-input').val().trim();
		frequency 			= $('#frequency-input').val().trim();

		// var updates for calculations 

		firstTimeConverted  = moment(firstTrainTime, "hh:mm").subtract(1, "years");
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


	});
// build function to display firebase data within Fall Train Schedule //
	/* database.ref().on("child_added", function(childSnapshot,prevChildKey){
		console.log(childSnapshot.val()) */

		/* could not get to work $("#train-schedule > tbody").append("<tr><td>" + childSnapshot.val().trainName + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().firstTrainTime + "</td><td>" + childSnapshot.val().frequency + "</td></tr>"); */

		/*$('.train-schedule').append("<tr class='table-row' id=" + "'" + childSnapshot.key() + "'" +">" +
			"<td class='col-xs-3' >" + childSnapshot.val().trainName +
			"</td>" +
			"<td class='col-xs-2' >" + childSnapshot.val().destination +
			"</td>" +
			"<td class='col-xs-2' >" + childSnapshot.val().frequency + 
			"</td>" +
		"</tr>");*/
	});



/* $('.train-schedule').append("<tr class='table-row' id=" + "'" + childSnapshot.key() + "'" + ">" +
               "<td class='col-xs-3'>" + childSnapshot.val().name +
               "</td>" +
               "<td class='col-xs-2'>" + childSnapshot.val().destination +
               "</td>" +
               "<td class='col-xs-2'>" + childSnapshot.val().frequency +
               "</td>" +
               "<td class='col-xs-2'>" + childSnapshot.val().nextTrainFormatted + // Next Arrival Formula ()
               "</td>" +
               "<td class='col-xs-2'>" + childSnapshot.val().minutesTillTrain + // Minutes Away Formula
               "</td>" +
               "<td class='col-xs-1'>" + "<input type='submit' value='remove train' class='remove-train btn btn-primary btn-sm'>" + "</td>" +
          "</tr>");
          */ 


/*
<input type="text" class="form-control" id="name-input">	
<input type="text" class="form-control" id="destination-input">	
<input type="text" class="form-control" id="first-train-time-input">	
<input type="text" class="form-control" id="frequency-input">
<button type="submit" class="btn btn-primary" id="add-train" >Add Train</button>
*/

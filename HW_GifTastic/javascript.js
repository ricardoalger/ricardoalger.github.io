$(function() {

    populateButtons(searchArray, 'searchButton', '#buttonsArea');

    console.log("----------------");
    console.log("Page Loaded");
    console.log("----------------");

})

// search array of topics //

var searchArray = ['Dog', 'Cat', 'Bird', 'Gator', 'Rabbit', 'Rat'];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    // empty field to avoid copy

    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on('click', '.searchButton', function() {
    var type = $(this).data('type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=800d8166b7844f1e89a0720219c44cd7&q=" + type + "&limit=10&offset=0&lang=en";
    $.ajax({
        url: queryURL,
        method: "Get"
    }).done(function(response) {
            console.log(response);

        for (var i = 0; i < response.data.length; i++) {
            var searchDiv = $('<div class="search-item">');
            var vRating = response.data[i].rating;
            var p = $('<p>').text('Rating:' + vRating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animated', animated);
            image.attr('data-state', 'still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $('#searches').append(searchDiv);

        }
    })

})

// add addtional topics 
// animate 
//$(document).on('click','.searchImage',fuction(){
//    var state = $(this).data('state');
//    if (state == 'still'){
//        $(this).attr('src',$(this).data('animated'));
//        $(this).attr('data-state',animated);        
//    } else {
//        $(this).attr('src',$(this).data('still'));
//        $(this).attr('data-state','still');
//    }
//})


$(document).on('click','.searchImage',function(){
    var state = $(this).attr('data-state');
    if (state == 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})

$('#addSearch').on('click',function(){
    var newSearch = $('input').eq(0).val();
    searchArray.push(newSearch);
    populateButtons(searchArray, 'searchButton', '#buttonsArea');
    return false;
})



// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=800d8166b7844f1e89a0720219c44cd7&q=" + type + "&limit=10&offset=0&lang=en";
//$.ajax({
//  url: queryURL,
// method: "Get"
//}).done(fuction(response) {
//  console.log(response);
//})



// $(function){
//
//  populateButtons(searchArray,'searchButton','#buttonArea');
//  console.log("Page Loaded");
//
//
//})
//
//  var searchArray = ["Dog","Cat","Bird"]
//
//  function populateButtons(searchArray,classToAdd,areaToAddTo){
//      $(areaToAddTo).empty();
//      for (var i=0;i<searchArray.length;i++){
//          var a = $('<button>');
//          a.addClass(classToAdd);
//          a.attr('data-type',searchArray[i]);
//          a.text(searchArray[i]);
//          $(areaToAddTo).append(a);
//      }
//  }
//
//  $(douc) //
// *** START OVER JAVASCRIPTS ***//

// create function for buttons
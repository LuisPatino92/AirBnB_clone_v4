document.addEventListener("DOMContentLoaded", function(){
  let dctame = {}

  $("input").click(function(){
    if($(this).prop("checked") == true){
      dctame[$(this).data("name")] = $(this).data("name")
    } else {
      delete dctame[$(this).data("name")]
    }
    console.log(Object.values(dctame))
    $("#este").text(Object.values(dctame))
  })

  $.get("http://localhost:5001/api/v1/status/", function(data) {
    if (data.status === "OK") {
      $("#api_status").addClass("available")
    } else {
      $("#api_status").removeClass("available")
    }
  })

  /*$.ajax({
    type: "POST",
    url: "http://localhost:5001/api/v1/places_search/",
    data: JSON.stringify({}),
    dataType: "json",
    contentType: 'application/json',
    success: function(data) {
      for (place in data) {
        $("#placesdata").append("<article id='"+ place + "'></article>")
        $("article#" + place).append("<div class='title_box' id='title" + place + "'></div>")        
        $("#title" + place).append("<h2>"+ data[place].name + "</h2>")
        $("#title" + place).append("<div class='price_by_night' id='price" + place + "'></div>")
        $("#price" + place).text(data[place].price_by_night)
        $("article#" + place).append("<div class='information' id='info" + place + "'></div>")
        $("#info" + place).append("<div class='max_guest' id='gest" + place + "'></div>")
        $("#info" + place).append("<div class='number_rooms' id='room" + place + "'></div>")
        $("#info" + place).append("<div class='number_bathrooms' id='bath" + place + "'></div>")
        $("#gest" + place).text(data[place].max_guest + " Guests")
        $("#room" + place).text(data[place].number_rooms + " Rooms")
        $("#bath" + place).text(data[place].number_bathrooms + " Bathrooms")
        $("article#" + place).append("<div class='user' id='user" + place + "'></div>")
        $("#user" + place).append("<b>Owner: </b>")
        $("article#" + place).append("<div class='description' id='description" + place + "'></div>")
        $("#description" + place).text(data[place].description)
      } 
    }
  })*/

  let newdct = {}
  newdct["amenities"] = Object.values(dctame)

  $("#but").click(function(){
    newdct["amenities"] = Object.values(dctame)
    console.log(newdct)
    $.ajax({
      type: "POST",
      url: "http://localhost:5001/api/v1/places_search/",
      data: JSON.stringify(newdct),
      dataType: "json",
      contentType: 'application/json',
      success: function(data) {
        for (place in data) {
          $("#placesdata").append("<article id='"+ place + "'></article>")
          $("article#" + place).append("<div class='title_box' id='title" + place + "'></div>")        
          $("#title" + place).append("<h2>"+ data[place].name + "</h2>")
          $("#title" + place).append("<div class='price_by_night' id='price" + place + "'></div>")
          $("#price" + place).text(data[place].price_by_night)
          $("article#" + place).append("<div class='information' id='info" + place + "'></div>")
          $("#info" + place).append("<div class='max_guest' id='gest" + place + "'></div>")
          $("#info" + place).append("<div class='number_rooms' id='room" + place + "'></div>")
          $("#info" + place).append("<div class='number_bathrooms' id='bath" + place + "'></div>")
          $("#gest" + place).text(data[place].max_guest + " Guests")
          $("#room" + place).text(data[place].number_rooms + " Rooms")
          $("#bath" + place).text(data[place].number_bathrooms + " Bathrooms")
          $("article#" + place).append("<div class='user' id='user" + place + "'></div>")
          $("#user" + place).append("<b>Owner: </b>")
          console.log(data[place].user)
          $("article#" + place).append("<div class='description' id='description" + place + "'></div>")
          $("#description" + place).text(data[place].description)
        } 
      }
    })
  })
});
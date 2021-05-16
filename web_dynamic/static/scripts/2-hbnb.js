document.addEventListener("DOMContentLoaded", function(){
  var dctame = {}

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
});
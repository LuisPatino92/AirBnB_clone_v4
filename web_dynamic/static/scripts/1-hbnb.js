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

  /*
  $("#inputcheck").on("click", function() {
    $("#inputcheck").each(function() {
      if ($("#inputcheck").attr('checked', true)) {
        dctame.push($("#inputcheck").data("name"))
        console.log(dctame)
     } else {
       console.log("wtf")
     }
    })
  })
  */
});
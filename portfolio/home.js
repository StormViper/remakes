$(document).ready(function() {
  function switchHeader() {
      if ($("#title").html() == "Design") {
        $("#title").fadeOut(400, function() {
          $("#title").html("Development").fadeIn();
        });
      }

      if($("#title").html() == "Development") {
        title = "Design";
        $("#title").fadeOut(400, function() {
          $("#title").html("Design").fadeIn();
        });
      }

  };

$(function() {
  setInterval(switchHeader, 5000)
});

$("#project-button").click(function(){
  if( $(".project-frame").html() == "" ){
    $(".project-frame").html("<iframe height='600px' width='80%' src='https://www.youtube.com/embed/KZZO_IDzlnY'></iframe>")
  } else {
    $(".project-frame").html("");
  }
});

$("#email-send").click(function() {
  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:8000/email.php",
    data: { first_name: $("#first-name").val(),
            last_name:  $("#last-name").val(),
            email:      $("#email").val(),
            phone:      $("#phone").val(),
            message:    $("#message").val() }
  }).done(function( msg ) {
    alert( "Data saved: " + msg );
  });
});

});

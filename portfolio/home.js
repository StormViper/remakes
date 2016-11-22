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

function setText( text ){
  $("#email-send").html(text);
}

  var isSubmitting = false;
$("#email-send").click(function() {

if( isSubmitting == false ){
  isSubmitting = true;
  var firstName = $("#first-name").val();
  var lastName  = $("#last-name").val();
  var email     = $("#email").val();
  var phone     = $("#phone").val();
  var message   = $("#message").val();

  if( firstName == "" || lastName == "" || email == "" || phone == "" )
    alert("Contact form not complete");
  else {
    setText("Sending...");
    $.post("email.php", {
      first_name: firstName, last_name: lastName, email: email, phone: phone, message: message
    }, function(data) {
      if(data == "true"){
        setText("Sent!");
      } else {
        setText("Send mail");
        alert(data);
      }
    });
  }
} else {
  alert("You can only send 1 email at a time!");
}

});





});

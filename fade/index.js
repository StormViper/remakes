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

});

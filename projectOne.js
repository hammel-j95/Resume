$(document).ready(function(){
  $("#goals").dialog({autoOpen:false});
    $("#goals-button").click(function() {
      $("#goals")dialog("open");
  });
});

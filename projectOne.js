$(document).ready(function(){
  $("#goals").dialog({autoOpen:false});
    $("#goals-button").click(function() {
      $("#goals").dialog("open");
  $("#goals").dialog({minHeight: 400});
  $("#goals").dialog({minWidth: 600});
  $("#goals").dialog({
  buttons: [
    {
      text: "X",
      click: function() {
        $(this).dialog( "close" );
      }
    }
  ]
});
  });
});

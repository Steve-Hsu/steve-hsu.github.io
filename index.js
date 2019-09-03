
// Prevent the "not(:hover)" from executing in refreshing the page
  $("#card").mouseover(function(){
    $("#card").addClass("homeCard");
    console.log("Hey! have good day my friend!");
  });

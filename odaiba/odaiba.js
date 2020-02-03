
var display = $(".photoDisplay");
var span = $(".closeDisplay");

$('img').click(function(event){
  console.log(event.target.src);
    var img = event.target.src;
    $('#odaibaPhoto').attr("src",img);
    // $('.odaibaPhoto').children().attr("src",img);
    //S:set The setTimeout here for the picture display more fluently
    setTimeout(function(){display.css("display","block");}, 50);
});

span.click(function(){
  display.css("display","none");
});

// Click outside the photo and go back to the mainpage
window.onclick = function(event) {
  //S: here add the "[0]" behined "modal" is because the element queried out by JQuery is an "Object Object ",
  //S: whereas the event.target or the element queried out by document.getElementByid is an "HTML object"
  //S: if you want to chanege the JQuery element into an "HTML object", add the "[0]" after it.
  if( event.target == display[0]){
    display.css("display", "none");
  }
};

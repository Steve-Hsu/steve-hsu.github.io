
// jshint esversion:6
// Prevent the "not(:hover)" from executing in refreshing the page
  $("#HCard").mouseover(function(){
    $("#HCard").addClass("homeCard");
  });

// $(document).ready(function(){
// 	 $('[data-toggle="popover"]').popover({
// 		  trigger: 'focus',
//       placement: 'left',
//           html: true,
//           content: function () {
// 				return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
//           },
//
//     });
// });

// Get the modal
var modal = $("#myModal");
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.querySelectorAll("#KLProductsBtn");
var btn = $(".KLProductsBtn");
// var btnNum = document.querySelectorAll("#KLProductsBtn").length;
var btnNum = $(".KLProductsBtn").length;

// Get the <span> element that closes the modal
var span = $(".close");
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// S:for loop is for finding out a specifc buttons
// for (var i = 0 ; i < btnNum; i++){
//   btn[i].addEventListener("click", function(event){
//       var img = event.path[0].src;
//       $("#KLproductsImg").attr("src",img);
//       console.log(event.path[0].src);
//       //S:set The setTimeout here for the picture display more fluently
//       setTimeout(function(){modal.css("display","block");}, 50);
//   });
// }


  $(".KLProductsBtn").click(function(event){
      var img = event.target.src;
      $("#KLproductsImg").attr("src",img);
      // console.log(event.target.src);
      //S:set The setTimeout here for the picture display more fluently
      setTimeout(function(){modal.css("display","block");}, 50);
  });


// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//  modal.css("display","none");
// };
span.click(function(){
  modal.css("display","none");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // console.log(modal);
  //S: here add the "[0]" behined "modal" is because the element queried out by JQuery is an "Object Object ",
  //S: whereas the event.target or the element queried out by document.getElementByid is an "HTML object"
  //S: So if you want to chanege the JQuery element into an "HTML object", add the "[0]" after it.
  if( event.target == modal[0]){
    modal.css("display", "none");
  }
};

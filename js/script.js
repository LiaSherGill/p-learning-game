// $(document).ready(function(){
//   $("div.letter").click(function(){
//     $(this).hide();
//   });
// });

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.innerHTML === "Ura") {
//     x.innerHTML = "Swapped text!";
//   } else {
//     x.innerHTML = "Hello";
//   }
// }

// jQuery(document).ready(function(){
//     jQuery('#hideshow').on('click', function(event) {
//         jQuery('#content').toggle('show');
//     });
// });

// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").toggle();
//   });
// });

// $("div.letter").click(function(){
//    $("div.pronounciation").show();

// function clicked_on(){
//         document.getElementById('future-clicked').innerHTML = 'Future World';
//     }

$("#button").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});

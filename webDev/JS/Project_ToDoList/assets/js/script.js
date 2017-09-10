// Check off specific Todos by clicking
// $("li").click(function(){
//   //if li is gray
//   if($(this).css("color") === "rgb(128, 128, 128)") {
//     //turn it black
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   }
//   //else
//   else{
//     //turn it gray
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//     }
// });

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete Todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grabs new todo text from inut
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li>" + '<span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
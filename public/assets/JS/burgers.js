$(function(){
  $(".addBurger").on("submit", function(event){
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerName").val().trim()
    }
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(){
      location.reload();
    });
  });
  $(".devourBurger").on("click", function(event){
    var id = $(this).data("id")
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: 1}
    }).then(function(){
      location.reload();
    });
  });
});
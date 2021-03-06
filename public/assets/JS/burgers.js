$(function(){
  $(".create-form").on("submit", function(event){
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
    var id = $(this).data("burgerid");
    var updatedBurger = {
      devoured: 1
    }
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(function(){
      location.reload();
    });
  });
});
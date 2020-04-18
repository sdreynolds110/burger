$(function() {
    $("#newBurger").on("submit", function(event) {
      event.preventDefault();
      const newBurger = {
        burger_name: $("#newBurgerName")
          .val()
          .trim()
      };
      if (newBurger.burger_name === "") {
        return;
      }
      $.ajax("/api/burgers", { type: "POST", data: newBurger }).then(function() {
        $("#newBurgerName").val("");
        location.reload();
      });
    });
  
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      $.ajax("/api/burgers/" + id, { type: "PUT" }).then(function() {
        location.reload();
      });
    });
});
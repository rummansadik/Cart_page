$(document).ready(function () {
  var quantitiy = 0;
  $(".input-number-increment").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($("#quantity").val());

    // If is not undefined

    $("#quantity").val(quantity + 1);

    // Increment
  });

  $(".input-number-decrement").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($("#quantity").val());

    // If is not undefined

    // Increment
    if (quantity > 0) {
      $("#quantity").val(quantity - 1);
    }
  });
});

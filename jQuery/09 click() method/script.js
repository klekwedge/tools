$(document).ready(function () {
  $("li").click(function () {
    $(this).css("color", "green");
    alert( $(this).text())
  });

  $("li")
    .first()
    .click(function () {
      alert("The first element is clicked");
    });

});

$(document).ready(function () {
  $("li").click(function () {
    $(this).css("background-color", "green");
  });

  $("#blue").click(function () {
    $(this).css("background-color", "blue");
  });

  console.log($("ul").html());
  console.log($("li").html());

  $("li").html('<a href="https://google.com">Click</a>');

  $("ul").html(
    "<li>First element</li><li>Second element</li><li>Third element</li>"
  );
});

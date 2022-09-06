$(document).ready(function () {
  $("li").click(function () {
    $(this).css("background-color", "green");
  });

  $("#blue").click(function () {
    $(this).css("background-color", "blue");
  });

  $("ul li").css("color", "violet");

  console.log($("h2").text());
  console.log($("ul").text());
  console.log($("li").text());

  $("h2").text("New colors");
  console.log($("h2").text());

  $("li").text('Favorite color');
});

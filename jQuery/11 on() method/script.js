$(document).ready(function () {
  $("h2").on("click", function () {
    $(this).css("background", "violet");
  });

  $("input").on("keypress", function () {
    console.log("A key is pressed");
  });

  $("li").on("mouseenter", function () {
    $(this).css("background", "orange");
  });

  $("li").on("mouseleave", function () {
    $(this).css("background", "white");
  });
});

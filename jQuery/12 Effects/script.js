$(document).ready(function () {
  $("#fadeOut").on("click", function () {
    $("h2").fadeOut(1000, function () {
      console.log("Example code #1");
    });

    console.log("Fade Out");
  });

  $("#fadeIn").on("click", function () {
    $("h2").fadeIn(1000, function () {
      console.log("Example code #2");
    });

    console.log("Fade in");
  });

  $("#fadeToggle").on("click", function () {
    $("h2").fadeToggle(1000, function () {
      console.log("Example code #3");
    });

    console.log("Fade toggle");
  });

  $("#slideUp").on("click", function () {
    $("h2").slideUp(1000, function () {
      console.log("Example code slideUp");
    });

    console.log("slideUp");
  });

  $("#slideDown").on("click", function () {
    $("h2").slideDown(1000, function () {
      console.log("Example code slideDown");
    });

    console.log("slideDown");
  });

  $("#slideToggle").on("click", function () {
    $("h2").slideToggle(1000, function () {
      console.log("Example code slideToggle");
    });

    console.log("slideToggle");
  });
});

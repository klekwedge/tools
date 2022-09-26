$(document).ready(function () {
  $("li").click(function () {
    $(this).css("background-color", "green");
  });

  $("li:lt(3)").addClass("firstThreeElements");
  $("li:lt(3)").removeClass("firstThreeElements");
  $("li:lt(3)").toggleClass("firstThreeElements");

  $("li:gt(2)").addClass("lastElements");

  $("li").first().toggleClass("done");
  $("li").toggleClass("done");
});

$(document).ready(function () {
  $("li").click(function () {
    $(this).css("background-color", "green");
  });

  $("#blue").click(function () {
    $(this).css("background-color", "blue");
  });

  // $("img").css({
  //   width: "300",
  //   height: "200",
  // });

  $("img").attr({
    width: "300",
    height: "200",
  });

  $("img:first").attr("src", "img/horrified.png");
  $("img:last").attr("src", "img/angry.png");

  $("input").attr("type", "color");
});

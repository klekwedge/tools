$(document).ready(function () {
  $("li").click(function () {
    $(this).css("background-color", "green");
  });

  $("ol li").click(function () {
    $(this).css("background-color", "yellow");
  });

  $("#blue").click(function () {
    $(this).css("background-color", "blue");
  });

  $(".one").click(function () {
    $(this).css("background-color", "orange");
  });

  $(".one").css("backgroundColor", "violet");

  const awesomeStyle = {
    color: "white",
    backgroundColor: "purple",
  };

  $(".one").css(awesomeStyle);

  $("ul li").css("color", 'cyan');
});

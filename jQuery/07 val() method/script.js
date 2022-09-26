$(document).ready(function () {
  $("li").click(function () {
    $(this).css("background-color", "green");
  });

  console.log($("input").val());
  $("input").val("John");
  $("input").val("");

  console.log($("select").val());
});

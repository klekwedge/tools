$(document).ready(function () {
  $("li").click(function () {
    $(this).toggleClass("done");
  });

  $("span").click(function (event) {
    event.stopPropagation();
  });

});

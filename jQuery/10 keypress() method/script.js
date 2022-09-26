$(document).ready(function () {
  $("input").keypress(function (event) {
    // $(this).css("border", "1px solid green");
    console.log(event);
    if (event.which === 13) {
      alert("You have pressed Enter");
    }
  });
});

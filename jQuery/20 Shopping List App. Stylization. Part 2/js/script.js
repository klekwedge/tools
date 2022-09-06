$(document).ready(function () {
  $("ul").on('click', 'li', function () {
    $(this).toggleClass("done");
  });

  $("ul").on('click', 'span', function (event) {
    event.stopPropagation();
    $(this)
      .parent()
      .fadeOut(function () {
        $(this).remove();
      });
  });

  $("input").keypress(function (event) {
    if (event.which === 13) {
      const itemText = $(this).val();
      $("ul").append(`<li><span>x</span> ${itemText}</li>`);
      $(this).val('')
    }
  });
});

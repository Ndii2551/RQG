$(document).ready(function () {
  $("#new-quote").on("click", function () {
    $.getJSON("/quote", function (quote) {
      const text = `<p>"${quote.quote}"</p><p>- ${quote.author}</p>`;
      $("#quote").html(text);
    });
  });
});

$(function() {
  $("header h1").on("click", function() {
    location.href = $(this).find("a").attr("href");
  }).css({
    "cursor": "pointer"
  });

  $("a.foto").fancybox();
});

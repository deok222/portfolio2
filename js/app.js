// aside menu
var btn = $(".btn");
var side = $(".side");

btn.click(function () {
  side.toggleClass("active");

  if (side.hasClass("active")) {
    $(this).find("img").attr("src", "./images/close.png");
  } else {
    $(this).find("img").attr("src", "./images/open.png");
  }
});

$(".go_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

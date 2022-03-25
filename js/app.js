// aside menu
var btn = $(".btn");
var side = $(".side");

btn.click(function () {
  side.toggleClass("active");

  if (side.hasClass("active")) {
    $(this).find("img").attr("src", "./images/close1.png");
  } else {
    $(this).find("img").attr("src", "./images/open1.png");
  }
});

// go top
$(".go_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

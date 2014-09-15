/*global $*/
/*jslint sloppy:true, browser: true*/
var pageTitle = $("h1.page-title");
pageTitle.text("My code is running!");
$(window).on("click", function (e) {
    pageTitle.text(["click:", e.clientX, e.clientY].join(" "));
});
pageTitle.on("click", function (e) {
    pageTitle.toggleClass("clicked");
});
var logo = $("img.logo");
$(window).on("click", function (e) {
    logo.css({left: e.clientX + 'px',
              top: e.clientY + 'px'});
});
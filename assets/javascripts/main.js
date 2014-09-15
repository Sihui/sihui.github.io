/* HTML Preloader
*********************************************************************************************/

$(window).load(function() {
    $("#overlay").delay(1000).fadeOut();
    $("section").delay(2000).css('opacity', '1');
});

/* Vertical Centering
*********************************************************************************************/

$('.vertical_centered').each(function(){
    $container = $(this);
    $section = $container.parent();
    var margin_top = ($section.height() - $container.height())/2;
    $container.css('margin-top',margin_top);
});

/* Top Bounce Animation
*********************************************************************************************/
/*setInterval(function() {
  $('.top_greetings').toggleClass("animated bounce");
}, 1500);*/

$("#top_greetings").click(function() {
    $('html, body').animate({
        scrollTop: $("#greetings").offset().top
    }, 500);
});

/* Work Show Preview
*********************************************************************************************/
/*$(function() {
    Grid.init();
});*/

$(document).ready(function() {
    $("#nav").ferroMenu({
            position    : "left-top",
            delay       : 50,
            rotation    : 720,
            margin      : 20,
            drag        : false,
            radius      : 100
        });
    $( window ).resize(function() {
      console.log("window-resized");
      //$.fn.ferroMenu.refreshMenu();
    });
});
/*$(document).ready(function() {
  console.log("updated");
  var nav = $("#nav");
  nav.ferroMenu();
  var controller = $("*[data-ferromenuitem='#nav']");
  controller.insertAfter(nav);
  $.fn.ferroMenu.refreshMenu();
  $.fn.ferroMenu.toggleMenu("#nav");
});*/
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
setInterval(function() {
  $('.top_greetings').toggleClass("animated bounce");
}, 1500);

$("#top_greetings").click(function() {
    $('html, body').animate({
        scrollTop: $("#greetings").offset().top
    }, 500);
});

$(function() {
    Grid.init();
});
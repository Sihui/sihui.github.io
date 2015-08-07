/* HTML Preloader
*********************************************************************************************/

$(window).load(function() {
    $("#overlay").delay(1000).fadeOut();
    $("section").delay(2000).css('opacity', '1');
});

/* Vertical Centering
*********************************************************************************************/

/*$('.vertical_centered').each(function(){
    $container = $(this);
    $section = $container.parent();
    var margin_top = ($section.height() - $container.height())/2;
    $container.css('margin-top',margin_top);
});*/

/* Top Bounce Animation
*********************************************************************************************/
/*setInterval(function() {
  $('.top_greetings').toggleClass("animated bounce");
}, 1500);*/

/*$("#top_greetings").click(function() {
    $('html, body').animate({
        scrollTop: $("#greetings").offset().top
    }, 500);
});*/

/* Work Show Preview
*********************************************************************************************/


$(document).ready(function() {
  console.log("new1");
  if ($(window).width() >= 1280){
    $(function() {
        Grid.init();
    });
  }
    $("#nav").ferroMenu({
            position    : "left-top",
            delay       : 50,
            rotation    : 720,
            margin      : 20,
            drag        : false,
            radius      : 130,
            opened      : true
        });

    $(window).resize(function(){
      if ($(window).width() >= 1280){
        $(function() {
            Grid.init();
        });
      }
    });
    /* Equal heigh for float li*/
    var heights = $("#projects li").map(function () { return $(this).height(); }).get();
    var maxHeight = Math.max.apply(null, heights);
    $("#projects li").height(maxHeight);
    var act_heights = $("#activities li").map(function () { return $(this).height(); }).get();
    var act_maxHeight = Math.max.apply(null, act_heights);
    $("#activities li").height(act_maxHeight);

    //assign height to content - for the height of work content
    var work_section_height = $("#work").height();
    var work_title_height = $("#work .title_wrap").height();
    var work_content_height = work_section_height - work_title_height;
    //var content_sf_image_height = work_content_height * 0.5 * 0.5;
    var content_text_height = $("content_row1_col1_title").height() - $("content_sf_image").height();
    $("#work .content_wrap").css("height", work_content_height / 1.2);
    //$(".content_row1_col1_title").css("height", content_wrap * 0.3);
    $("#work .content_text").css("height", content_text_height);

    //Add Geetings' JSON to HTML
    var node = new PrettyJSON.view.Node({
      el:$('#greetings_div'),
      data:info
    });
});
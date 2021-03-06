/* HTML Preloader
*********************************************************************************************/

$(window).load(function() {
    $("#overlay").delay(1000).fadeOut();
    $("section").delay(2000).css('opacity', '1');
});

$(document).ready(function() {
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


    //smooth scrolling from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});
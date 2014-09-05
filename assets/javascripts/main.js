/* HTML Preloader
*********************************************************************************************/

$(window).load(function() {
    $("#overlay").delay(1000).fadeOut();
    console.log('fadeOut');
    $("section").delay(2000).css('opacity', '1');
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function() {
    $("#dvid").hide(); //hide your div initially
    var topOfOthDiv = $("#othdiv").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#dvid").show(400); //reached the desired point -- show div
        }
        if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
            $("#dvid").hide(100); //reached the desired point -- show div
        }
    });
});


(function($){
// Find the toggles and hide their content
    $('.toggle').each(function(){
        $(this).find('.toggle-content').hide();
    });

    // When a toggle is clicked (activated) show their content
    $('.toggle a.toggle-trigger').click(function(){
        var el = $(this), parent = el.closest('.toggle');

        if( el.hasClass('active') )
        {
            parent.find('.toggle-content').slideToggle();
            el.removeClass('active');
        }
        else
        {
            parent.find('.toggle-content').slideToggle();
            el.addClass('active');
        }
        return false;
    });

    /* ---------------------------------------------- /*
     * Home BG
     /* ---------------------------------------------- */

    $(".screen-height").height($(window).height());

    $(window).resize(function(){
        $(".screen-height").height($(window).height());
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({'background-attachment': 'scroll'});
    } else {
        $('#home').parallax('50%', 0.1);
    }

})(jQuery);




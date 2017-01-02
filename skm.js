new WOW().init();


$(document).ready(function () {
    $('.nav a').on('click', function(){
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
    });
});



$(window).scroll(function() {
    if($(this).scrollTop() > 200)  /*height in pixels when the navbar becomes non opaque*/
    {

    } else {

    }
});
jQuery(document).ready(function($) {
    var windowWidth = $(window).width();

    $(window).on('load', function () {

        $('.va').toggleClass('vertical-align', $(window).width() > 991);
        $('.ce').toggleClass('center-element', $(window).width() > 767);
        $('#init').toggleClass('container', $(window).width() < 992);


    }).trigger('load');



    $(window).on('resize', function () {
        if ($(window).width() != windowWidth){
            windowWidth = $(window).width();
            $('.va').toggleClass('vertical-align', $(window).width() > 991);
            $('.ce').toggleClass('center-element', $(window).width() > 767);
            $('#init').toggleClass('container', $(window).width() < 992);
        }

    }).trigger('resize');


});


$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
        instances.push(new moveItItem($(this)));
    });
    window.onload = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function (inst) {
            inst.update(scrollTop);
        });

    }
    window.onscroll = function(){
        var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });

    }
}

var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
    if(scrollTop > 0) {
        var pos = scrollTop / this.speed;
        this.el.css('transform', 'translateY(' + -pos + 'px)');
    }
    else{
        this.el.css('transform', 'translateY(0px)');
    }

};

$(function(){
    $('[data-scroll-speed]').moveIt();
});


(function($) {
    $(document)
        .on( 'show.bs.modal', '.modal', function() {
            $("html").removeClass( 'fixed-html' );
        })
        .on( 'hidden.bs.modal', '.modal', function() {

            $("html").addClass( 'fixed-html' );

        });



})(window.jQuery);








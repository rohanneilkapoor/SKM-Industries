/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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

var baseopacity=0

function showtext(thetext){
    if (!document.getElementById)
        return
    textcontainerobj=document.getElementById("tabledescription")
    browserdetect=textcontainerobj.filters? "ie" : "standard"
    instantset(baseopacity)
    textcontainerobj.innerHTML=thetext
    highlighting=setInterval("gradualfade(textcontainerobj)",50)
}

function hidetext(){
    cleartimer()
    instantset(baseopacity)
}

function instantset(degree){
    if (browserdetect=="ie")
        textcontainerobj.filters.alpha.opacity=degree
    else
        textcontainerobj.style.opacity=degree
    textcontainerobj.innerHTML=""
}

function cleartimer(){
    if (window.highlighting) clearInterval(highlighting)
}

function gradualfade(cur2){
    if (browserdetect=="standard" && cur2.style.opacity<1)
        cur2.style.opacity=Math.min(parseFloat(cur2.style.opacity)+0.2, 1)
    else if (browserdetect=="ie" && cur2.filters.alpha.opacity<100)
        cur2.filters.alpha.opacity+=20
    else if (window.highlighting)
        clearInterval(highlighting)
}




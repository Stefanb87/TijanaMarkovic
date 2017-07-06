$(document).ready(function() {
	"use strict";

   /* jQuery for nav*/
        $(window).scroll(function() {
            var top = 100;
            if ($(window).scrollTop() >= top) {
                $('nav').removeClass('navbar-transparent'); 
                $('nav').addClass('navbar-default'); 
                $('.navbar-brand, .aNav').css("color", "#000");
                $('.navbar-collapse').css("background-color", "#f6f6f6");
                $('.icon-bar').css("border", "2px solid #000");
            } else {
                $('nav').removeClass('navbar-default'); 
                $('nav').addClass('navbar-transparent'); 
                $('.navbar-brand, .aNav').css("color", "#fff");
                $('.navbar-collapse').css("background-color", "transparent");
                $('.icon-bar').css("border", "2px solid #fff");
            }
        }); 

    /* jquery for carousel*/

        $('.carousel').carousel({
          pause: null
        });

    /* jquery for accordion*/

        $('.accordionAnchor').on('click', function () {
            $('.accordionAnchor').removeAttr('id', 'accordionOne');
        });


});/* end of document.ready */
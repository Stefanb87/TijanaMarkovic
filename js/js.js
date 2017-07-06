$(document).ready(function() {
	"use strict";

    /*Smooth scrolling effect*/
    $('ul li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

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

        /* Parallax image for filmTv section */
        $('#filmTv').parallax({
            imageSrc: './images/cinema.jpg'
        });

        /* Parallax image for contact section */
        $('#contact').parallax({
            imageSrc: './images/theatre.jpg'
        });


        /* Lightbox for gallery section, magnificPopup plugin */
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });

        /* JQ za scroll to top */

            $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
              $('.scrollToTop').fadeIn();
            } else {
              $('.scrollToTop').fadeOut(100);
            }
          });
          
          //Click event to scroll to top
          $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
          });


});/* end of document.ready */

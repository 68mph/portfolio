// JavaScript Document

if($(window).width() > 1200) {

    $(function() {
            "use strict";
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    }
    
    
    $(function() {
        "use strict";
        $("a.menu").click(function() {
            $("#mobileNav").toggleClass("active");
        });
        
        $("#mobileNav a").click(function(){
        $("#mobileNav").removeClass("active");
    });
    
    $(function() {
       $("#mobileNav a").click(function() {
          // remove classes from all
          $("#mobileNav a").removeClass("active");
          // add class to the one we clicked
          $(this).addClass("active");
       });
    });
    
    
    });
    
    
    
    
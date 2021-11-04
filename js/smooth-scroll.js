jQuery(".scroll-link").on("click", function(e) {
 
      e.preventDefault();
      $target = "#" + jQuery(this).data("target");
      jQuery("html, body").animate({
        scrollTop: jQuery($target).offset().top
      }, 300);  
    });
   

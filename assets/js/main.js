
!(function($) {
  "use strict";
  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 300
    });
  }

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
  
    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 2500, 'easeInOutExpo');
      return false;
    });


  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    interval: 100,
    cycle: true,
    pause: false,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });


  
  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


})(jQuery);



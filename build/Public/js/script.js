$(document).ready(function() {
  document
    .querySelector('.contact-form')
    .addEventListener('submit', function(e) {
      var name = document.getElementsByName('name')[0].value;
      var email = document.getElementsByName('email')[0].value;
      var message = document.getElementsByName('message')[0].value;
      console.log(name);
      e.preventDefault();
      $.ajax({
        url: '/api/send',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({
          name: name,
          email: email,
          message: message
        }),
        success: function(data) {
          console.log('worked');
        }
      });
    });

  $('.js--about').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('.stick').addClass('sticky');
      } else {
        $('.stick').removeClass('sticky');
      }
    },
    {
      offset: '80px'
    }
  );

  /* nav scroll  */

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  $('.js--wp-1').waypoint(
    function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    {
      offset: '70%'
    }
  );

  $('.js--wp-2').waypoint(
    function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-3').waypoint(
    function(direction) {
      $('.js--wp-3').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-4').waypoint(
    function(direction) {
      $('.js--wp-4').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-5').waypoint(
    function(direction) {
      $('.js--wp-5').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-6').waypoint(
    function(direction) {
      $('.js--wp-6').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-7').waypoint(
    function(direction) {
      $('.js--wp-7').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-8').waypoint(
    function(direction) {
      $('.js--wp-8').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );
  $('.js--wp-9').waypoint(
    function(direction) {
      $('.js--wp-9').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );

  setTimeout(function() {
    $('body').css('opacity', '1');
    $('body').css('transition', '2s');
  });

  setTimeout(function() {
    $('.header-about').css('opacity', '1');
    $('.header-about').css('transition', '3s');
    $('.nav').css('opacity', '1');
    $('.nav').css('transition', '3s');
  }, 2000);

  $('#something').click(function() {
    setTimeout(function() {
      location.reload();
    }, 2000);
  });

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    nav.slideToggle(500);
  });

  //// image gallery

  var width = 600;
  var animationSpedd = 2000;
  var pause = 4000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;
  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate(
        { 'margin-left': '-=' + width },
        animationSpedd,
        function() {
          currentSlide++;
          if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  startSlider();

  ///////////////////////////////////////////////////////////

  var $slider2 = $('#slider2');
  var $slideContainer2 = $slider2.find('.slides2');
  var $slides2 = $slideContainer2.find('.slide2');
  var currentSlide2 = 1;

  var interval2;
  function startSlider2() {
    interval2 = setInterval(function() {
      $slideContainer2.animate(
        { 'margin-left': '-=' + width },
        animationSpedd,
        function() {
          currentSlide2++;
          if (currentSlide2 === $slides2.length) {
            currentSlide2 = 1;
            $slideContainer2.css('margin-left', 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider2() {
    clearInterval(interval2);
  }

  $slider2.on('mouseenter', stopSlider2).on('mouseleave', startSlider2);
  startSlider2();

  ///////////////////////////////////////////////////////////

  var $slider3 = $('#slider3');
  var $slideContainer3 = $slider3.find('.slides3');
  var $slides3 = $slideContainer3.find('.slide3');
  var currentSlide3 = 1;

  var interval3;
  function startSlider3() {
    interval3 = setInterval(function() {
      $slideContainer3.animate(
        { 'margin-left': '-=' + width },
        animationSpedd,
        function() {
          currentSlide3++;
          if (currentSlide3 === $slides3.length) {
            currentSlide3 = 1;
            $slideContainer3.css('margin-left', 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider3() {
    clearInterval(interval3);
  }

  $slider3.on('mouseenter', stopSlider3).on('mouseleave', startSlider3);
  startSlider3();

  ///////////////////////////////////////////////////////////
  var $slider4 = $('#slider4');
  var $slideContainer4 = $slider4.find('.slides4');
  var $slides4 = $slideContainer4.find('.slide4');
  var currentSlide4 = 1;

  var interval4;
  function startSlider4() {
    interval4 = setInterval(function() {
      $slideContainer4.animate(
        { 'margin-left': '-=' + width },
        animationSpedd,
        function() {
          currentSlide4++;
          if (currentSlide4 === $slides4.length) {
            currentSlide4 = 1;
            $slideContainer4.css('margin-left', 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider4() {
    clearInterval(interval4);
  }

  $slider4.on('mouseenter', stopSlider4).on('mouseleave', startSlider4);
  startSlider4();

  ///////////////////////////////////////////////////////////
  var $slider5 = $('#slider5');
  var $slideContainer5 = $slider5.find('.slides5');
  var $slides5 = $slideContainer5.find('.slide5');
  var currentSlide5 = 1;

  var interval5;
  function startSlider5() {
    interval5 = setInterval(function() {
      $slideContainer5.animate(
        { 'margin-left': '-=' + width },
        animationSpedd,
        function() {
          currentSlide5++;
          if (currentSlide5 === $slides5.length) {
            currentSlide5 = 1;
            $slideContainer5.css('margin-left', 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider5() {
    clearInterval(interval5);
  }

  $slider5.on('mouseenter', stopSlider5).on('mouseleave', startSlider5);
  startSlider5();
});

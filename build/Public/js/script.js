$(document).ready(function() {

    document.querySelector('.contact-form').addEventListener('submit', function(e){
        var name = document.getElementsByName('name')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var message = document.getElementsByName('message')[0].value;
        console.log(name)
        e.preventDefault();
        $.ajax({
            url: '/api/send',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            }),
            success: function(data){
                console.log('worked')
            }
        })
    })

    $('.js--about').waypoint(function(direction) {
        if ( direction == 'down' ) {
            $('.stick').addClass('sticky');
        } else {
            $('.stick').removeClass('sticky');
        }
    }, {
        offset: '80px'
    })

   /* nav scroll  */

   $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn')
  }, {
      offset: '70%'
  })

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp')
}, {
    offset: '70%'
})
  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp')
}, {
    offset: '70%'
})
  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated fadeInUp')
}, {
    offset: '70%'
})
  $('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeInUp')
}, {
    offset: '70%'
})

setTimeout(function() {
    $('body').css('opacity', '1')
    $('body').css('transition', '2s')

})

setTimeout(function(){
    $('.header-about').css('opacity', '1')
    $('.header-about').css('transition', '3s')
    $('.nav').css('opacity', '1')
    $('.nav').css('transition', '3s')
}, 2000)


    $('#something').click(function() {
        setTimeout(function() {
        location.reload();
    }, 2000)
})

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    nav.slideToggle(500);
})



});
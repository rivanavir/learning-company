/* Scripts */
$(document).ready(function () {

  $(window).on('scroll', function () {
    var sticky = $('.navbar-desk'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fix-nav');
    else sticky.removeClass('fix-nav');
  })

  $('.navbar-nav>li>a, .top-nav>li>a, #services .text-block, .footer-nav li>a').on('click', function (e) {
    e.preventDefault();
    var elementId;
    if($(this).attr('href')){
      elementId = $(this).attr('href');
    }
    if($(this).data('href')){
      elementId = $(this).data('href');
    }
    if($(elementId).is(":visible") == true){
      $('html, body').animate({
        scrollTop: $(elementId).offset().top
      }, 1000);
    }
  })

  setTimeout(function () {
    $('.top-nav-wrap').addClass('showBlock');
  }, 500);
  setTimeout(function () {
    $('.top-nav-wrap').removeClass('hideBlock');
  }, 1200);
  setTimeout(function () {
    $('.top-nav-wrap').removeClass('showText');
  }, 2000);
});

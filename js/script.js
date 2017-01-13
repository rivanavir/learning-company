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

  if($('#pricePage').hasClass('price-page-section')){
    var stepPercent = 25;
    var startWidth = 0;
    var checkBlock;
    var progressBar = $('.progress-bar');
    var mainInner = $('.price-page-inner');
    var checkIcon = mainInner.find('.check-wrap');
    var resetButton = $('.price-page-inner .restart');
    var blockList = [];
    var count = 0;

    $('.price-page-block').each(function () {
      checkBlock = $('.question-wrap .question-block-inner');
      blockList.push(this);
    })

    changeStep(count);

    checkBlock.on('click', function () {
      count++;
      var answer = $(this).data('answer');
      startWidth += stepPercent;
      if(startWidth >= 100){
        startWidth = 100;
      }
      checkIcon.fadeIn(500);
      setTimeout(function () {
        progressBar.css('width', startWidth+'%');
        changeStep(count);
      }, 500);
    })
    resetButton.on('click', function () {
      startWidth = 0;
      mainInner.find('.active').removeClass('active');
      mainInner.find('.price-page-block').first().addClass('active');
      progressBar.css('width', startWidth+'%');
      checkIcon.fadeOut(100);
      count = 0;
      changeStep(count);
    })

    $('#contactForm').on('submit',function (e) {
      var data = $(this).serializeArray();
      checkIcon.fadeIn(500);
      setTimeout(function () {
        changeStep(5);
      }, 500);
      e.preventDefault();
    })

    function changeStep(i) {
      $.each(blockList, function (index, val) {
        $(val).hide();
      })
      if(i == 4){
        setTimeout(function () {
          progressBar.parents('.progress-wrap').hide();
        }, 800);
      }
      checkIcon.fadeOut(100);
      $('#'+blockList[i].id).addClass('active').fadeIn(1000);
    }
  }
});

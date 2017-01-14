/* Scripts */
$(document).ready(function () {

  $(window).on('scroll', function () {
    if(!$('.main-wrapper').hasClass('static-header')){
      var sticky = $('.navbar-desk'),
        scroll = $(window).scrollTop();
      if (scroll >= 100) sticky.addClass('fix-nav');
      else sticky.removeClass('fix-nav');
    }
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

  $('#contactForm').on('submit',function (e) {
    $('#email')[0].setCustomValidity('Please enter a valid email address.');
    e.preventDefault();
  })

  /* Price steps */
  if($('#pricePage').hasClass('price-page-section')){
    var stepPercent = 25;
    var startWidth = 0;
    var checkBlock;
    var progressBar = $('.progress-bar');
    var mainInner = $('.price-page-inner');
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
      checkBlock.removeClass('checked');
      var answer = $(this).data('answer');
      startWidth += stepPercent;
      if(startWidth >= 100){
        startWidth = 100;
      }
      $(this).addClass('checked');
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
      checkBlock.removeClass('checked');
      count = 0;
      changeStep(count);
    })

    $('#contactForm').on('submit',function (e) {
      var data = $(this).serializeArray();
      $('#form-wrap').addClass('checked');
      setTimeout(function () {
        $('#form-wrap').removeClass('checked');
      }, 500);
      setTimeout(function () {
        changeStep(5);
      }, 600);
      e.preventDefault();
    })

    function changeStep(i) {
      $.each(blockList, function (index, val) {
        $(val).hide();
        $(val).removeClass('active');
      })
      if(i == 4 || i == 5){
        setTimeout(function () {
          progressBar.parents('.progress-wrap').hide();
        }, 800);
      } else if(i < 4){
        progressBar.parents('.progress-wrap').show();
      }
      checkBlock.removeClass('checked');
      $('#'+blockList[i].id).addClass('active').fadeIn(1000);
    }
  }

  /* Slide code */
  if($('#interactive').hasClass('interactive-section')){
    var slide = $('.slide-block');
    var slideArr = [];
    var link = $('.link-list li a');
    var linkArr = [];
    var slideInner = $('.slide-inner');
    var slideWidth, slideHeigh;
    var slideImg = slide.find('img');
    var imgArr = [];

    slideImg.each(function () {
      imgArr.push({
        width: this.width,
        height: this.height
      });
    })
    slide.each(function (i) {
      slideArr.push(this);
      $(this).attr('id', 'slide'+ (i+1));
    })
    link.each(function (i) {
      linkArr.push(this);
      $(this).attr('data-href-id', '#slide'+ (i+1));
    })

    changeSlide(0);

    function changeSlide(i) {
      slideInner.css({
        'width': imgArr[i].width,
        'height': imgArr[i].height
      })
      $.each(slideArr, function (index, val) {
      })
      $('#'+slideArr[i].id).addClass('active').fadeIn(1000);
    }

  }
});

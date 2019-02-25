$(document).ready(function(){

  var btnYoutube_1 = $('#yotubeBtn_1');
  var youtubeVideo_1 = $('#youtubeVideo_1');
      btnYoutube_1.on('click', function() {
      youtubeVideo_1.addClass("show");
    });


  var btnYoutube_2 = $('#yotubeBtn_2');
  var youtubeVideo_2 = $('#youtubeVideo_2');
      btnYoutube_2.on('click', function() {
      youtubeVideo_2.addClass("show");
    });

  var btnYoutube_3 = $('#yotubeBtn_3');
  var youtubeVideo_3 = $('#youtubeVideo_3');
    btnYoutube_3.on('click', function() {
      youtubeVideo_3.addClass("show");
    });





  var slide = $('.video__single');
  var slideTotal = slide.length - 1;
  var slideCurrent = -1;

  function slideInitial() {
    slide.addClass('postactivede');
    setTimeout(function() {
      slideRight();
    }, 500);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var postactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var postactiveSlide = slide.eq(0);

    }

    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active postactive').addClass('postactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active postactive postactivede').addClass('preactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active postactive postactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive postactive postactivede').addClass('active');
    postactiveSlide.removeClass('preactivede preactive active postactivede').addClass('postactive');
  }

  function displayNone(){
    $(".video_yotube ").removeClass("show");
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var postactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var postactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('postactivede')) {
        thisSlide.removeClass('preactive active postactive postactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('postactive')) {
        thisSlide.removeClass('preactivede preactive active postactive').addClass('postactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active postactive postactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive postactive postactivede').addClass('active');
    postactiveSlide.removeClass('preactivede preactive active postactivede').addClass('postactive');
  }
  var left = $('.video__left');
  var right = $('.video__right');
  left.on('click', function() {
    slideLeft();
    displayNone ();
  });
  right.on('click', function() {
    slideRight();
    displayNone();

  });
  slideInitial();
});


$('.video__left').on('click', function() {
$('.active  .video_yotube')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
});

$('.video__right').on('click', function() {
  $('.active  .video_yotube')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
});




$('.active .video_display').on('click',function(e){
    $('.active  .video_yotube')[0].src = $(this).attr('href') + '?autoplay=1';
});

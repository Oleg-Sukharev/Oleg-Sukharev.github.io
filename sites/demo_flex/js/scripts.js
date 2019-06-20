'use strict';
(function() {
  $('.info__link').on('click', function() {
    $('a').click(function(event) {
      event.preventDefault();
    });
  });

  $('.header__lg-link').on('click', function() {
    if ($(this).hasClass('header__lg-link-active')) return;
    $('.header__lg-link').each(function() {
      $(this).removeClass( 'header__lg-link-active');
    });
    $(this).addClass('header__lg-link-active');
  });
}());

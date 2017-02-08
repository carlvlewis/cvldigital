$(function() {
  $('#menu-open').click(function() {
    $('.mobile-menu').slideDown();
    $('body').addClass('noScroll');
  });

  $('#menu-close').click(function() {
    $('.mobile-menu').slideUp();
    $('body').removeClass('noScroll');
  });
});

$(window).resize(function() {
  if ($(window).width() >=980) {
    $('.mobile-menu').slideUp();
    $('body').removeClass('noScroll');
  }
});

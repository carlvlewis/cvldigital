$(function() {
  var slideChange;
  var slideTime = 7000;
  var slides = $('#quote-carousel>.carousel-inner').children();
  slides.hide();

  $('#quote-carousel>.carousel-inner>.item:nth-child(1)').fadeIn(function(){
    $(this).toggleClass('active');
  });

  slideChange = setTimeout(nextPage, slideTime);

  function jumpTo(pointer) {
    // clear existing timeout
    clearTimeout(slideChange);

    // fade out shown quote
    $('#quote-carousel>.carousel-indicators>li.active').removeClass('active');
    $('#quote-carousel>.carousel-inner>.item.active').removeClass('active').fadeOut(function() {

      // fade in new quote
      $('#quote-carousel>.carousel-inner>.item:nth-child(' + pointer + ')').fadeIn().toggleClass('active');
      $('#quote-carousel>.carousel-indicators>li:nth-child(' + pointer + ')').fadeIn().toggleClass('active');

      // set new timeout
      slideChange = setTimeout(nextPage, slideTime);
    });
  }

  function nextPage() {
    clearTimeout(nextPage);
    var pointer = $('#quote-carousel>.carousel-inner>.item.active').index() + 1;
    var totalCt = $(slides).toArray().length;

    pointer++;

    if (pointer > totalCt) {
      pointer = 1;
    }

    jumpTo(pointer);

    slideChange = setTimeout(nextPage, 5000);
  }

  function prevPage() {

  }
});

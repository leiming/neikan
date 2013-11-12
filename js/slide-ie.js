$(document).ready(function () {
  if (!Modernizr.csstransitions) {
    $('#carousel').on('slide', function () {
      $(this).find('.carousel-inner').hide();
    });
    $('#carousel').on('slid', function () {
      $(this).find('.carousel-inner').slideDown();
    });
    $('#carousel').on('slide', function () {
      $(this).find('.carousel-inner').slideDown();
    });
  }
});
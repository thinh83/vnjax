$(function () {
  
  var msie6 = $.browser == 'msie' && $.browser.version < 7;
  
  if (!msie6) {
    var top = $('#stayOnTop').offset().top - parseFloat($('#stayOnTop').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
      
      var y = $(this).scrollTop();
      
      
      if (y >= top) {
        
        $('#stayOnTop').addClass('fixed');
      } else {
        
        $('#stayOnTop').removeClass('fixed');
      }
    });
  }  
});
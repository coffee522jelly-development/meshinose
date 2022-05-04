$(function(){
  var pagetop = $('#pagetop');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 900) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
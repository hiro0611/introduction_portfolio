$(function(){

  $(window).scroll(function(){
      $('.js-title-color').toggleClass('white', $(this).scrollTop() > $('#news').offset().top);
      $('.menu-link').toggleClass('white', $(this).scrollTop() > $('#news').offset().top);
  });

  $('.menu-trigger').on('click', function(){
    $('.js-toggle-menu').toggleClass('active');
    $('.js-toggle-humburger').toggleClass('active');
  });

  $('.menu-link').on('click', function(){
    $('.js-toggle-menu').toggleClass('active');
    $('.js-toggle-humburger').toggleClass('active');
  });

  $(window).scroll(function(){
    var wHeight = $(window).height();
    var scrollAmount = $(window).scrollTop();

    $('.scrollAnime').each(function(){
      var targetPosition = $(this).offset().top;
      if(scrollAmount > targetPosition - wHeight + 60){
        $(this).addClass('fadeIndown');
      }
    });
  });
});

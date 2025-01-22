(function($){
  "use strict";

  var maincursor = document.querySelector('#theme-cursor');
  var cursor = document.querySelector('.cursor-outer');
  var a = document.querySelectorAll('a, button');
  var swipercursornone = document.querySelector('.swiper-container');
  var swipercursor = document.querySelectorAll('.swiper-container');
  var swiperlinkcursor = document.querySelectorAll('.swiper-container .post-title a, .swiper-container .member-name a, .swiper-container .portfolio-title a');


  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
  });

  document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
  });

  document.addEventListener('mouseup', function(){
    cursor.classList.remove('click');
  });

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });

  swipercursor.forEach(item => {
    item.addEventListener('mouseover', () => {
      swipercursornone.classList.add('cursor-over');
      cursor.classList.add('swiper-cursor');
    });
    item.addEventListener('mouseleave', () => {
      swipercursornone.classList.remove('cursor-over');
      cursor.classList.remove('swiper-cursor');
    });
  });

  swiperlinkcursor.forEach(item => {
    item.addEventListener('mouseover', () => {
      maincursor.classList.add('cursor-pointer');
    });
    item.addEventListener('mouseleave', () => {
      maincursor.classList.remove('cursor-pointer');
    });
  })

})(jQuery);
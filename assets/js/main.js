
// header scroll
let lastScroll = 0;
$(window).scroll(function () { 
  curr = $(this).scrollTop();

  if (curr > lastScroll && curr > 95) {
    $('#header .sub-wrap').addClass('hide');
  } else {
    $('#header .sub-wrap').removeClass('hide');
  }

  lastScroll = curr;
});
// header sub-nav 
$('#header .nav-item').hover(function () {
    if ($(this).find('.sub-list').length) {
      $('#header .sub-wrap').css('--height','64');
      $(this).find('.sub-list').addClass('show');
      $(this).find('.sub-item:first-child .sub-title').addClass('active');
    }
  },
  function () {
    $('#header .sub-wrap').css('--height','0');
    $(this).find('.sub-list').removeClass('show');
  }
);
// header sub-title bold
$('#header .sub-title').hover(function (){
  $('#header .sub-title').removeClass('active');
  $(this).addClass('active');
},function (){
  $('#header .sub-title').removeClass('active');
});

// header side-nav show
$('#header .nav-right .btn-menu').click(function (){ 
  $('#header .side-nav').addClass('show');  
  $('html, body').css('overflow', 'hidden'); 
  $('#header .side-nav-dim').addClass('on');
});
$('#header .side-nav .btn-close').click(function () { 
  $('#header .side-nav').removeClass('show');  
  $('html, body').css('overflow', 'visible');
  $('#header .side-nav-dim').removeClass('on');
});
// header side-nav depth2-list
$('#header .side-nav .title-wrap').click(function (){ 
  $(this).toggleClass('active').next('.depth2-list').stop().slideToggle();  
});

// sc-visual swiper slide
const visualSlide = new Swiper('.sc-visual .swiper',{
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
})

// sc-story swiper slide
const storySlide = new Swiper('.sc-story .swiper', {
  spaceBetween: 16,
  loop: true,
  speed: 3000,
  slidesPerView: "auto",
  observeParents: true,
  observe: true,
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
  }
});

// sc-vision video btn
$('.sc-vision .play-btn').click(function () { 

  if ($(this).hasClass('on')) {
    $('.sc-vision .video').get(0).currentTime=0;
    $('.sc-vision .video').get(0).play();
  } else {
    $('.sc-vision .video').get(0).pause();
  }
  
  $(this).toggleClass('on');

});

// footer family slideUp
$('#footer .foot-family .family-title').click(function () { 
  $('#footer .foot-family .family-list').toggleClass('active');

  if($('#footer .foot-family .family-list').hasClass('active')){
    $('#footer .foot-family .down').addClass('rotate');
  } else {
    $('#footer .foot-family .down').removeClass('rotate');
  }
});
// footer family 외부 클릭 시 사라짐
$(document).click(function (event) {
  if (!$(event.target).closest('#footer .foot-family').length) {
    $('#footer .foot-family .family-list').removeClass('active');
  }
});
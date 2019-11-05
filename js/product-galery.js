$(function(){

  $('.product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__nav-slider'
  });
  $('.product__nav-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider',  
    focusOnSelect: true,
    prevArrow: false,
    nextArrow: false 
  });
 



});

  
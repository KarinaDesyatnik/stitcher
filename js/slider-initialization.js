$(function(){
$('.slider').slick({
	dots: true,
	prevArrow: false,
	nextArrow: false,
});

$('.product-list__slider').slick({
	slidesToShow: 5,
	prevArrow: '<img class="slider-arrows slider-arrows-prev" src="img/product-images/prev-arrow.png" alt="">',
	nextArrow: '<img class="slider-arrows slider-arrows-next" src="img/product-images/next-arrow.png" alt="">',
	responsive: [
   {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,

    }
  },
 {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 768,
    settings: {
       slidesToShow: 2,
    }
  },
  {
    breakpoint: 660,
    settings: {
    slidesToShow: 2,
    }
  },
  {
    breakpoint: 480,
    settings: {
    	slidesToShow: 2,
     
    }
  },
  
  
  


  ]

});

});
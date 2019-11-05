$(function(){
$('.btn-menu').click(function(){
	$(this).toggleClass('active');
	$('.header__menu ul').toggleClass('active');
	})
if(window.innerWidth > 992) {
    $('.header__menu ul .menu-item').hover(function () {
      $('.sub-menu', this).css('display', 'block');   
    }, function () { 
      $('.sub-menu', this).css('display', 'none'); 
    });
  }	
  ;(function ($) {
   if(window.innerWidth < 992) {
  $('.menu-link').on('click', function(e){
    e.preventDefault();
  }); 
}
}(jQuery));

if(window.innerWidth < 992) {
$('.header__menu ul .menu-item .menu-link').click(function(){ 
  $(this).parent().toggleClass('active');
  $(this).parent().find('.sub-menu').toggleClass('active');
  
});
}

 ;(function ($) {
   if(window.innerWidth < 992) {
  $('.needlecrafts-link').on('click', function(e){
    e.preventDefault();
  }); 
}
}(jQuery));

if(window.innerWidth < 992) {
$('.menu-item__needlecrafts li').click(function(){ 
  $('.sub-menu__needlecrafts-category', this).toggleClass('active');
  $(this).toggleClass('active'); 
});
}

});

if(window.innerWidth > 992) {
    $('.sub-menu__needlecrafts li').hover(function () {
      $('.sub-menu__needlecrafts-category', this).css('display', 'block');   
    }, function () { 
      $('.sub-menu__needlecrafts-category', this).css('display', 'none'); 
    });
  }

if(window.innerWidth > 992) {
    $('.sub-menu__needlecrafts li').hover(function () {
      $('.sub-menu__needlecrafts-category--first', this).css('display', 'block');   
    }, function () { 
      $('.sub-menu__needlecrafts-category--first', this).css('display', 'block'); 
    });
  }


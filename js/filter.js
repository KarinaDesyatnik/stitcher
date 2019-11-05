$(function(){
$('.filter__item-title').click(function(){
	$(this).parent().toggleClass('active');
	})

$('.selected-filters__item').click(function(){
	$(this).hide();
	})
$('.filter__reset').click(function(){
	$(this).hide();
	$('.selected-filters__item').hide();
	
	})

if(window.innerWidth < 992) {
   $('.filter__title--pink').click(function(){
	$('.filter__item').toggleClass('show');
	$('.sidebar__trastpilot').toggleClass('active');
	})
  }

});


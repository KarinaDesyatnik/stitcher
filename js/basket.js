$(function(){
$('.basket__close-item').click(function(){
	$(this).parent().parent().hide();
	
	})
$('.basket__clear .basket__footer-button').click(function(){
	$('.basket__item').hide();
	
	})
});


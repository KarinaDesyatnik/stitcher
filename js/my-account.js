$(function(){

$('.wishlist__clear .basket__footer-button').click(function(){
	$(this).hide();	
	})

$(".tab-account-menu").click(function() {
	$(".tab-account-menu").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-account-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.account-menu-mobil-title').click(function(){
	$('.account-tabs').toggleClass('active');	
	$('.account-tabs').removeClass('hide');
	$('.account-menu__btn').toggleClass('active');
	})
$('.tab-account-menu').click(function(){
	$('.account-tabs').addClass('hide');
	$('.account-tabs').removeClass('active');
	$('.account-menu__btn').removeClass('active');	
	$('.edit-address-wrapper').removeClass('active');
	$('.add-address-wrapper').removeClass('active');
	$('.order-details-wrapper').removeClass('active');	
	$('.orders-history').show();
	$('.account__address-list').show();
	})

$('.my-address__delete').click(function(){
	$(this).parent().parent().hide();	
	})

$('.account__button').click(function(){
	$('.add-address-wrapper').addClass('active');
	$('.account__address-list').hide();	
	})
$('.add-new-address__button').click(function(){
	$('.add-address-wrapper').removeClass('active');	
	$('.account__address-list').show();	
	})
$('.my-address__edit').click(function(){
	$('.edit-address-wrapper').addClass('active');
	$('.account__address-list').hide();		
	})
$('.edit-address__button').click(function(){
	$('.edit-address-wrapper').removeClass('active');
	$('.account__address-list').show();		
	})

$('.orders-history__details').click(function(){
	$('.order-details-wrapper').addClass('active');	
	$('.orders-history').hide();
	})


});


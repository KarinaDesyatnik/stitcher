$(function(){
	$('#billing-address').click(function(){
	$('.billing-address-wrapper').toggleClass('active');
	
	})
});

$(function(){
$(".payment-metod .tab").click(function() {
	$(".payment-metod .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".payment-metod .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

});
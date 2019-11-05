$(function(){
$("#product-description__header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
$('#more-reviews').click(function(){
		$('.product__reviews__item').toggleClass('active');
		$(this).addClass('active');
	})
$('#more-aq').click(function(){
		$('.questions-answer__item').toggleClass('active');
		$(this).addClass('active');
	})
$('.product-description__text-mobil-title').click(function(){
		$(this).parent().toggleClass('active');
		$(this).parent().parent().toggleClass('active');
		$(this).find('.mobil-next-arrow').toggleClass('active');
		$(this).parent().find('.product__reviews__item').removeClass('active');
		$(this).parent().parent().find('.questions-answer__item').removeClass('active');
		$(this).parent().find('.product__link').removeClass('active');
		$(this).parent().parent().find('.product__link').removeClass('active');
		$('.product-list__slider').slick('setPosition');

		
	});



});


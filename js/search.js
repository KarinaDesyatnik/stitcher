$(function(){

$('.header__search').click(function(){	
		$('.header__popular-search').addClass('active');		
	});
})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var searchWrapper = $(".header__search"); 
     var popularSearch = $(".header__popular-search"); 
    if (!searchWrapper.is(e.target) 
        && searchWrapper.has(e.target).length === 0) { 
      popularSearch.removeClass('active'); 
    }
  });
});
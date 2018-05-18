jQuery(function($) {
	$(".swap-menu_closed").click(function (){
		$(".header-nav ul").toggle();
		return false;
	});
		$(".swap-menu_opened").click(function (){
		$(".header-nav ul").toggle();
		return true;
	});
})
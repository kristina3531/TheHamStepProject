$(document).ready(function() {

	//Add class active in header-menu
	$(".header-menu__link, .tabBtn").on("click", function() {
		$(".header-menu__link.active, .tabBtn.active").removeClass("active");
		$(this).toggleClass("active");
	});

	//Tabs
	$(".tabBtn").on("click", function() {
		$(".tabContent").hide();
		$(".tabBtn.selected").removeClass("selected");
		$(this).toggleClass("selected");
		let tabId = $(this).attr("data-tab");
		$("#" + tabId).show();
	});

	$(".tabBtn:eq(0)").click();

});
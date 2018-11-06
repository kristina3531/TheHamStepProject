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


	let itemSize = 12;
	let maxGalleryLength = 36;
	let count = 0;

	function addElements() {
		let arrayElements = [];

		for(let i = 0; i < itemSize; i++) {

			//Create DOMs
let workGalleryItem = $("<div/>", {class: "work-gallery__item"}).html($("<div/>", {class: "work-gallery__img"})).html($("<img>", {src: `img/graphic-design/graphic-design${i+1}.jpg`,
																	alt: `Image${count+1}`}));
															

			arrayElements.push(workGalleryItem);
			count++;
			if(count === maxGalleryLength) {
				$("#loadMore").hide();
			}
		} 

		$('#tab-7').append(arrayElements);
	}

	addElements();
	
});

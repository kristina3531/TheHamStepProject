$(document).ready(function() {

	//Add class active in header-menu
	$(".header-menu__link, .tabBtn").on("click", function() {
		$(".header-menu__link.active, .tabBtn.active").removeClass("active");
		$(this).toggleClass("active");
	});

//    $('tabBtn:not(:first)').hide();
//    $('tabContent:not(:first)').hide();
	//Tabs
	$(".tabBtn").on("click", function() {
		$(".tabContent").hide();
		$(".tabBtn.selected").removeClass("selected");
		$(this).toggleClass("selected");
		let tabId = $(this).attr("data-tab");
		$("#" + tabId).show();
	});

	$(".tabBtn:eq(0)").click();
    $(".tabBtn-2:eq(0)").click();


	let itemSize = 12;
	let maxGalleryLength = 36;
	let count = 0;

	function addElements() {
		let arrayElements = [];
        														

		for(let i = 0; i < itemSize; i++) {

	       //Create DOMs
            
            let workGalleryItem = $(`<div class="work-gallery__item"><div class="work-gallery__img"><img src = "img/graphic-design/graphic-design${i + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Graphic Design</span></div></div>`);

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

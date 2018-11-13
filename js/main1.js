$(document).ready(function() {

    //Add class active in header-menu and tabs
    $(".header-menu__link, .tabBtn-1, .tabBtn-2").on("click", function() {
        $(".header-menu__link.active, .tabBtn-1.active, .tabBtn-2.active").removeClass("active");
        $(this).toggleClass("active");
    });

    //Show search-bar
    $(".header-form__search").on("click", function() {
        $(".header-form").toggleClass("open");
    });

    //    $('tabBtn:not(:first)').hide();
    //    $('tabContent:not(:first)').hide();
    //Tabs
    $(".tabBtn-1").on("click", function() {
        $(".tabContent-1").hide();
        $(".tabBtn-1.selected").removeClass("selected");
        $(this).toggleClass("selected");
        let tabId = $(this).attr("data-tab");
        $("#" + tabId).show();
    });

    $(".tabBtn-2").on("click", function() {
        $(".tabContent-2").hide();
        $(".tabBtn-2.selected").removeClass("selected");
        $(this).toggleClass("selected");
        let tabId = $(this).attr("data-tab");
        $("#" + tabId).show();
    });

    // $(".header-menu__link:eq(0)").click();
    $(".tabBtn-1:eq(0)").click();
    $(".tabBtn-2:eq(0)").click();


    let itemSize = 12;
    let arrayElements = [];
    let maxGalleryLength = arrayElements.length;
    let count = 0;

    function addElements() {

        for (let i = 0; i < itemSize; i++) {

            //Create DOMs

            let workGalleryItem = $(`<div class="work-gallery__item"><div class="work-gallery__img"><img src = "img/graphic-design/graphic-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Graphic Design</span></div></div>`);

            arrayElements.push(workGalleryItem);
            count++;
            if (count === maxGalleryLength) {
                $("#loadMore").hide();
            }

        }

        $('#tab-7').append(arrayElements);
    }

    addElements();
    $("#loadMore").on("click", addElements);

    //	//Slick-slider
    //	let aboutSlider = $(".about-slider");
    //	aboutSlider.slick({
    //		slidesToShow: 1,
    //		slidesToScroll: 1,
    //		arrows: false,
    //		fade: true,
    //		asNavFor: ".about-slider__nav-list"
    //	});
    //	$(".about-slider__nav-list").slick({
    //		centerMode: true,
    //		centerPadding: "80px",
    //		slidesToShow: 3,
    //		slidesToScroll: 1,
    //		asNavFor: ".about-slider",
    //		swipeToSlide: true,
    //		focusOnSelect: true,
    //		variableWidth: true,
    //		prevArrow: $(".about-slider__btn-prev"),
    //		nextArrow: $(".about-slider__btn-next")
    //	});
    //
    //	 $('a[data-slide]').click(function(e) {
    //   e.preventDefault();
    //   var slideno = $(this).data('slide');
    //   $('.about-slider__nav-list').slick('slickGoTo', slideno - 1);
    // });

    // //Slider with tabs
    // $(".about-slider__nav-item").on("click", function() {
    //     $(".about-slider__item").hide();
    //     $(".about-slider__nav-item.selected").removeClass("selected");
    //     $(this).toggleClass("selected");
    //     let tabId = $(this).attr("data-slide");
    //     $("#" + tabId).show();
    // });

    
    // $(".about-slider__nav-item:eq(2)").click();

    //Slider tabs - index
    $(".about-slider__item").not(:first).hide();
    $(".about-slider__nav-img").click(function() {
    	let currentIndex = $(".about-slider__nav-img.active").index();
    	$(".about-slider__item").eq(currentIndex).hide();
    	$(".about-slider__nav-img.active").removeClass("active");
    	$(this).addClass("active");
    	$(".about-slider__item").eq($(this).index()).fadeIn();
    });

    $(".review-main-item").not(:first).hide();
    $(".navlist-img").click(function() {
    	let currentIndex = $(".nav-list-img-active").index();
    	$(".revew-main-item").eq(currentIndex).hide();
    	$(".navlist-img-active").removeClass("navlist-img-active");
    	$(this).addClass("navlist-img-active");
    	$(".revew-main-item").eq($(this).index()).fadeIn();
    });

     // $('#prev').click(function () {
     //        let currentIndex = $('.navlist-img-active').index();
     //        $(".review-main-item").eq(currentIndex).hide();
     //        $('.navlist-img-active').removeClass('navlist-img-active');
     //        $('.navlist-img').eq(currentIndex - 1).addClass('navlist-img-active');
     //        $(".review-main-item").eq(currentIndex - 1).fadeIn();
     //    });

     //    $('#next').click(function () {
     //        let currentIndex = $('.navlist-img-active').index();

     //        $(".review-main-item").eq(currentIndex).hide();
     //        currentIndex = currentIndex === $('.navlist-img').length - 1 ? -1 : $('.navlist-img-active').index();
     //        $('.navlist-img-active').removeClass('navlist-img-active');
     //        $('.navlist-img').eq(currentIndex + 1).addClass('navlist-img-active');
     //        $(".review-main-item").eq(currentIndex + 1).fadeIn();
     //    });

    //Slider buttons
    $('.about-slider__btn-prev').click(function() {
        let currentIndex = $('.about-slider__nav-item.active').index();
        $(".about-slider__item").eq(currentIndex).hide();
        $('.about-slider__nav-item.active').removeClass('active');
        $('.about-slider__nav-item').eq(currentIndex - 1).addClass('active');
        $(".about-slider__item").eq(currentIndex - 1).fadeIn();
    });

    $('.about-slider__btn-next').click(function() {
        let currentIndex = $('.about-slider__nav-item.active').index();

        $(".about-slider__item").eq(currentIndex).hide();
        currentIndex = currentIndex === $('.about-slider__nav-item').length - 1 ? -1 : $('.about-slider__nav-item.active').index();
        $('.about-slider__nav-item.active').removeClass('active');
        $('.about-slider__nav-item').eq(currentIndex + 1).addClass('active');
        $(".about-slider__item").eq(currentIndex + 1).fadeIn();
    });

});
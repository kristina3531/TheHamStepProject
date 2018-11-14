$(document).ready(function() {
    $("a, button").click(function(e) {
        e.preventDefault();
    });

    //Show search-bar
    $(".header-form__search").on("click", function() {
        $(".header-form").toggleClass("open");
    });

    //Add class active in header-menu__link
    $(".header-menu__link").on("click", function() {
        $(".header-menu__link.active").removeClass("active");
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

    let itemSize = 3;
    let maxGalleryLength = 9;
    let count = 0;

    function addElements() {
				let arrayElements = [];
        for (let i = 0; i < itemSize; i++) {

            //Create DOMs

            let galleryGraphicDesign = $(`<div class="work-gallery__item filtr-item" data-category="all,graphic-design"><div class="work-gallery__img"><img src = "img/graphic-design/graphic-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Graphic Design</span></div></div>`);

            let galleryWebDesign = $(`<div class="work-gallery__item filtr-item" data-category="all,web-design"><div class="work-gallery__img"><img src = "img/web-design/web-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Web Design</span></div></div>`);

            let galleryLandingPagedesign = $(`<div class="work-gallery__item filtr-item" data-category="all,landing-page"><div class="work-gallery__img"><img src = "img/landing-page/landing-page${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Landing Page</span></div></div>`);

            let galleryWordpressdesign = $(`<div class="work-gallery__item filtr-item" data-category="all,wordpress"><div class="work-gallery__img"><img src = "img/wordpress/wordpress${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Wordpress</span></div></div>`);

            arrayElements.push(galleryGraphicDesign, galleryWebDesign, galleryLandingPagedesign, galleryWordpressdesign);
            count++;
            if (count === maxGalleryLength) {
                $("#loadMore").hide();
            }

        }

        $('.work-gallery').append(arrayElements);
    }

    addElements();
    $("#loadMore").on("click", addElements);

    //Filters
    var filterizd = $('.filtr-container').filterizr({});
    $(".filtr__btn").on("click", function() {
        $(".filtr__btn").removeClass("active");
        $(this).addClass("active");
    });

    //Slider
    $(".about-slider__item").not(":first").hide();
    $(".about-slider__nav-img").click(function() {
        let currentIndex = $(".about-slider__nav-img.active").index();
        $(".about-slider__item").eq(currentIndex).hide();
        $(".about-slider__nav-img.active").removeClass("active");
        $(this).addClass("active");
        $(".about-slider__item").eq($(this).index()).fadeIn('slow');
    });

    //Slider buttons
    $('.about-slider__btn-prev').click(function() {
        let currentIndex = $('.about-slider__nav-img.active').index();
        $(".about-slider__item").eq(currentIndex).hide();
        $('.about-slider__nav-img.active').removeClass('active');
        $('.about-slider__nav-img').eq(currentIndex - 1).addClass('active');
        $(".about-slider__item").eq(currentIndex - 1).fadeIn('slow');
    });

    $('.about-slider__btn-next').click(function() {
        let currentIndex = $('.about-slider__nav-img.active').index();

        $(".about-slider__item").eq(currentIndex).hide();
        currentIndex = currentIndex === $('.about-slider__nav-img').length - 1 ? -1 : $('.about-slider__nav-img.active').index();
        $('.about-slider__nav-img.active').removeClass('active');
        $('.about-slider__nav-img').eq(currentIndex + 1).addClass('active');
        $(".about-slider__item").eq(currentIndex + 1).fadeIn('slow');
    });


});
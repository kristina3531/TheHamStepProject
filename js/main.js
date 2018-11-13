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

    $(".tabBtn-1:eq(0)").click();
    $(".tabBtn-2:eq(0)").click();

    let itemSize = 12;
    let arrayElements = [];
    let maxGalleryLength = arrayElements.length;
    let count = 0;

    function addElements() {

        for (let i = 0; i < itemSize; i++) {

            //Create DOMs

            let galleryGraphicDesign = $(`<div class="work-gallery__item"><div class="work-gallery__img"><img src = "img/graphic-design/graphic-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Graphic Design</span></div></div>`);

            let galleryWebDesign = $(`<div class="work-gallery__item"><div class="work-gallery__img"><img src = "img/web-design/web-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Web Design</span></div></div>`);

            let galleryLandingPagedesign = $(`<div class="work-gallery__item"><div class="work-gallery__img"><img src = "img/landing-page/landing-page${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Landing Page</span></div></div>`);

            let galleryWordpressdesign = $(`<div class="work-gallery__item"><div class="work-gallery__img"><img src = "img/wordpress/wordpress${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Wordpress</span></div></div>`);

            arrayElements.push(galleryGraphicDesign, galleryWebDesign, galleryLandingPagedesign, galleryWordpressdesign);
            count++;
            if (count === maxGalleryLength) {
                $("#loadMore").hide();
            }

        }

        $('#tab-7').append(arrayElements);
    }

    addElements();
    $("#loadMore").on("click", addElements);

    //Slider
    $(".about-slider__item").not(":first").hide();
    $(".about-slider__nav-img").click(function() {
        let currentIndex = $(".about-slider__nav-img.active").index();
        $(".about-slider__item").eq(currentIndex).hide();
        $(".about-slider__nav-img.active").removeClass("active");
        $(this).addClass("active");
        $(".about-slider__item").eq($(this).index()).show();
    });

    //Slider buttons
    $('.about-slider__btn-prev').click(function() {
        let currentIndex = $('.about-slider__nav-img.active').index();
        $(".about-slider__item").eq(currentIndex).hide();
        $('.about-slider__nav-img.active').removeClass('active');
        $('.about-slider__nav-img').eq(currentIndex - 1).addClass('active');
        $(".about-slider__item").eq(currentIndex - 1).show();
    });

    $('.about-slider__btn-next').click(function() {
        let currentIndex = $('.about-slider__nav-img.active').index();

        $(".about-slider__item").eq(currentIndex).hide();
        currentIndex = currentIndex === $('.about-slider__nav-img').length - 1 ? -1 : $('.about-slider__nav-img.active').index();
        $('.about-slider__nav-img.active').removeClass('active');
        $('.about-slider__nav-img').eq(currentIndex + 1).addClass('active');
        $(".about-slider__item").eq(currentIndex + 1).show();
    });

    $('.gallery-wrap').masonry({});

});
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

    $(".header-menu__link:eq(0)").click();

    //Add class active in filtr__btn
    $(".filtr__btn").on("click", function() {
        $(".filtr__btn.active").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".filtr__btn:eq(0)").click();


    //Tabs
    $(".tabBtn").on("click", function() {
        $(".tabContent").hide();
        $(".tabBtn.selected").removeClass("selected");
        $(this).toggleClass("selected");
        let tabId = $(this).attr("data-tab");
        $("#" + tabId).show();
    });

    $(".tabBtn:eq(0)").click();

    //Add elements on page
    let itemSize = 3;
    let maxGalleryLength = 9;
    let count = 0;

    function addElements() {
        let arrayElements = [];
        for (let i = 0; i < itemSize; i++) {

            //Create DOMs

            let galleryGraphicDesign = $(`<div class="work-gallery__item graphic-design"><div class="work-gallery__img"><img src ="img/graphic-design/graphic-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Graphic Design</span></div></div>`);

            let galleryWebDesign = $(`<div class="work-gallery__item web-design"><div class="work-gallery__img"><img src = "img/web-design/web-design${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Web Design</span></div></div>`);

            let galleryLandingPagedesign = $(`<div class="work-gallery__item landing-page"><div class="work-gallery__img"><img src = "img/landing-page/landing-page${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Landing Page</span></div></div>`);

            let galleryWordpressDesign = $(`<div class="work-gallery__item wordpress"><div class="work-gallery__img"><img src = "img/wordpress/wordpress${count + 1}.jpg" alt="Image${count + 1}"></div><div class="work-gallery__info"><div class="work-gallery__icons"><a href="#" class="work-gallery__icon"><svg class="link"><use xlink:href="#link"></svg></a><a href="#" class="work-gallery__icon"><svg class="search"><use xlink:href="#search"></svg></a></div><h5 class="work-gallery__heading">creative design</h5><span class="work-gallery__cath">Wordpress</span></div></div>`);

            arrayElements.push(galleryGraphicDesign, galleryWebDesign, galleryLandingPagedesign, galleryWordpressDesign);
            count++;
            if (count === maxGalleryLength) {
                $("#loadMore").hide();
            }

        }

        $('.work-gallery').append(arrayElements);
    }

    addElements();
    // $("#loadMore").on("click", addElements);

    //Add preload animation
    $(".preload-btn").click(function() {
        $(".preload-dots").addClass("active");
        setTimeout(function() {
            $(".preload-dots").removeClass("active");
        }, 5000);
    });

    //Add preload images 

    //First (work) section
    $("#loadMore").on("click", function() {
        setTimeout(function() {
            addElements();
        }, 5000);
    });
    

    //Filters
    $(".filtr__btn").click(function() {
        let category = $(this).attr("id");
        if (category == "all") {
            $(".work-gallery__item").addClass("hide");
            setTimeout(function() {
              $(".work-gallery__item").removeClass("hide");
            }, 300);
        }
        else {
          $(".work-gallery__item").addClass("hide");
          setTimeout(function() {
              $("." + category).removeClass("hide");
            }, 300);
        }
    });
    
    //Slick slider
    $('.about-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.about-slider__nav',
        autoplay: true,
        autoplaySpeed: 2000
      });
      $('.about-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about-slider',
        // centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: '<button class="about-slider__nav-btn prev"><svg class="arrowLeft"><use xlink:href="#arrowLeft"></svg></button>',
        nextArrow: '<button class="about-slider__nav-btn next"><svg class="arrowRight"><use xlink:href="#arrowRight"></svg></button>'
      });

});
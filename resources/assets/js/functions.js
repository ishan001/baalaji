//LOADER
$(window).on("load", function () {
    "use strict";
    $(".loader").fadeOut(800);
});


jQuery(function ($) {
    "use strict";

    // Smooth Scroll
    var $root = $("html, body");
    $(".scrolling").on("click", function () {
        $root.animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 700);
        return false;
    });


    //Back to Top
    $("body").append('<a href="#" class="back-to"><i class="icon-arrow-up2"></i></a>');
    var amountScrolled = 700;
    var backBtn = $("a.back-to");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > amountScrolled) {
            backBtn.fadeIn("slow");
        } else {
            backBtn.fadeOut("slow");
        }
    });
    backBtn.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(200).countTo({
                from: 1,
                to: e,
                speed: 1500,
                refreshInterval: 50
            })
        })
    });

    // Push Menus
    var $menuLeft = $(".pushmenu-left");
    var $menuRight = $(".pushmenu-right");
    var $toggleleft = $("#menu_bars.left");
    var $toggleright = $("#menu_bars.right");
    $toggleleft.on("click", function () {
        $(this).toggleClass("active");
        $(".pushmenu-push").toggleClass("pushmenu-push-toright");
        $menuLeft.toggleClass("pushmenu-open");
        return false;
    });
    $toggleright.on("click", function () {
        $(this).toggleClass("active");
        $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
        $menuRight.toggleClass("pushmenu-open");
        return false;
    });


    // Accorduions
    $(".accordion_title").on("click", " > a", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200);
            $(".accordion_title > a i").removeClass("fa-minus").addClass("fa-plus");
        }
        else {
            $(".accordion_title > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".accordion_title > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).siblings(".content").slideDown(200);
        }

    });

    // tabbed content
    $(".tab_content").hide();
    $(".tab_content:first").show();
// if in tab mode 
    $("ul.tabs").on("click", "li", function () {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
    });
    // if in drawer mode on Mobile Version
    $(".tab_drawer_heading").on("click", function () {
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn(1200);
        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    // =============== Owl Carousel =================
    //Single Slide
    $("#plan_slider, #service_slider").owlCarousel({
        autoPlay: true,
        pagination: true,
        stopOnHover: true,
        navigation: false,
        singleItem: true
    });

    //News & Thoughts
    $("#news_slider").owlCarousel({
        autoPlay: 4000,
        items: 3,
        pagination: true,
        stopOnHover: true,
        navigation: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2]
    });


    // ========== Revolution Slider ============
    var revapi;
    revapi = jQuery("#rev_slider").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        scrollbarDrag: "true",
        delay: 9000,
        spinner: "off",
        navigation: {
            arrows: {enable: true},
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1170, 960, 750, 480],
        gridheight: [690, 600, 500, 300],
    });

    // =========== Parallax ===========
    $(".parallax").parallax("50%", 0.3);
    $(".parallax_one").parallax("50%", 0.3);
    $(".parallax_two").parallax("50%", 0.3);

    $(".parallax_news").parallax("50%", -0.5);
    $(".parallax_bg_slider").parallax("50%", -0.5);
    $(".page_header").parallax("50%", -0.5);


    // init cubeportfolio for Grids
    $("#grid_layout").cubeportfolio({
        layoutMode: "mosaic",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        caption: "fadeIn",
        displayType: "fadeIn",
        // lightbox
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
        lightboxTitleSrc: "data-title",
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });

    //Portfolio
    $("#layout-project").cubeportfolio({
        layoutMode: "mosaic",
        defaultFilter: "*",
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
    });

    // init cubeportfolio (Testinomial Page)
    $("#js-grid-masonry").cubeportfolio({
        layoutMode: "grid",
        gapHorizontal: 50,
        gapVertical: 20,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
    });

    //Project Filter
    $("#projects").cubeportfolio({
        filters: "#project-filter",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "slideDelay",
        gapHorizontal: 45,
        gapVertical: 30,
        gridAdjustment: "responsive",
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
    });

    //Contact Form
    $('#contact-form').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {

        } else {
            e.preventDefault();
            var $form = $(this);

            $('#result').removeClass('alert-success alert-danger').addClass('alert-warning').html('Submitting....');
            $.post($form.attr('action'), $form.serialize(), function (response) {
                $('#result').removeClass('alert-warning').addClass('alert-success').html(response.message);
            });

        }
    });

    $('#callus-form').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {

        } else {
            e.preventDefault();
            var $form = $(this);

            $('#result').removeClass('alert-success alert-danger').addClass('alert-warning').html('Submitting....');
            $.post($form.attr('action'), $form.serialize(), function (response) {
                $('#result').removeClass('alert-warning').addClass('alert-success').html(response.message);
            });

        }
    });
}); 




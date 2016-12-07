$(document).ready(function () {
    $('#rev_slider_1_1').show().revolution({
        delay: 9000,
        startwidth: 1200,
        startheight: 400,
        hideThumbs: 200,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 4,
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "round",
        touchenabled: "on",
        onHoverStop: "on",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 2,
        fullWidth: "on",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0
    });

    $(".jcarousel ul").carouFredSel({
        responsive: true,
        width: "100%",
        scroll: 1,
        prev: ".carousel_left",
        next: ".carousel_right",
        auto: false,
        items: {
            width: 250,
            height: "100%",
            //	height: "30%",	//	optionally resize item-height
            visible: {
                min: 1,
                max: 4
            }
        }
    });
    $('#to_top').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });

});

function clearMenuLink() {
    $('#home').removeClass('menu-active');
    $('#about').removeClass('menu-active');
    $('#product').removeClass('menu-active');
    $('#terms').removeClass('menu-active');
    $('#inquery').removeClass('menu-active');
    $('#contact').removeClass('menu-active');
}
$(window).on("load",function(){"use strict";$(".loader").fadeOut(800)}),jQuery(function(a){"use strict";var e=a("html, body");a(".scrolling").on("click",function(){return e.animate({scrollTop:a(a.attr(this,"href")).offset().top},700),!1}),a("body").append('<a href="#" class="back-to"><i class="icon-arrow-up2"></i></a>');var t=700,l=a("a.back-to");a(window).on("scroll",function(){a(window).scrollTop()>t?l.fadeIn("slow"):l.fadeOut("slow")}),l.on("click",function(){return a("html, body").animate({scrollTop:0},700),!1}),a(".number-counters").appear(function(){a(".number-counters [data-to]").each(function(){var e=a(this).attr("data-to");a(this).delay(200).countTo({from:1,to:e,speed:1500,refreshInterval:50})})});var s=a(".pushmenu-left"),i=a(".pushmenu-right"),o=a("#menu_bars.left"),r=a("#menu_bars.right");o.on("click",function(){return a(this).toggleClass("active"),a(".pushmenu-push").toggleClass("pushmenu-push-toright"),s.toggleClass("pushmenu-open"),!1}),r.on("click",function(){return a(this).toggleClass("active"),a(".pushmenu-push").toggleClass("pushmenu-push-toleft"),i.toggleClass("pushmenu-open"),!1}),a(".accordion_title").on("click"," > a",function(){a(this).hasClass("active")?(a(this).removeClass("active"),a(this).siblings(".content").slideUp(200),a(".accordion_title > a i").removeClass("fa-minus").addClass("fa-plus")):(a(".accordion_title > a i").removeClass("fa-minus").addClass("fa-plus"),a(this).find("i").removeClass("fa-plus").addClass("fa-minus"),a(".accordion_title > a").removeClass("active"),a(this).addClass("active"),a(".content").slideUp(200),a(this).siblings(".content").slideDown(200))}),a(".tab_content").hide(),a(".tab_content:first").show(),a("ul.tabs").on("click","li",function(){a(".tab_content").hide();var e=a(this).attr("rel");a("#"+e).fadeIn(),a("ul.tabs li").removeClass("active"),a(this).addClass("active"),a(".tab_drawer_heading").removeClass("d_active"),a(".tab_drawer_heading[rel^='"+e+"']").addClass("d_active")}),a(".tab_drawer_heading").on("click",function(){a(".tab_content").hide();var e=a(this).attr("rel");a("#"+e).fadeIn(1200),a(".tab_drawer_heading").removeClass("d_active"),a(this).addClass("d_active"),a("ul.tabs li").removeClass("active"),a("ul.tabs li[rel^='"+e+"']").addClass("active")}),a("#plan_slider, #service_slider").owlCarousel({autoPlay:!0,pagination:!0,stopOnHover:!0,navigation:!1,singleItem:!0}),a("#news_slider").owlCarousel({autoPlay:4e3,items:3,pagination:!0,stopOnHover:!0,navigation:!1,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2]});var n;n=jQuery("#rev_slider").revolution({sliderType:"standard",sliderLayout:"fullwidth",scrollbarDrag:"true",delay:9e3,spinner:"off",navigation:{arrows:{enable:!0},touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1}},responsiveLevels:[4096,1024,778,480],gridwidth:[1170,960,750,480],gridheight:[690,600,500,300]}),a(".parallax").parallax("50%",.3),a(".parallax_one").parallax("50%",.3),a(".parallax_two").parallax("50%",.3),a(".parallax_news").parallax("50%",-.5),a(".parallax_bg_slider").parallax("50%",-.5),a(".page_header").parallax("50%",-.5),a("#grid_layout").cubeportfolio({layoutMode:"mosaic",gapHorizontal:30,gapVertical:30,gridAdjustment:"responsive",caption:"fadeIn",displayType:"fadeIn",lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'}),a("#layout-project").cubeportfolio({layoutMode:"mosaic",defaultFilter:"*",gapHorizontal:20,gapVertical:20,gridAdjustment:"responsive",mediaQueries:[{width:1500,cols:4},{width:1100,cols:4},{width:800,cols:2},{width:480,cols:2},{width:320,cols:1}],lightboxDelegate:".cbp-lightbox",lightboxGallery:!0}),a("#js-grid-masonry").cubeportfolio({layoutMode:"grid",gapHorizontal:50,gapVertical:20,gridAdjustment:"responsive",mediaQueries:[{width:1500,cols:3},{width:1100,cols:3},{width:800,cols:3},{width:480,cols:2},{width:320,cols:1}]}),a("#projects").cubeportfolio({filters:"#project-filter",layoutMode:"grid",defaultFilter:"*",animationType:"slideDelay",gapHorizontal:45,gapVertical:30,gridAdjustment:"responsive",lightboxDelegate:".cbp-lightbox",lightboxGallery:!0}),a("#contact-form").validator().on("submit",function(e){if(e.isDefaultPrevented());else{e.preventDefault();var t=a(this);a("#result").removeClass("alert-success alert-danger").addClass("alert-warning").html("Submitting...."),a.post(t.attr("action"),t.serialize(),function(e){a("#result").removeClass("alert-warning").addClass("alert-success").html(e.message)})}}),a("#callus-form").validator().on("submit",function(e){if(e.isDefaultPrevented());else{e.preventDefault();var t=a(this);a("#result").removeClass("alert-success alert-danger").addClass("alert-warning").html("Submitting...."),a.post(t.attr("action"),t.serialize(),function(e){a("#result").removeClass("alert-warning").addClass("alert-success").html(e.message)})}})});
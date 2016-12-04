jQuery.noConflict();

var $ = jQuery;

$(document).ready(function(){

//$(".post-attachement").fitVids();
//$(".video_sc").fitVids();
$('.post').each(function() {
  
        $(this).find('.more-link').each(function() {
            $(this).parents('.post').find('.post-info').append(this);
		})})


	$("#hide").click(function(){
	$("#option_panel").css({"right":"-196px"});
	$("#hide").css({"right":"196px", "opacity":"0"});
	$("#show").css({"right":"0px", "opacity":"1"});

})
$("#show").click(function(){
	$("#option_panel").css({"right":"0px"});
	$("#hide").css({"right":"196px", "opacity":"1"});
	$("#show").css({"right":"0px", "opacity":"0"});
})

	$('#to_boxed').click(function(){
		$("#newcolor").empty();
	$( "<style>#boxed_layout{width:1200px; margin:60px auto;}</style>" ).appendTo( "#newlayout" )
	})
	$('#to_wide').click(function(){
		$("#newcolor").empty();
	$( "<style>#boxed_layout{width:100%; margin:0px auto;}</style>" ).appendTo( "#newlayout" )
	})



	$('#cb1').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#3B5A7A;}.page_title_ctn{background:#5F83A8;}#footer_bg{background-color:#47698D;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#618AB6; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #618AB6;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#618AB6;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#618AB6;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#618AB6;}#footer_cta_box{background:#2B3D50;}#footer_coms{background-color:#3B5A7A;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #618AB6;}</style>" ).appendTo( "#newcolor" )			

			})
			
			
	$('#cb2').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#3B5A7A;}.page_title_ctn{background:#5F83A8;}#footer_bg{background-color:#1d1d1d;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#618AB6; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #618AB6;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#618AB6;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#618AB6;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#444444;}#footer_cta_box{background:#303030;}#footer_coms{background-color:#3B5A7A;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #618AB6;}</style>" ).appendTo( "#newcolor" )			

			})
			
			
	$('#cb3').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#58784A;}.page_title_ctn{background:#97C47E;}#footer_bg{background-color:#5F854C;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#97C47E; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #97C47E;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#97C47E;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#97C47E;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#97C47E;}#footer_cta_box{background:#3B5C2C;}#footer_coms{background-color:#58784A;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #97C47E;}</style>" ).appendTo( "#newcolor" )			

			})
			
			
	$('#cb4').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#58784A;}.page_title_ctn{background:#97C47E;}#footer_bg{background-color:#1d1d1d;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#97C47E; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #97C47E;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#97C47E;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#97C47E;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#444444;}#footer_cta_box{background:#303030;}#footer_coms{background-color:#58784A;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #97C47E;}</style>" ).appendTo( "#newcolor" )			

			})
			
			
	$('#cb5').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#6D2222;}.page_title_ctn{background:#bd3333;}#footer_bg{background-color:#802929;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#C23838; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #C23838;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#C23838;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#C23838;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#C23838;}#footer_cta_box{background:#5F0909;}#footer_coms{background-color:#6D2222;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #C23838;}</style>" ).appendTo( "#newcolor" )			

			})
			
			
	$('#cb6').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#6D2222;}.page_title_ctn{background:#bd3333;}#footer_bg{background-color:#1d1d1d;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#C23838; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #C23838;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#C23838;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#C23838;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#444444;}#footer_cta_box{background:#303030;}#footer_coms{background-color:#6D2222;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #C23838;}</style>" ).appendTo( "#newcolor" )			

			})															
			
	$('#cb7').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#BE7505;}.page_title_ctn{background:#EEA435;}#footer_bg{background-color:#CA8112;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#EEA435; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #EEA435;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#EEA435;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#EEA435;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#EEA435;}#footer_cta_box{background:#BD7100;}#footer_coms{background-color:#BE7505;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #EEA435;}</style>" ).appendTo( "#newcolor" )			

			})	
			
	$('#cb8').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#BE7505;}.page_title_ctn{background:#EEA435;}#footer_bg{background-color:#1d1d1d;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#EEA435; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #EEA435;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#EEA435;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#EEA435;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#444444;}#footer_cta_box{background:#303030;}#footer_coms{background-color:#BE7505;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #EEA435;}</style>" ).appendTo( "#newcolor" )			

			})	
			
			
	$('#cb9').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#582E97;}#footer_bg{background-color:#6741A0;}.page_title_ctn{background:#8361B6;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#8361B6; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #8361B6;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#8361B6;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#8361B6;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#8361B6;}#footer_cta_box{background:#321064;}#footer_coms{background-color:#582E97;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #8361B6;}</style>" ).appendTo( "#newcolor" )			

			})	
			
			
	$('#cb10').click(function(){
		 $("#newcolor").empty();
$( "<style>body{background-color:#582E97;}#footer_bg{background-color:#1d1d1d;}.page_title_ctn{background:#8361B6;}.widget_post_title a,.more{color:#444444}.isotope-item a,.portfolio_desc a{color:#888}.post a,.pagination a,.sb_widget a,#comments a{color:#424242}#footer a:hover{color:#000}.tp-bannertimer{background:#8361B6; opacity:0.9; max-height:3px;}.tab-holder .tabs li.active a{border-top:3px solid #8361B6;}.testimonial-next:hover, .testimonial-prev:hover,.ta_c,.carousel_left:hover, .carousel_right:hover,.rp_left:hover,.rp_right:hover,.staff_left:hover,.staff_right:hover,.partners_left:hover,.partners_right:hover,.pb_bg,.pagination .current,.pagination a.active,.pagination a:hover,.pagination a:active,.page-numbers:hover,.current,.pricetable .pricetable-button-container a,.post-date-ctn,#options a.active, #options a:active, #options .selected a,#search-form input[type=submit],.cline,.cline_blog,.more-link:hover,.more:hover,.f_cta_button a,.post_link,#wp-calendar caption,.tagcloud a,#footer .wpcf7 input[type=submit],img[alt='Image 6']{background-color:#8361B6;}#footer a:hover,.testimonial-author a:hover,a,.post a:hover,#comments a:hover,.widget_post_title a:hover,.more:hover,.sb_widget a:hover,nav ul li a:hover,.current-menu-item a,#mobile-menu ul ul li a:before,#footer a,.page_subtitle,.img_link,#wp-calendar a{color:#8361B6;}.top_email a,.post .button_sc_ ,nav ul ul li a,.post .more-link:hover{color:#fff;}#top_bar{background:#444444;}#footer_cta_box{background:#303030;}#footer_coms{background-color:#582E97;} .current-menu-item a,nav ul li a:hover{border-bottom: 5px solid #8361B6;}</style>" ).appendTo( "#newcolor" )			

			})																									

	$('#bg01').click(function(){
	$( "<style>body{background:url(http://ryuka-design.com/Maxon/wp-content/themes/Maxon/bg/bg01.jpg) fixed top center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;</style>" ).appendTo( "#newbg" )
	})
	$('#bg02').click(function(){
	$( "<style>body{background:url(http://ryuka-design.com/Maxon/wp-content/themes/Maxon/bg/bg02.jpg) fixed top center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;</style>" ).appendTo( "#newbg" )
	})
	$('#bg03').click(function(){
	$( "<style>body{background:url(http://ryuka-design.com/Maxon/wp-content/themes/Maxon/bg/bg03.jpg) fixed top center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;</style>" ).appendTo( "#newbg" )
	})
	$('#bg04').click(function(){
	$( "<style>body{background:url(http://ryuka-design.com/Maxon/wp-content/themes/Maxon/bg/bg04.jpg) fixed top center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;</style>" ).appendTo( "#newbg" )
	})


$(window).load(function() {

//*** Loading effect ***//

$('#map_canvas').append('<div id="top_shadow"></div>');
$('.rev_slider').append('<div id="top_shadow"></div>');	
$('.column br').remove();






});

$('#to_top').click(function () {

$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
		
		});

//*** Superfish box ***//	


	$('nav ul').superfish({ 

            animation: {height:'show'},   // slide-down effect without fade-in 

            delay:     1000               // 1.2 second delay on mouseout 

        }); 

//*** Share box ***//	

$('.post-share').click(function(){  //Adds click event listener  
        $('#posts .share-box').toggle('slow'); // Toggles visibility.  Use the 'slow' parameter to add a nice effect.

    });

//*** Search form ***//	

var searchvisible = 0;            
    $("#searchtop").click(function(e){ 
        //This stops the page scrolling to the top on a # link.
        e.preventDefault();
        if (searchvisible ===0) {
            //Search is currently hidden. Slide down and show it.
            $("#search-form").slideDown('1000','easeInOutBack');
            $("#s").focus(); //Set focus on the search input field.
            searchvisible = 1; //Set search visible flag to visible.
        } else {
            //Search is currently showing. Slide it back up and hide it.
            $("#search-form").slideUp('400','linear');
            searchvisible = 0;
        }
    });

//*** Toggle ***//	

$('.toggle-content').each(function() {

if(!$(this).hasClass('default-open')){

$(this).hide();

}

});

$("div.toggle").click(function(){

if($(this).hasClass('active')){

$(this).removeClass("active");

}else{

$(this).addClass("active");

}

return false;

});

$("div.toggle").click(function(){

$(this).next(".toggle-content").slideToggle();

});

//*** Tabs ***//	

$('.tabs-wrapper').each(function() {
 var t = 1;
 
        $(this).find('li').each(function() {
            $(this).find('a').attr('href', '#tab'+t);
            $(this).parents('.tabs-wrapper').find('.tabs').append(this);
            t++;
        });
        /* GET ALL BODY */
        var t = 1;
        $(this).find('.tab_content').each(function() {
			$(this).attr('id', 'tab'+t);
            $(this).parents('.tabs-wrapper').find('.tabs-container').append(this);
            t++;
        });
$(this).find(".tab_content").hide(); //Hide all content

$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab

$(this).find(".tab_content:first").show(); //Show first tab content

});

//On Click Event

$("ul.tabs li").click(function(e) {

$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class

$(this).addClass("active"); //Add "active" class to selected tab

$(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content

$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content

e.preventDefault();

});

$("ul.tabs li a").click(function(e) {

e.preventDefault();

});	


//*** Change nav button ***//
      

	


$("<div id='nav_button' />").appendTo("nav");



$(window).resize(function() {

if ($(window).width() > 1020) {
	
	$("#mobile-menu").slideUp('400','linear');
	var mobilenav = 0;
$("nav ul").show();

$("nav ul a").click(function(){

$("nav ul").show();

})

}

if ($(window).width() < 1020) { 
var mobilenav = 0;
$("nav ul").hide();

$("#nav_button").show();

}

});
var mobilenav = 0;            
    $("#nav_button").click(function(e){ 
        e.preventDefault();
        if (mobilenav ===0) {
            $("#mobile-menu").slideDown('700','linear');
            mobilenav = 1;
        } else {

            $("#mobile-menu").slideUp('700','linear');
            mobilenav = 0;
        }
    });
$(function() {

//*** Portfolio filter effect ***//

$("#portfolio-filter li a").click(function(){

$("#portfolio-filter li a").removeClass("active");

$(this).addClass("active");

});

});

//*** Share icon effect ***//

$('.social-networks li, .share-box li, .social-icon, .social li').mouseenter(function(){

$(this).find('.popup').fadeIn();

});

$('.social-networks li, .share-box li, .social-icon, .social li').mouseleave(function(){

$(this).find('.popup').fadeOut();

});

//*** Load Flexsliders ***//

$('.flexslider').flexslider({

animation: "slide",              //String: Select your animation type, "fade" or "slide"

slideDirection: "horizontal",

directionNav: true,

start: function(slider){ // init the height of the first item on start

var $new_height = slider.slides.eq().height();     

slider.height($new_height);                                     

},          

before: function(slider){ // init the height of the next item before slide

var $new_height = slider.slides.eq(slider.animatingTo).height();                

if($new_height != slider.height()){

slider.animate({ height: $new_height  }, 400);

}

}          

});

//*** Setup prettyPhoto ***//

$('.blog_post_single a').has('img').addClass('prettyPhoto');

$('.blog_post_single a img').click(function () {  

var desc = $(this).attr('title');  

$('.blog_post_single a').has('img').attr('title', desc);  

});

$("a[class^='prettyPhoto']").prettyPhoto({

opacity: 0.50,

theme: 'light_square',

show_title: false,

horizontal_padding: 20,

social_tools: false

});

$('#page_content a').has('img').addClass('prettyPhoto');

$('#page_content a img').click(function () {  

var desc = $(this).attr('title');  

$('#page_content a').has('img').attr('title', desc);  

});

$("a[class^='prettyPhoto']").prettyPhoto({

opacity: 0.50,

theme: 'light_square',

show_title: false,

horizontal_padding: 20,

social_tools: false

});


//*** Testimonials ***//

$(window).load(function() {

$(".testimonials-wrapper .testimonial").first().show().addClass('active').siblings('.testimonial').hide().removeClass('active');

$(".testimonials-wrapper .testimonial-next").click(function(){

if (typeof($finish)=="undefined" || $finish == true)

$finish = false;

else

return false;

if ($(this).parent().find('.testimonial.active').next('.testimonial').length == 0) {

$(this).parent().find('.testimonial.active').animate({ left: '300%' },{ duration: 300, easing: 'easeInOutExpo', complete: function(){

$(this).hide().removeClass('active').parent().find('.testimonial').first().addClass('active').css('position','relative').css('left','-300%').fadeIn().animate({left:0},{ duration: 400, easing: 'easeInOutExpo', complete: function() { $finish = true; } });

}});

} else {

$(this).parent().find('.testimonial.active').animate({ left: '300%' },{ duration: 300, easing: 'easeInOutExpo', complete: function(){

$(this).hide().removeClass('active').css('position','absolute').next('.testimonial').addClass('active').css('position','relative').css('left','-300%').fadeIn().animate({left:0},{ duration: 400, easing: 'easeInOutExpo', complete: function() { $finish = true; } });

}});

}

});

$(".testimonials-wrapper .testimonial-prev").click(function(){

if (typeof($finish)=="undefined" || $finish == true)

$finish = false;

else

return false;

if ($(this).parent().find('.testimonial.active').prev('.testimonial').length == 0) {

$(this).parent().find('.testimonial.active').animate({ left: '-300%' },{ duration: 300, easing: 'easeInOutExpo', complete: function(){

$(this).hide().removeClass('active').parent().find('.testimonial').last().addClass('active').css('position','relative').css('left','300%').fadeIn().animate({left:0},{ duration: 400, easing: 'easeInOutExpo', complete: function() { $finish = true; } });

}});

} else {

$(this).parent().find('.testimonial.active').animate({ left: '-300%' },{ duration: 300, easing: 'easeInOutExpo', complete: function(){

$(this).hide().removeClass('active').css('position','absolute').prev('.testimonial').addClass('active').css('position','relative').css('left','300%').fadeIn().animate({left:0},{ duration: 400, easing: 'easeInOutExpo', complete: function() { $finish = true; } });

}});

}			

});

});

});

(function($) {

	$(function() {
		try {
			if (typeof _wpcf7 == 'undefined' || _wpcf7 === null)
				_wpcf7 = {};

			_wpcf7 = $.extend({ cached: 0 }, _wpcf7);

			_wpcf7.supportHtml5Placeholder
				= 'placeholder' in document.createElement('input');

			$('div.wpcf7 > form').ajaxForm({
				beforeSubmit: function(formData, jqForm, options) {
					jqForm.wpcf7ClearResponseOutput();
					jqForm.find('img.ajax-loader').css({ visibility: 'visible' });
					return true;
				},
				beforeSerialize: function(jqForm, options) {
					jqForm.find('[placeholder].placeheld').each(function(i, n) {
						$(n).val('');
					});
					return true;
				},
				data: { '_wpcf7_is_ajax_call': 1 },
				dataType: 'json',
				success: function(data) {
					if (! $.isPlainObject(data) || $.isEmptyObject(data))
						return;

					var ro = $(data.into).find('div.wpcf7-response-output');
					$(data.into).wpcf7ClearResponseOutput();

					$(data.into).find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
					$(data.into).find('form.wpcf7-form').removeClass('invalid spam sent failed');

					if (data.captcha)
						$(data.into).wpcf7RefillCaptcha(data.captcha);

					if (data.quiz)
						$(data.into).wpcf7RefillQuiz(data.quiz);

					if (data.invalids) {
						$.each(data.invalids, function(i, n) {
							$(data.into).find(n.into).wpcf7NotValidTip(n.message);
							$(data.into).find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
						});

						ro.addClass('wpcf7-validation-errors');
						$(data.into).find('form.wpcf7-form').addClass('invalid');

						$(data.into).trigger('invalid.wpcf7');

					} else if (1 == data.spam) {
						ro.addClass('wpcf7-spam-blocked');
						$(data.into).find('form.wpcf7-form').addClass('spam');

						$(data.into).trigger('spam.wpcf7');

					} else if (1 == data.mailSent) {
						ro.addClass('wpcf7-mail-sent-ok');
						$(data.into).find('form.wpcf7-form').addClass('sent');

						if (data.onSentOk)
							$.each(data.onSentOk, function(i, n) { eval(n) });

						$(data.into).trigger('mailsent.wpcf7');

					} else {
						ro.addClass('wpcf7-mail-sent-ng');
						$(data.into).find('form.wpcf7-form').addClass('failed');

						$(data.into).trigger('mailfailed.wpcf7');
					}

					if (data.onSubmit)
						$.each(data.onSubmit, function(i, n) { eval(n) });

					$(data.into).trigger('submit.wpcf7');

					if (1 == data.mailSent)
						$(data.into).find('form').resetForm().clearForm();

					$(data.into).find('[placeholder].placeheld').each(function(i, n) {
						$(n).val($(n).attr('placeholder'));
					});

					$(data.into).wpcf7FillResponseOutput(data.message);
				}
			});

			$('div.wpcf7 > form').each(function(i, n) {
				if (_wpcf7.cached)
					$(n).wpcf7OnloadRefill();

				$(n).wpcf7ToggleSubmit();

				$(n).find('.wpcf7-submit').wpcf7AjaxLoader();

				$(n).find('.wpcf7-acceptance').click(function() {
					$(n).wpcf7ToggleSubmit();
				});

				$(n).find('.wpcf7-exclusive-checkbox').each(function(i, n) {
					$(n).find('input:checkbox').click(function() {
						$(n).find('input:checkbox').not(this).removeAttr('checked');
					});
				});

				$(n).find('[placeholder]').each(function(i, n) {
					var input = $(n);

					if (_wpcf7.supportHtml5Placeholder)
						return;

					input.val(input.attr('placeholder'));
					input.addClass('placeheld');

					input.focus(function() {
						if ($(this).hasClass('placeheld'))
							$(this).val('').removeClass('placeheld');
					});

					input.blur(function() {
						if ('' == $(this).val()) {
							$(this).val($(this).attr('placeholder'));
							$(this).addClass('placeheld');
						}
					});
				});
			});

		} catch (e) {
		}
	});

	$.fn.wpcf7AjaxLoader = function() {
		return this.each(function() {
			var loader = $('<img class="ajax-loader" />')
				.attr({ src: _wpcf7.loaderUrl, alt: _wpcf7.sending })
				.css('visibility', 'hidden');

			$(this).after(loader);
		});
	};

	$.fn.wpcf7ToggleSubmit = function() {
		return this.each(function() {
			var form = $(this);
			if (this.tagName.toLowerCase() != 'form')
				form = $(this).find('form').first();

			if (form.hasClass('wpcf7-acceptance-as-validation'))
				return;

			var submit = form.find('input:submit');
			if (! submit.length) return;

			var acceptances = form.find('input:checkbox.wpcf7-acceptance');
			if (! acceptances.length) return;

			submit.removeAttr('disabled');
			acceptances.each(function(i, n) {
				n = $(n);
				if (n.hasClass('wpcf7-invert') && n.is(':checked')
				|| ! n.hasClass('wpcf7-invert') && ! n.is(':checked'))
					submit.attr('disabled', 'disabled');
			});
		});
	};

	$.fn.wpcf7NotValidTip = function(message) {
		return this.each(function() {
			var into = $(this);
			into.append('<span class="wpcf7-not-valid-tip">' + message + '</span>');
			$('span.wpcf7-not-valid-tip').mouseover(function() {
				$(this).fadeOut('fast');
			});
			into.find(':input').mouseover(function() {
				into.find('.wpcf7-not-valid-tip').not(':hidden').fadeOut('fast');
			});
			into.find(':input').focus(function() {
				into.find('.wpcf7-not-valid-tip').not(':hidden').fadeOut('fast');
			});
		});
	};

	$.fn.wpcf7OnloadRefill = function() {
		return this.each(function() {
			var url = $(this).attr('action');
			if (0 < url.indexOf('#'))
				url = url.substr(0, url.indexOf('#'));

			var id = $(this).find('input[name="_wpcf7"]').val();
			var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();

			$.getJSON(url,
				{ _wpcf7_is_ajax_call: 1, _wpcf7: id, _wpcf7_request_ver: $.now() },
				function(data) {
					if (data && data.captcha)
						$('#' + unitTag).wpcf7RefillCaptcha(data.captcha);

					if (data && data.quiz)
						$('#' + unitTag).wpcf7RefillQuiz(data.quiz);
				}
			);
		});
	};

	$.fn.wpcf7RefillCaptcha = function(captcha) {
		return this.each(function() {
			var form = $(this);

			$.each(captcha, function(i, n) {
				form.find(':input[name="' + i + '"]').clearFields();
				form.find('img.wpcf7-captcha-' + i).attr('src', n);
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
				form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
			});
		});
	};

	$.fn.wpcf7RefillQuiz = function(quiz) {
		return this.each(function() {
			var form = $(this);

			$.each(quiz, function(i, n) {
				form.find(':input[name="' + i + '"]').clearFields();
				form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
				form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
			});
		});
	};

	$.fn.wpcf7ClearResponseOutput = function() {
		return this.each(function() {
			$(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
			$(this).find('span.wpcf7-not-valid-tip').remove();
			$(this).find('img.ajax-loader').css({ visibility: 'hidden' });
		});
	};

	$.fn.wpcf7FillResponseOutput = function(message) {
		return this.each(function() {
			$(this).find('div.wpcf7-response-output').append(message).slideDown('fast');
		});
	};

})(jQuery);
function clearMenuLink()
{
	$('#home').removeClass('menu-active');
	$('#about').removeClass('menu-active');
	$('#product').removeClass('menu-active');
	$('#terms').removeClass('menu-active');
	$('#inquery').removeClass('menu-active');
	$('#contact').removeClass('menu-active');
}

var tpj=jQuery;
tpj.noConflict();
var revapi1;
tpj(document).ready(function() {
	if (tpj.fn.cssOriginal != undefined)
		tpj.fn.css = tpj.fn.cssOriginal;
	if(tpj('#rev_slider_1_1').revolution == undefined)
		revslider_showDoubleJqueryError('#rev_slider_1_1');
	else
		revapi1 = tpj('#rev_slider_1_1').show().revolution(
			{
				delay:9000,
				startwidth:1200,
				startheight:400,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:4,
				navigationType:"none",
				navigationArrows:"solo",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:2,
				fullWidth:"on",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
			});
});	//ready

jQuery(window).load(function() {
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
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46837196-1', 'baalajichemical.com');
ga('send', 'pageview');
//# sourceMappingURL=script.js.map

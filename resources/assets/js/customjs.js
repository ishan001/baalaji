jQuery.noConflict();

//var $ = jQuery;

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

@extends('master')

@section('title', 'Home')


@section('content')
    <div class="page_title_ctn">
        <div id="top_shadow"></div>
        <div class="wrapper">
            <div class="title_bb">
                <div class="page_title"> Our Products </div>
                <div class="page_subtitle">We have the products and services to meet your needs</div>
            </div>
            <div id="breadcrumbs">
                <div id="crumbs"><a href="/">Home</a> &nbsp;&nbsp;&raquo;&nbsp;&nbsp; <span>Our Products</span></div>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="wrapper">
            <div id="pb_ctn">
                <div class='pb_full_width module_cont module_portfolio' style='padding-top:0px; padding-bottom:30px;' >
                    <div class="sc_divider" ><span style="font-size:20px; font-weight:bold; ">Our Products</span></div>
                    <div style="clear:both; padding-top:20px"></div>
                    <p> Our experts are ready to help find the right specialty chemical products and services to meet your needs. Just choose from one of the categories below to get started. </p>
                </div>
                  <div class="portfolio">
                    <div id="portfolio-tags">
                        <ul class="splitter" id="options">
                            <li>
                                <ul class="optionset" data-option-key="filter">
                                    <li class="selected"><a href="#filter" data-option-value="*">All Products</a> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="portfolio_block image-grid columns4 isotope" id="list" style="position: relative; overflow: hidden; height: 822px;">
                        <div data-category="art " class="art  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img  src="/images/products/thumbs/detergents-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Detergents Chemicals" title="Detergents Chemicals"><a href="/images/products/detergents-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Detergents</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="art " class="art  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(287px, 0px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/toiletries-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Toiletries Chemicals" title="Toiletries Chemicals"><a href="/images/products/toiletries-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Toiletries</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="graphic " class="graphic  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(574px, 0px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/personal-care-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Personal Care Chemicals" title="Personal Care Chemicals"><a href="/images/products/personal-care-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Personal Care</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="graphic " class="graphic  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(861px, 0px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/rubber-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Rubber Chemicals" title="Rubber Chemicals"><a href="/images/products/rubber-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Rubber</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="illustration " class="illustration  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(0px, 274px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"><img width="545" height="360" src="/images/products/thumbs/cosmetic-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="4"><a href="/images/products/cosmetic-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Cosmetic</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="illustration " class="illustration  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(287px, 274px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/paint-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Paint Chemicals" title="Paint Chemicals"><a href="/images/products/paint-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Paint</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="illustration " class="illustration  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(574px, 274px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/ceramic-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Ceramic Chemicals" title="Ceramic Chemicals"><a href="/images/products/ceramic-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Ceramic</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="art " class="art  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(861px, 274px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/fiber-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Fiber Chemicals" title="Fiber Chemicals"><a href="/images/products/fiber-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Fiber</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="art " class="art  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(0px, 548px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/laboratory-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Laboratory Chemicals" title="Laboratory Chemicals"><a href="/images/products/laboratory-chemicalss.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Laboratory</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="illustration " class="illustration  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(287px, 548px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"> <img width="545" height="360" src="/images/products/thumbs/laundry-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Laundry Chemicals" title="Laundry Chemicals"><a href="/images/products/laundry-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Laundry</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>
                        <div data-category="illustration " class="illustration  element isotope-item" style="position: absolute; left: 0px; top: 0px; opacity: 1; -webkit-transform: translate3d(574px, 548px, 0px) scale3d(1, 1, 1);">
                            <div class="filter_img"><img width="545" height="360" src="/images/products/thumbs/perfumery-chemicals.jpg" class="attachment-portfolio_tn wp-post-image" alt="Perfumery Chemicals" title="Perfumery Chemicals"><a href="/images/products/perfumery-chemicals.jpg" class="prettyPhoto">
                                    <div class="img_link"></div>
                                </a></div>
                            <div class="portfolio_desc">
                                <h5>Perfumery</h5>
                                <h6> </h6>
                                <div class="cline" style="margin-top:-12px"></div>
                            </div>
                        </div>

                    </div>


                    <div class="clear"><!-- ClearFix --></div>
                </div>


            </div>
            <div class='clear'> </div>
        </div>
    </div>

@stop
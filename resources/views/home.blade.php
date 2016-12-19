@extends('master')

@section('title', 'Home')

@section('content')
    @include('include.banner')
    <section id="info" class="padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
                    <h2 class="text-capitalize bottom10">Welcome to <span class="green_t">Balaji Chemicals</span></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="text_box text-center top40 wow fadeIn" data-wow-delay="700ms">
                        <span><i class="icon-bargraph"></i></span>
                        <h4 class="bottom10 green_t">Who we are</h4>
                        <p class="text-justify">Balaji Chemicals is Sri Lanka's leading manufacturer exporter of a range of
                            Chemicals. A strong commitment to adhere to highest standards of quality and care for its people
                            and environment are the guiding principles which has transformed this company in rising from a
                            humble beginning a decade back to a leading player in Synthetic Pyrethroids today. </p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="text_box text-center top40 wow fadeIn" data-wow-delay="900ms">
                        <span><i class="icon-shopping-cart"></i></span>
                        <h4 class="bottom10 green_t">Our Products</h4>
                        <p class="text-justify">Balaji Chemicals has a wide range of products which are basically classified
                            into Technical and Formulation category. Balaji Chemicals currently offers a range of high value
                            Synthetic Pyrethroids, Pesticide Intermediates and Fungicides. Apart from these, a wide range of
                            Formulated products based on these active ingredients are offered. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="news" class="padding light layout_third">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center wow fadeInDown" data-wow-delay="500ms">
                    <h2 class="bottom10 text-capitalize">Our <span class="green_t">Products </span></h2>
                </div>
            </div>
            <div class="row">
                <div id="news_slider" class="owl-carousel">
                    <div class="item">
                        <div class="news">
                            <div class="image"><img src="/images/products/thumbs/detergents-chemicals.jpg" alt="News"></div>
                            <div class="news_text">
                                <h4 class="bottom10"><a href="#.">Detergents</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="news">
                            <div class="image"><img src="/images/products/thumbs/toiletries-chemicals.jpg" alt="News"></div>
                            <div class="news_text">
                                <h4 class="bottom10"><a href="#.">Toiletries</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="news">
                            <div class="image"><img src="/images/products/thumbs/personal-care-chemicals.jpg" alt="News"></div>
                            <div class="news_text">
                                <h4 class="bottom10"><a href="#.">Personal Care</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="news">
                            <div class="image"><img src="/images/products/thumbs/rubber-chemicals.jpg" alt="News"></div>
                            <div class="news_text">
                                <h4 class="bottom10"><a href="#.">Rubber</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="news">
                            <div class="image"><img src="/images/products/thumbs/cosmetic-chemicals.jpg" alt="News"></div>
                            <div class="news_text">
                                <h4 class="bottom10"><a href="#.">Cosmetic</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="news">
                            <div class="image"><img src="/images/products/thumbs/paint-chemicals.jpg" alt="News"></div>
                            <div class="news_text">
                                <h4 class="bottom10"><a href="#.">Paint</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="parallax_one padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                </div>
                <div class="col-sm-6">
                    <div class="bg_call border_radius wow fadeInRight" id="callform" data-wow-delay="500ms">
                        <h2 class="bottom10 text-center">Request a <span class="green_t">Call Back </span></h2>
                        <p class="text-center bottom20">If you need to speak to us about a general query fill in the form
                            below and we will call you back within the same working day.</p>
                        <form class="callus">
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" required>
                                </div>
                                <div class="col-sm-6 form-group">
                                    <input type="tel" class="form-control" placeholder="Phone Number" required>
                                </div>
                                <div class="col-sm-12 form-group">
                                    <textarea name="message" id="message" class="form-control" rows="2" placeholder="Message" ></textarea>
                                    <button type="submit" class="btn-green top10 border_radius text-uppercase">Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
@extends('master')

@section('title', 'Home')


@section('content')
    <section class="page_header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <p>Who We Are</p>
                    <h1 class="text-uppercase"> About Us</h1>
                </div>
            </div>
        </div>
    </section>
    <div class="page_linker">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <ul class="breadcrumb">
                        <li><a href="index.html"><i class="icon-home6"></i>Home</a></li>
                        <li class="active">About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <section id="about" class="padding-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 padding-bottom"> <img src="images/about.jpg" alt="About Us" class="img-responsive"> </div>
                <div class="col-sm-6 about_right padding-bottom">
                    <h2 class="bottom10">We Innovate & <span class="blue_t">Design</span></h2>
                    <p>BAALAJI CHEMICALS is one of the main supplier of chemical raw materials for industries such as
                        detergents,paint,rubber,ceramic,fiber,laundry,laboratory,toilatries,personalcare etc, we have
                        been able to build up a well-recognized business network that is sprawled all across Sri Lanka
                        and international markets. </p>
                    <p>The company's proficiency lies in meeting the exact needs and demands of a huge clientele with
                        the assistance of our young and dynamic team of professionals at work. Attaining customer
                        satisfaction has been foreseen as the company's mega success in this domain. Therefore, we offer
                        these minerals in safe packaging and at highly competitive rates. Additionally, prompt delivery
                        is another feature that has attracted a lot of customers from across the globe. Quality
                        consciousness, fair business norms, pioneering approach and professional management has been the
                        motivating force that has helped us to earn the trust and faith of the clients.</p>
                    <p>We have with us a group of competent employees who support us in intensification our whole supply
                        process. Our knowledgeable team members have comprehensive familiarity in their relevant fields.
                        They are fully aware with the demands of our clientele and proffer them preferred products in
                        particular time limit. Furthermore, advanced R&D, quality testing and storehouse & casing
                        facilities, aides us. </p>
                    <div class="number-counters text-center">
                        <div class="counters-item top15">
                            <p class="data"><strong data-to="12">0</strong></p>
                            <p>Years of Experience</p>
                        </div>
                        <div class="counters-item top15">
                            <p class="data"><strong data-to="14">0</strong><sub>k</sub></p>
                            <p>Happy Clients</p>
                        </div>
                        <div class="counters-item top15">
                            <p class="data"><strong data-to="100">0</strong><sub>%</sub></p>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
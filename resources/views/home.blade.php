@extends('master')

@section('title', 'Home')


@section('content')
    @include('include.banner')
    <div class="section">
        <div class="wrapper">
            <div id="pb_ctn">
                <div class='pb_full_width module_cont module_hype_text' style='padding-top:0px; padding-bottom:60px;'>
                    <div class="lt_box" style="margin:0px 0 0px 0;">
                        <div class="lt_text"> Thanks for checking us and </div>
                        <div class="lt_sub_text"> WELCOME TO THE BAALAJI CHEMICALS </div>
                    </div>
                </div>
                <div class='clear'> </div>
                <div class='pb_one_half module_cont module_iconbox' style='padding-top:0px; padding-bottom:30px;'>
                    <div class="icon_box">
                        <icon class="icon-resize-horizontal" style="color:#c3c3c3;"></icon>
                        <a href="#" target="">
                            <h3 style="color:;">WE ARE</h3>
                        </a>
                        <p> Balaji Chemicals is Sri Lanka's leading manufacturer exporter of a range of Chemicals. A strong commitment to adhere to highest standards of quality and care for its people and environment are the guiding principles which has transformed this company in rising from a humble beginning a decade back to a leading player in Synthetic Pyrethroids today. </p>
                    </div>
                </div>
                <div class='pb_one_half module_cont module_iconbox' style='padding-top:0px; padding-bottom:30px;'>
                    <div class="icon_box">
                        <icon class="icon-resize-horizontal" style="color:#c3c3c3;"></icon>
                        <a href="#" target="">
                            <h3 style="color:;">OUR PRODUCTS</h3>
                        </a>
                        <p> Balaji Chemicals has a wide range of products which are basically classified into Technical and Formulation category. Balaji Chemicals currently offers a range of high value Synthetic Pyrethroids, Pesticide Intermediates and Fungicides. Apart from these, a wide range of Formulated products based on these active ingredients are offered. </p>
                    </div>
                </div>
                <div class='clear'> </div>
                <div class='clear'> </div>
                @include('include.home_products')
                <div class='clear'> </div>
                <div class='clear'> </div>
            </div>
        </div>
    </div>
@stop
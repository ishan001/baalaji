@extends('master')

@section('title', 'Contact Us')
@section('content')
    @include('include.page-header')
    <div class="page_linker">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <ul class="breadcrumb">
                        <li><a href="/"><i class="icon-home6"></i>Home</a></li>
                        <li class="active">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div class="row margin-top-20 bottom20">
                <div class="row border-title">
                    <h2><span>Contact our team</span></h2>
                    <h3 class="text-center">For all your chemical needs!</h3>
                </div>
            </div>
            <hr>
            <div class="row margin-top-20">
                <p class="text-center">Thank you for your interest in Contract Baalaji Chemicals. Please use the following Form to send us your comments or inquiries and our team will be contact you as soon as possible. </p>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div id="map"></div>
        </div>
    </div>
    <section class="padding-top contact">
        <div class="container">
            <div class="row">
                <h3 class="bottom20"><span>Let’s Talk To Us</span></h3>
                <div class="col-sm-8">
                    <form class="callus padding-bottom" id="contact-form"  role="form" data-toggle="validator" action="{{ route('form-submit') }}">
                        <div class="form-group">
                            <label>Your Name *</label>
                            <div class="input-group">
                                <input class="form-control" required name="name" id="name" type="text">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Email Addres *</label>
                            <div class="input-group">
                                <input class="form-control" required name="email" id="email" type="email">
                                <span class="input-group-addon"><i class="icon-envelope2"></i></span>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Message *</label>
                            <div class="input-group">
                                <textarea class="form-control" name="message" id="message" required></textarea>
                                <span class="input-group-addon"><i class=" icon-comments"></i></span>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="form-group"><div id="result"></div></div>
                        <button type="submit" class="btn-green border_radius" id="btn_submit" name="btn_submit">Submit</button>
                    </form>
                </div>
                <div class="col-sm-4">
                    <div class="contact_detail padding-bottom">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="address">
                                    <span><i class="fa fa-phone"></i></span>
                                    <div class="text">
                                        <h4>Phone</h4>
                                        <p>(+94) 11 2392367 / (+94) 11 4996067 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="address">
                                    <span><i class="fa fa-fax"></i></span>
                                    <div class="text">
                                        <h4>Fax</h4>
                                        <p>(+94) 11 2441583</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="address">
                                    <span><i class="fa fa-envelope"></i></span>
                                    <div class="text">
                                        <h4>Email Address</h4>
                                        <p><a href="mailto:info@baalajichemical.com">info@baalajichemical.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="address">
                                    <span><i class="icon-location"></i></span>
                                    <div class="text">
                                        <h4>Address</h4>
                                        <p>180 A, Central Road,Colombo 12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
@section('scripts')
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyAOBKD6V47-g_3opmidcmFapb3kSNAR70U"></script>
    <script src="{{ elixir('js/map.js') }}"></script>
@stop

<div class="container bg_contact bg_one border_radius wow bounceInUp" data-wow-delay="500ms">
    <div class="row">
        <div class="col-sm-5">
            <div class="contact_inner">
                <i class="icon-phone4"></i>
                <h5><strong>(+94) 11 239 2367</strong></h5>
                <a href="mailto:info@baalajichemical.com">info@baalajichemical.com</a>
            </div>
        </div>
        <div class="col-sm-5">
            <div class="contact_inner">
                <i class="icon-location"></i>
                <h5><strong>180 A, Central Road,</strong></h5>
                <h5>Colombo 12</h5>
            </div>
        </div>
    </div>
</div>

<footer class="footer_top padding-top">
    <div class="container">
        <div class="row">
            <div class="col-sm-4 footer_panel heading_space">
                <a href="/" class="footer_logo bottom30"><img src="{{ url('/images/logo-white.png') }}" alt="Baalaji Chemical"></a>
                <ul class="social_icon heading_top">
                    <li><a href="#." class="facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#." class="twitter"><i class="icon-twitter4"></i></a></li>
                    <li><a href="#." class="dribble"><i class="icon-dribbble5"></i></a></li>
                    <li><a href="#." class="instagram"><i class="icon-instagram"></i></a></li>
                    <li><a href="#." class="vimo"><i class="icon-vimeo4"></i></a></li>
                </ul>
            </div>
            <div class="col-sm-8 footer_panel heading_space">
                <h3 class="heading bottom30">Useful <span class="green_t">Links</span></h3>
                <ul class="links">
                    <li><a href="{{ url('/') }}"><i class="icon-chevron-small-right"></i>Home</a></li>
                    <li><a href="{{ url('/about-us') }}"><i class="icon-chevron-small-right"></i>About us</a></li>
                    <li><a href="{{ url('/products') }}"><i class="icon-chevron-small-right"></i>Our Product</a></li>
                    <li><a href="{{ url('/contact-us') }}"><i class="icon-chevron-small-right"></i>Contact us</a></li>
                </ul>
            </div>

        </div>
    </div>
</footer>
<div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <p>© Copyright <?=date('Y')?> baalajichemicals.com    Design and Developed by <a target="_new" href="http://www.nextgenweb.co.nz">Next Gen Web</a> </p>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="{{ elixir('js/vendor.js') }}"></script>
<script src="{{ elixir('js/script.js') }}"></script>
@yield('scripts')

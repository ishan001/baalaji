<header class="layout_first">
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-default bootsnav">
                <div class="topbar green_bg">
                    <span class="call">Call: <a href="tel:0094112392367">(+94) 11-2392-367</a></span>
                    <span class="call">Email: <a href="mailto:info@baalajichemical.com">info@cbaalajichemical.com</a></span>
                    <ul class="top_social">
                        <li><a href="#." class="facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#." class="twitter"><i class="icon-twitter4"></i></a></li>
                        <li><a href="#." class="google"><i class="icon-google-plus"></i></a></li>
                    </ul>
                </div>
                <div class="attr-nav">
                    <a class="scrolling getquote btn-dark text-uppercase border_radius" href="#callform">Get a quote</a>
                </div>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="/"><img src="images/logo.png" class="logo" alt=""></a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="slideInUp" data-out="fadeOut">
                        <li @if($menu == 'home')class="active" @endif>
                            <a href="/" class="border">Home</a>
                        </li>
                        <li @if($menu == 'about')class="active" @endif><a href="/about-us" class="border">About Us</a></li>
                        <li><a href="/products" class="border">Our Products</a></li>
                        <li><a href="/contact-us" class="border">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>
<div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
        <i class="fa fa-bars"></i>
    </button>
    <a class="navbar-brand" href="/"><img src="{{ url('/images/logo.png') }}" class="logo" alt=""></a>
</div>
<div class="collapse navbar-collapse" id="navbar-menu">
    <ul class="nav navbar-nav navbar-right" data-in="slideInUp" data-out="fadeOut">
        <li @if($menu == 'home')class="active" @endif>
            <a href="/" class="border">Home</a>
        </li>
        <li @if($menu == 'about')class="active" @endif><a href="{{ url('/about-us') }}" class="border">About Us</a></li>
        <li @if($menu == 'products')class="active" @endif><a href="{{ url('/products') }}" class="border">Our Products</a></li>
        <li @if($menu == 'contact')class="active" @endif><a href="{{ url('/contact-us') }}" class="border">Contact Us</a></li>
    </ul>
</div>
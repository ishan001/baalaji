<!DOCTYPE html>
<html lang="en-US">
<head>

    <title>Baalaji Chemicals ::: @yield('title')</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="description"
          content=" Sri Lanka Chemicals, Chemicals from Sri Lanka Pettah Supplier - Find Variety Chemicals from Baalaji Chemicals,  Buy Chemicals Made in Sri Lanka  Pettah ,  Sri Lanka Chemicals Suppliers, Sri Lanka Chemical Distributors,Sri Lanka Chemical Manufacturers,Sri Lanka Chemical Companies,Sri Lanka Industrial Chemicals, Pettah Chemicals "/>
    <meta name="keywords"
          content="Sri Lanka Chemicals, Sri Lanka Chemicals Suppliers, Sri Lanka Chemical Distributors,Sri Lanka Chemical Manufacturers,Sri Lanka Chemical Companies,Sri Lanka Industrial Chemicals, Pettah Chemicals    "/>
    <meta http-equiv="Content-Script-Type" content="text/javascript"/>
    <link rel="shortcut icon" href="/images/fav.png"/>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
    <link rel="stylesheet" href="{{ elixir('css/style.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/vendor.css') }}">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="{{ elixir('js/vendor.js') }}"></script>
    <script type='text/javascript' src='js/jquery.isotope.min.js'></script>
</head>

<body class="home page page-id-5 page-template-default">
<div id="boxed_layout">
    <div id="top_bg">
        @include('include.header')
        @yield('content')
        @include('include.footer')
    </div>
</div>
<script type="text/javascript" src="js/jcarousel.js"></script>
<script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>

<script type="text/javascript" src="js/script.js"></script>
</body>
</html>
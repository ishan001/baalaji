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
    <link rel="stylesheet" href="{{ elixir('css/style.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/vendor.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/fonts.css') }}">
</head>

<body>
<div class="loader">
    <div class="cssload-loader">
        <div class="cssload-inner cssload-one">
        </div>
        <div class="cssload-inner cssload-two">
        </div>
        <div class="cssload-inner cssload-three">
        </div>
    </div>
</div>
@include('include.header')
@yield('content')
@include('include.footer')
</body>
</html>
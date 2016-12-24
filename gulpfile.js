var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass([
        'style.scss'
        ], 'public/css/style.css')

        .sass([
            'loader.scss',
            'animate.scss',
            'bootsnav.scss',
            'bootstrap.scss',
            'cubeportfolio.scss',
            'owl.carousel.scss',
            'owl.transitions.scss',
            'slider.scss',
        ], 'public/css/vendor.css')

        .sass([
            'font-awesome.scss',
            'patta-icons.scss',
        ], 'public/css/fonts.css')

        .scripts([
            'bootsnav.js',
            'bootstrap.min.js',
            'jquery.themepunch.revolution.min.js',
            'jquery.cubeportfolio.min.js',
            'jquery.parallax-1.1.3.js',
            'jquery.themepunch.revolution.min.js',
            'jquery.themepunch.tools.min.js',
            'owl.carousel.min.js',
            'revolution.extension.layeranimation.min.js',
            'revolution.extension.navigation.min.js',
            'revolution.extension.parallax.min.js',
            'revolution.extension.slideanims.min.js',
            'revolution.extension.video.min.js',
            'jquery.appear.js',
            'jquery-countTo.js',
            'wow.min.js',
            'validator.min.js',
        ], 'public/js/vendor.js')
        .scripts([
            'gmaps.min.js',
            'map.js'
        ], 'public/js/map.js')
        .scripts([
            'functions.js'
        ], 'public/js/script.js');

    mix.version([
        'public/css/style.css',
        'public/css/vendor.css',
        'public/css/fonts.css',
        'public/js/script.js',
        'public/js/vendor.js',
        'public/js/map.js'
    ]);

});

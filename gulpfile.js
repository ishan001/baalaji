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
        'style.scss',
        'style_wide.scss'
        ], 'public/css/style.css')

        .sass([
            'media.scss',
            'prettyPhoto.scss'
        ], 'public/css/vendor.css')

        .scripts([
            //'jquery.flexslider.js',
            'jquery.themepunch.plugins.min.js',
            'jquery.themepunch.revolution.min.js',
            //'jquery.fitvids.js',
            //'superfish.js',
            //'jcarousel.js',
            //'jquery.form.min.js'
        ], 'public/js/vendor.js');
        
/*        .scripts([
            'customjs.js',
            'scripts.js'
        ], 'public/js/script.js');*/

    mix.version([
        'public/css/style.css',
        'public/css/vendor.css',
        //'public/js/script.js',
        'public/js/vendor.js'
    ]);

});

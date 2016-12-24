jQuery(function ($) {
    'use strict';

    //Contact Map
    var map;
    map = new GMaps({
        el: '#map',
        lat: 6.940475,
        lng: 79.856452,
        zoom: 16,
    });
    map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="overlay_map"><img src="/images/marker.png"><div class="overlay_arrow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
    });
});

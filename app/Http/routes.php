<?php

$app->get('/', function () {
    $data = [
        'menu' => 'home',
    ];

    return view('home',$data);
});

$app->get('/about-us', function () {
    $data = [
        'menu' => 'about',
    ];

    return view('about',$data);
});
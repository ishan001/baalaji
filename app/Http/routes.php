<?php

$app->get('/', function () {
    $data = [
        'menu' => 'home',
    ];

    return view('home', $data);
});

$app->get('/about-us', function () {
    $data = [
        'menu' => 'about',
    ];

    return view('about', $data);
});

$app->get('/products', function () {
    $data = [
        'menu' => 'products',
    ];

    return view('products', $data);
});

$app->get('/contact-us', function () {
    $data = [
        'menu' => 'contact',
    ];

    return view('contact', $data);
});

$app->post('form-submit', [
    'as' => 'form-submit',
    'uses' => 'Controller@submitForm'
]);
$app->post('call-us-submit', [
    'as' => 'call-us-submit',
    'uses' => 'Controller@callSubmitForm'
]);

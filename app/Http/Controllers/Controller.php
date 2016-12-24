<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Mail\Mailer;
use Laravel\Lumen\Routing\Controller as BaseController;


class Controller extends BaseController
{
    public function submitForm(Request $request)
    {
        $this->validate($request, [
            'name'    => 'required',
            'email'   => 'required|email',
            'message' => 'required'
        ]);

        $data = [
            'name'    => $request->input('name'),
            'email'   => $request->input('email'),
            'message' => $request->input('message'),
        ];
        Mail::send('email.template', $data, function ($message) use ($data) {
            $message->from('noreply@baalajichemical.com');
            $message->to('info@baalajichemical.com')->subject('Baalaji Chemicals Contact Us Request!');
        });


        return response()->json(['success' => true, 'message' => 'Your Message Successfully sent. Our team will be contact you shortly!']);
    }

    public function callSubmitForm(Request $request)
    {
        $this->validate($request, [
            'name'    => 'required',
            'phone'   => 'required'
        ]);

        $data = [
            'name'    => $request->input('name'),
            'phone'   => $request->input('phone'),
            'message' => $request->input('message'),
        ];
        Mail::send('phone.template', $data, function ($message) use ($data) {
            $message->from('noreply@baalajichemical.com');
            $message->to('info@baalajichemical.com')->subject('Baalaji Chemicals Call Us Request!');
        });


        return response()->json(['success' => true, 'message' => 'Your Message Successfully sent. Our team will be contact you shortly!']);
    }
}

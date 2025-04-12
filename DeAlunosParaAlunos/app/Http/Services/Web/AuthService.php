<?php

namespace App\Http\Services\Web;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService {
    public function login($data){
        if(Auth::attempt($data)){
            return [
                "status"=> "success",
                "message"=> "User logged succesefully",
            ];
        } else {
            return [
                "status"=> "error",
                "message"=> "Failed to login"
            ];
        }
    }

    public function register($data){
        $data->password = Hash::make($data->password);

        if(User::create($data)){
            return [
                "status"=> "success",
                "message"=> "User registered succesefully",
            ];
        } else {
            return [
                'status' => "error",
                'message' => "Failed to register"
            ];
        }
    }
}
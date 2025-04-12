<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Services\Web\AuthService;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AuthController extends Controller
{
    private $authService;

    public function __construct(AuthService $authService) {
        $this->authService = $authService;
    }

    public function loginForm(Request $request){
        return Inertia::render("Auth/Login");
    }

    public function registerForm(Request $request){
        return Inertia::render("Auth/Register");
    }

    public function login(Request $request) {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);

        $response = $this->authService->login($data);

        return response()->json($response, 200);
    }

    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'email' => ['required', 'unique:user', 'email'],
            'password' => 'required'
        ]);

        $response = $this->authService->register($data);

        return response()->json($response);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User */
        $user= User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password'=> bcrypt($data['password'])
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response(compact('user', 'token', 200));
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response(['message'=>'Invalid credentials']);
        }
        /** @var \App\Models\User */
        $user = Auth::user();
        $token=$user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

  

    public function logout(Request $request)
    {
        /** @var \App\Models\User */
       $user = request()->user();
       $user->currentAccessToken()->delete();
       return response(['message'=>'Logged out']);
    }
 
}

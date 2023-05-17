<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Console\Logger\ConsoleLogger;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response(['message' => 'Email or password is incorrect'], 422);
        }
        /** @var \App\Models\User */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }



    public function logout(Request $request)
    {
        /** @var \App\Models\User */
        $user = request()->user();
        $user->currentAccessToken()->delete(); //why is this undrlined red?
        return response(['message' => 'Logged out']);
    }

    // This works but it is not checking the password i think just the token...
    public function changePassword(Request $request)
    {
        //$credentials = $request->validated();
        // if (!Auth::attempt($credentials)) {
        //     return response(['message' => 'Password is incorrect'], 422);
        // }
        /** @var \App\Models\User */
        $user = Auth::user();


        $user->password = bcrypt($request->password);
        $user->save();
        return response($user);
    }
}

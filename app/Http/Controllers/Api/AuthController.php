<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Console\Logger\ConsoleLogger;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {

        $data = $request->validated();
        /** @var \App\Models\User */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'admin' => $data['admin']
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

    public function changePassword(ChangePasswordRequest $request)
    {
        /** @var \App\Models\User */
        $user = Auth::user();
        if (!Hash::check($request->password, $user->password)) {
            return response(['message' => 'Password is incorrect'], 422);
        }
        $user->password = Hash::make($request->change);
        $user->save();
        return response(['message' => 'Password changed'], 200);
    }

    public function changeName(Request $request)
    {
        /** @var \App\Models\User */
        $user = Auth::user();
        if (!Hash::check($request->password, $user->password)) {
            return response(['message' => 'Password is incorrect'], 422);
        }
        $user->name = $request->change;
        $user->save();
        return response([
            'user' => $user,
            'message' => 'Name changed'
        ], 200);
    }

    public function deleteAcc(Request $request)
    {
        /** @var \App\Models\User */
        $user = Auth::user();
        if (!Hash::check($request->password, $user->password)) {
            return response(['message' => 'Password is incorrect'], 422);
        }
        if (!Hash::check($request->change, $user->password)) {
            return response(['message' => 'Passwords do not match'], 422);
        }
        $user->delete();
        return response(['message' => 'Account deleted'], 200);
    }
}

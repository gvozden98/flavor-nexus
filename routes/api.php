<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\OriginalRecipeController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Middleware\OwnCors;
use App\Models\Education;
use App\Models\Reviews;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
    Route::post('/change-name', [AuthController::class, 'changeName']);
    Route::post('/delete-acc', [AuthController::class, 'deleteAcc']);
});
//new content
Route::any('/newReview', [ReviewController::class, 'store']);
Route::any('/newOriginalRecipe', [OriginalRecipeController::class, 'store']);

// Original Recipes
Route::any('/originalRecipes', [OriginalRecipeController::class, 'index']);
Route::any('/deleteOriginalRecipe', [OriginalRecipeController::class, 'destroy']);



Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Reviews
Route::get('/reviews', [ReviewController::class, 'index']);
Route::any('/deleteReview', [ReviewController::class, 'destroy']);

// Education
Route::get('/education', [EducationController::class, 'index']);

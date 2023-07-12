<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reviews;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data =  Reviews::all();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewRequest $request)
    {
        //$user = Auth::user();
        // $credentials = $request->validated();
        // if (!Auth::attempt($credentials)) {
        //     return response(['message' => 'Email or password is incorrect'], 422);
        // }

        $review = Reviews::create([
            'user_id' => $request->user_id,
            'slika' => "",
            'title' => $request->title,
            'uvod' => $request->uvod,
            'sastav' => $request->sastav,
            'cena' => $request->cena,
            'ukus' => $request->ukus,
            'dizajn' => $request->dizajn,
            'zakljucak' => $request->zakljucak,
        ]);

        return response([
            'review' => $review,
            'message' => 'Review created'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reviews $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReviewRequest $request, Reviews $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reviews $review)
    {
        //
    }
}

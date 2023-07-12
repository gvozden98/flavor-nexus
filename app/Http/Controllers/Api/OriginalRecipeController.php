<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OriginalRecipe;
use Illuminate\Http\Request;

class OriginalRecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data =  OriginalRecipe::all();
        return response()->json($data);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $recipe = OriginalRecipe::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'opis' => $request->opis,
            'slika' => "",
            'vreme' => $request->vreme,
            'sastojci' => $request->sastojci,
            'uputstvo' => $request->uputstvo,
        ]);

        return response([
            'original_recipe' => $recipe,
            'message' => 'original recipe created'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $originalRecipe = OriginalRecipe::where('id', $request->originalRecipeId);
        $originalRecipe->delete();
        return response([
            'message' => 'Original recipe deleted'
        ]);
    }
}

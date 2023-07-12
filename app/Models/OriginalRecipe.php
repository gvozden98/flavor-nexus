<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OriginalRecipe extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'title',
        'opis',
        'slika',
        'vreme',
        'sastojci',
        'uputstvo',
    ];
}

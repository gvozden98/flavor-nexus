<?php

namespace Database\Seeders;

use App\Models\OriginalRecipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OriginalRecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OriginalRecipe::create([
            'user_id' => 4,
            'title' => 'Punjene paprike',
            'opis' => 'Punjene paprike sa mesom',
            'slika' => '',
            'vreme' => '60 minuta',
            'sastojci' => 'Paprike 1kg, mleveno meso 500g, crni luk 1 glavica, beli luk 2 čena, jaje 1 komad, prezle 2 kašike, so, biber, ulje, voda',
            'uputstvo' => 'Paprike oprati i očistiti od semenki. Meso iseckati na kockice, dodati sitno iseckan crni luk, beli luk, jaje, prezle, so, biber i sve dobro izmešati. Punjenje staviti u paprike i poređati u vatrostalnu posudu. Preliti sa malo ulja i vode i peći u rerni na 200 stepeni oko 1 sat. Poslužiti uz kuvani pirinač.',
        ]);
        OriginalRecipe::create([
            'user_id' => 3,
            'title' => 'Ćufte u paradajz sosu',
            'opis' => 'Pečene ćufte u varivu od paradajza i povrća',
            'slika' => '600 gr mešanog mlevenog mesa',
            'vreme' => '45 minuta',
            'sastojci' => '1 +1 kašičica suvog začina pola kašičice bibera, peršunovog lista, belog luka u granulama ako imate stavite psilijum ljuspice koje bi zamenile hleb ili mrvice koji inače stavljamo u ćufte, ako nemate može i bez njega, može čak i bademovo brašno 2 kašike1 kesa povrća za đuveč 500 ml paradajz soka 1 mala glavica crnog luka 100 ml ulja',
            'uputstvo' => 'Mlevenom mesu dodati sve začine koje planirate da stavite i psilijum ljuspice ili bademovo brašno i sve dobro izmesiti. Ako je masa suvkasta usuti malo vode pa opet izmesiti.Vlažnim rukama oblikovati ćufte i peći na srednjoj vati dok ne porumene.Posebno izdinstati crni luk sa uljem i suvim začinom, zatim dodati povrće i naliti paradajz.Doliti 200 ml vode i ostaviti da se kuva.Kada voda ispari kuvati još malo, da se zgusne kao redji sos pa ubaciti ćufte i ugasiti vatru.Ostaviti sve tako još malo da odstoji pa se može poslužiti.Ukoliko niste na bilo kojem od ovih režima ishrane možete da uspete paradajz i vodu da dodate par šaka pirinča, da dobijete na količini, a jelo će biti još lepše.',
        ]);
    }
}

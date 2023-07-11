<?php

namespace Database\Seeders;

use App\Models\Education;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Education::create([
            'user_id' => 1,
            'slika' => '',
            'title' => 'Pravilna prehrana – što je to i kako se početi pravilno hraniti?',
            'uvod' => 'Pravilna prehrana možda ima čudan naziv, ali odnosi se na prehranu koja bi trebala biti pravilna za svaku zdravu osobu. U ovom članku vam želim približiti osnovne stavke koje pravilna prehrana sadrži i koji je onaj najmanji korak koji trebate napraviti da se krenete hraniti pravilno.',
            'body' => ' Pravilna prehrana – što je to?
            Pravilna prehrana je ona koja osigurava našem organizmu nesmetano funkcioniranje i podržava generalno zdravlje. Da budem konkretniji, većina dnevnog unosa nutrijenata treba doći kroz nutritivno bogate namirnice – to su namirnice koje sadrže dovoljne količine nutrijenata kako bi u kombinaciji osigurale preporučene dnevne količine za unos proteina, ugljikohidrata, masti, vitamina i minerala, a koji zajedno osiguravaju zdrave našem organizmu.Upravo iz tog razloga podjela hrane na zdravu i nezdravu nije ispravna jer bi nezdrava hrana značila da ćemo se od jedne namirnice razboljeti ili dovesti naše zdravlje pod ozbiljan test. Nije stvar namirnice već koliko određene namirnice unesemo, poanta je u količini. Svaka namirnica u prekomjernim količinama postaje toksična, čak i pogubna za nas.S druge strane, kada pričamo o nutritivno bogatim namirnicama i da većina dnevnog unosa treba doći kroz njih, pravilna prehrana također sadrži i nutritivno siromašne namirnice – sva višestruko procesuirana i prerađena hrana, slatkiši, slane grickalice, pekarski proizvodi. To što su siromašni nutrijentima, bogati aditivima i prerađeni ne znači da automatski uništavaju naše zdravlje kada ih konzumiramo.Kao što sam spomenuo u prethodnom odjeljku, stvar je količine. Zato manji dio našeg dnevnog unosa može doći iz nutritivno siromašnih namirnica jer je taj unos izrazito važan za mentalni aspekt cijele priče. Ako je riječ o do 20% ukupnog dnevnog unosa, to je premala količina da bi imala imalo značajan utjecaj na fizičko zdravlje, ali dovoljna da ima značaj na mentalni dio cijele priče – nema zabranjenih namirnica, nema izbjegavanja druženja gdje će se naći nutritivno siromašne namirnice, možete normalno pojesti kolač ili palačinke bez ikakvog pritiska ili opterećenja.<h3>Kako se početi pravilno hraniti?Pravilnu prehranu možete početi prakticirati već sada, nakon čitanja ovog članka. Često nam za početak nečega treba prvi dan u tjednu, mjesecu ili godini, ali to zaista nema smisla. Dovoljno je da krenete početi provoditi mini radnje kroz koje ćete sve više prakticirati pravilnu prehranu.Primjerice, uz ručak dodajte količinu bilo kojeg povrća jednakog veličini dvije stisnute šake u salatu. To je mini radnja kojom ste obogatili svoj ručak, ubacili u njega nešto vitamina i minerala i tako promijenili svoju prehranu za tih 200 grama povrća. Možda to izgleda zanemarivo i beznačajno na prvu, ali je ustvari riječ o jako velikoj promjeni jer ste svaki dan počeli unositi 200 grama povrća više nego prije.Recimo neka to uspijete provesti 20 dana u mjesecu, čestitam, taj mjesec ste unijeli 4 kilograma povrća!'
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reviews;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Reviews::create([
            'user_id' => 1,
            'slika' => 'https://different.hr/wp-content/uploads/2023/06/cheese-spread-light.jpg',
            'title' => 'Isprobali smo Cheese Spread Light, Milbona',
            'uvod' => 'Cheese Spread Light je sirni namaz sa smanjenim postotkom masti pa ima 100 kalorija na 100 grama i tražili ste da ga recenziramo. Napominjemo kako nismo povezani s proizvođačem te su naše recenzije neovisne i objektivne, a služe podizanju razine svijesti o kupovini fitnes proizvoda i zdravom načinu života općenito.',
            'sastav' => 'Sastojci: svježi sir, kuhinjska sol, stabilizatori: karagenan, guar guma, vlakna agruma.',
            'cena' => '1.29€ (9.71 HRK) / 200g',
            'ukus' => 'Tekstura je slična klasičnom sirnom namazu, možda malo više kremasta, a okus je dobar, nema osjetne razlike u odnosnu na standardne sirne namaze.',
            'dizajn' => 'Stavili su sliku donuta i polovicu na kojoj je namazan kao taj namaz. Ne znam, Milbona dizajni su sve gori od gorih. Barem nemaju kao Zott onog lika koji si gleda pazuhe.',
            'zakljucak' => 'Odobravamo ovaj proizvod. Izvrstan omjer kalorija i proteina, ali isto tako i količine kalorija na čak 100 grama za jedan sirni namaz. Cijena je prihvatljiva i ovo je zasigurno dobar proizvod koji primarno može pomoći povećati volumen obroka, a nešto više proteina je samo dodatan bonus.'
        ]);
        Reviews::create([
            'user_id' => 1,
            'slika' => 'https://different.hr/wp-content/uploads/2023/06/high-protein-mousse-milbona.jpg',
            'title' => 'Isprobali smo High Protein Mousse, Milbona',
            'uvod' => 'High Protein Mousse iz LIDL dućana je proteinski mousse pa kako ste u više navrata tražili recenziju, došao je na red. Napominjemo kako nismo povezani s proizvođačem te su naše recenzije neovisne i objektivne, a služe podizanju razine svijesti o kupovini fitnes proizvoda i zdravom načinu života općenito.',
            'sastav' => 'Sastojci: djelomično obrano mlijeko 6.7%, mliječne bjelančevine 4%, kakaov prah, goveđa želatina, modificirani škrob, zgušnjivači: guar guma, karagenan; stabilizatori: natrijevi fosfati, natrijevi karbonati; sladila: acesulfam K, sukraloza; prirodna aroma, laktaza.',
            'cena' => '1.19€ (8.96 HRK) / 175g',
            'ukus' => 'Gusto pjenasta, čak se i čuje zvuk žlice dok grabi tom pjenom. Okus čokolade je naspram teksture razočarao, okej je, after taste ništa posebno. Baš se ništa ne ističe, monoton okus tamne čokolade koji je i prilično blag. Okus vanilije je znatno bolji.',
            'dizajn' => 'Predvidljiv. Nemam drugih komentara na Milbona dizajne.',
            'zakljucak' => 'Odobravamo ovaj proizvod.Iako je okus baš bezvezan, okus je subjektivna stvar. Generalno, proizvod se deklarira kao proteinski, a omjer cijene i količine proteina je izuzetno povoljan, fina pjenasta tekstura, proizvod koji može olakšati unos proteina.'
        ]);
        Reviews::create([
            'user_id' => 1,
            'slika' => 'https://different.hr/wp-content/uploads/2023/05/protein-rice-zott.jpg',
            'title' => 'Isprobali smo Protein Rice, Zott',
            'uvod' => 'Protein Rice je proteinski desert s okusom riže i mlijeka, a tražili ste da ga recenziramo. Napominjemo kako nismo povezani s proizvođačem te su naše recenzije neovisne i objektivne, a služe podizanju razine svijesti o kupovini fitnes proizvoda i zdravom načinu života općenito.',
            'sastav' => 'Sastojci: mliječne bjelančevine, riža (7.4%), vrhnje, jaje u prahu, sladila: acesulfam K, aspartam, zgušnjivač: guar guma, kuhinjska sol, aroma.',
            'cena' => '0.99€/200g',
            'ukus' => 'Poprilično sam siguran da imam osjet okusa, ali ovo nema baš nikakvog okusa. Čak ni after-taste ne postoji. Tekstura je kao kod pudinga s komadićima riže. Ne znam, treba dodati neko voće unutra da ima okusa, shvaćam da je to riža na mlijeku, ali i dalje ne pronalazim okus. Sjetilo me na doba kada sam imao koronu pa tri tjedna nisam okusio ništa.',
            'dizajn' => 'Isti kao i kod svih Zott proizvoda, crna je baza, imamo neke ljude, ovdje je neki sretni par koji trči (možda su i prijatelji), par zrna riže i to je to. Manje više dizajn svakog od ovih proizvoda je očajan što je dobar znak.',
            'zakljucak' => 'Odobravamo ovaj proizvod.Jako pristupačna cijena za odličnu količinu proteina, a to što je okus slabiji se lako da srediti tako da dodate nešto u ovo. Još jedan odličan proizvod kroz koji ćete lakše unijeti proteine i nadam se da će biti još ovakvih proizvoda na tržištu.'
        ]);
    }
}

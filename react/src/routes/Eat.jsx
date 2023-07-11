import { getRecipe } from "../components/getRecipe";
import EatRouteCard from "../components/EatRouteCard";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import { useLocation } from "react-router-dom";
import Loading from "../components/loading";

export default function Eat() {
    const [recipes, setRecipes] = useState(null); // Ovde ćemo čuvati recepte koje dobijemo od API-ja
    const [query, setQuery] = useState(""); // Ovde ćemo čuvati trenutni upit
    const [numberOfIngridients, setNumberOfIngridients] = useState(5); // Ovde ćemo čuvati broj sastojaka
    const [diet, setDiet] = useState("balanced"); // Ovde ćemo čuvati dijetu
    const [random, setRandom] = useState(false); // Ovde ćemo čuvati da li su recepti random

    //router
    const location = useLocation();
    const nextPage = location.state?.nextPage;
    console.log(location);
    console.log(nextPage);

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const fetchedRecipes = await getRecipe(
                        query,
                        numberOfIngridients,
                        diet,
                        random,
                        nextPage
                    );

                    setRecipes(fetchedRecipes);
                    console.log(fetchedRecipes);
                } catch (error) {
                    // Obrada greške ako se dogodi neuspešan zahtev
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }, 1000);
    }, [nextPage]);
    return (
        <>
            {recipes ? (
                <>
                    <EatRouteCard recipes={recipes} />
                    <Pagination next={recipes._links.next.href} />
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

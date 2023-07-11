import EatHomeCard from "../components/EatHomeCard";
import { useState, useEffect } from "react";
import { getRecipe } from "../components/getRecipe";
import { getReviews } from "../components/getReviews";
import { getEducation } from "../components/getEducation";
import Loading from "../components/loading";

export default function Home() {
    //const recipes = useRef(); // Ovde ćemo čuvati recepte koje dobijemo od API-ja
    const [recipes, setRecipes] = useState(null); // Ovde ćemo čuvati recepte koje dobijemo od API-ja
    const [query, setQuery] = useState(""); // Ovde ćemo čuvati trenutni upit
    const [numberOfIngridients, setNumberOfIngridients] = useState(5); // Ovde ćemo čuvati broj sastojaka
    const [diet, setDiet] = useState("balanced"); // Ovde ćemo čuvati dijetu
    const [random, setRandom] = useState(true); // Ovde ćemo čuvati da li su recepti random
    // reviws
    const [reviews, setReviews] = useState(null); // Ovde ćemo čuvati recenzije koje dobijemo od sopstvenog API-ja
    // education
    const [education, setEducation] = useState(null); // Ovde ćemo čuvati edukaciju koju dobijemo od sopstvenog API-ja
    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const fetchedRecipes = await getRecipe(
                        query,
                        numberOfIngridients,
                        diet,
                        random
                    );
                    const fetchedReviews = await getReviews();
                    const fetchedEducation = await getEducation();
                    setReviews(fetchedReviews);
                    setRecipes(fetchedRecipes);
                    setEducation(fetchedEducation);
                    console.log(fetchedRecipes);
                    console.log(fetchedReviews);
                    console.log(fetchedEducation);
                } catch (error) {
                    // Obrada greške ako se dogodi neuspešan zahtev
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }, 1000);
    }, []);
    
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col-xl-9" style={{ border: "1px solid red" }}>
                    {recipes && reviews ? (
                        <EatHomeCard
                            link="/category/eat"
                            headerColor="color-primary"
                            header="Eat"
                            headers={["Recipes", "Reviews", "Education"]}
                            cardTitles={[
                                recipes.hits[0].recipe.label,
                                recipes.hits[1].recipe.label,
                                recipes.hits[2].recipe.label,
                            ]}
                            cardImages={[
                                recipes.hits[0].recipe.image,
                                recipes.hits[1].recipe.image,
                                recipes.hits[2].recipe.image,
                            ]}
                            cardContents={[
                                recipes.hits[0].recipe.ingredientLines,
                                recipes.hits[0].recipe.ingredientLines,
                                recipes.hits[0].recipe.ingredientLines,
                            ]}
                            reviews={reviews}
                            education={education}
                        />
                    ) : (
                        <Loading />
                    )}
                    {/* <EatAndFitness
                        link="/category/fitness"
                        headerColor="color-secondary"
                        header="Fitness"
                        headers={["Activities", "Exercises", "Education"]}
                        cardTitles={[]}
                        cardContents={[]}
                    /> */}
                </div>
                <div
                    className="col-xl-3"
                    style={{ border: "1px solid red" }}
                ></div>
            </div>
        </div>
    );
}

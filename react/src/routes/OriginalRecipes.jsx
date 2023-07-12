import { useEffect, useState } from "react";
import OriginalRecipe from "../components/OriginalRecipe";
import { getOriginalRecipes } from "../components/getOriginalRecipes.jsx";
import Loading from "../components/loading";

function OriginalRecipes() {
    const [originalRecipes, setoriginalRecipes] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const fetchedOriginalRecipes = await getOriginalRecipes();
                    setoriginalRecipes(fetchedOriginalRecipes);
                    console.log(fetchedOriginalRecipes);
                } catch (error) {
                    // Obrada greške ako se dogodi neuspešan zahtev
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }, 300);
    }, []);
    return (
        <>
            {originalRecipes ? (
                <>
                    <OriginalRecipe originalRecipes={originalRecipes} />
                    {/* <Pagination next={recipes._links.next.href} /> */}
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default OriginalRecipes;

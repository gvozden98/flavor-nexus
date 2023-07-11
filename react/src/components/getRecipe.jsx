import axios from "axios";

export const getRecipe = async (
    query,
    numberOfIngridients,
    diet,
    random,
    nextPage
) => {
    try {
        if (nextPage) {
            const response = await axios.get(nextPage);
            return response.data;
        } else {
            const response = await axios.get(
                `${
                    import.meta.env.VITE_API_EDAMAM_BASE_URL
                }?type=public&q=${query}&app_id=${
                    import.meta.env.VITE_API_EDAMAM_ID
                }&app_key=${
                    import.meta.env.VITE_API_EDAMAM_KEY
                }&ingr=${numberOfIngridients}&diet=${diet}&imageSize=REGULAR&random=${random}`
            );
            return response.data;
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};

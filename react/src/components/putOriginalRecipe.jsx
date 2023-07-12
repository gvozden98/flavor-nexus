import axios from "axios";

export const putOriginalRecipe = async (originalRecipe) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/newOriginalRecipe",
            originalRecipe
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching original recipes:", error);
        throw error;
    }
};

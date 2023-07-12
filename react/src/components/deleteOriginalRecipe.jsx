import axios from "axios";

export const deleteOriginalRecipe = async (originalRecipeId) => {
    try {
        console.log(originalRecipeId);
        const response = await axios.delete(
            "http://127.0.0.1:8000/api/deleteOriginalRecipe",
            {
                data: {
                    originalRecipeId,
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error getting education:", error);
        throw error;
    }
};

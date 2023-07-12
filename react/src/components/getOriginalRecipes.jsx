import axios from "axios";

export const getOriginalRecipes = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/originalRecipes");
        return response.data;
    } catch (error) {
        console.error("Error fetching original recipes:", error);
        throw error;
    }
};
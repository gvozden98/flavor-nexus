import axios from "axios";

export const getReviews = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/reviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
};

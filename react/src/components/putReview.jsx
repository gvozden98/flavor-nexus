import axios from "axios";

export const putReview = async (review) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/newReview",
            review
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
};

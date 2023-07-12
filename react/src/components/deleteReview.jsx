import axios from "axios";

export const deleteReview = async (reviewId) => {
    try {
        console.log(reviewId);
        const response = await axios.delete(
            "http://127.0.0.1:8000/api/deleteReview",
            {
                data: {
                    reviewId,
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

import axios from "axios";

export const getEducation = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/education");
        return response.data;
    } catch (error) {
        console.error("Error getting education:", error);
        throw error;
    }
};

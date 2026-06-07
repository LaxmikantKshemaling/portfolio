import axios from "axios";

const API_URL = "https://portfolio-backend-gj6h.onrender.com";

// const API_URL = "http://localhost:8080/api/contact";

export const sendContactMessage = async (data) => {
  try {
    const response = await axios.post(API_URL, data);

    console.log("API RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    console.error("API ERROR:", error.response?.data || error.message);
    throw error;
  }
};
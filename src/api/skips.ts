import axios from "axios";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchSkips = async () => {
  try {
    const response = await axios.get(
      `${VITE_API_BASE_URL}/skips/by-location?postcode=NR32&area=Lowestoft`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw error;
  }
};

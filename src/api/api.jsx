import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/${endpoint}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

import axios from "axios";

// API URL винесено в окрему константу для чистоти коду
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchSessions = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 12);
};

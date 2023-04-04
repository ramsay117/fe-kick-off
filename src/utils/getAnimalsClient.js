import axios from "axios";

const getAnimalsClient = axios.create({
  baseURL: `${import.meta.env.VITE_ANIMAL_LIST_URL}`,
});

export default getAnimalsClient;

import axios from "axios";

export const getVideogamesRequests = async () => await axios.get("/videogames");
export const getVideogameRequest = async (id) =>
  await axios.get(`/videogames/${id}`);
export const createVideogameRequest = async (videogame) =>
  await axios.post("/videogames", videogame);
export const updateVideogameRequest = async (id, newFields) =>
  await axios.put(`/videogames/${id}`, newFields);
export const deleteVideogameRequest = async (id) =>
  await axios.delete(`/videogames/${id}`);

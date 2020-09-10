import axios from "axios";
import qs from "qs";

const getFirst = async (song, level) => {
  const response = await axios.get("http://localhost:3004/songs", {
    params: {
      _start: 0,
      _limit: 20,
      ...(song.length > 0 ? { search_like: song } : {}),
      ...(level.length > 0 ? { level: level } : {}),
    },
    paramsSerializer: (params) => {
      return qs.stringify(params);
    },
  });
  return response.data;
};
const loadMore = async (start, song, level) => {
  const response = await axios.get("http://localhost:3004/songs", {
    params: {
      _start: start,
      _limit: 20,
      ...(song.length > 0 ? { search_like: song } : {}),
      ...(level.length > 0 ? { level: level } : {}),
    },
    paramsSerializer: (params) => {
      return qs.stringify(params);
    },
  });
  return response.data;
};
const getFavourite = async () => {
  const response = await axios.get("http://localhost:3004/favorites");
  return response.data;
};

const addSong = async (id) => {
  const object = { songId: id };
  const response = await axios.post("http://localhost:3004/favorites", object);
  return response.data;
};
const removeSong = async (id) => {
  const response = await axios.delete(`http://localhost:3004/favorites/${id}`);
  return response.data;
};
export default { getFirst, loadMore, addSong, getFavourite, removeSong };

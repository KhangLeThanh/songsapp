import songService from "../services/song";

const favouriteReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_SONG":
      return action.data;
    case "ADD_SONG":
      return [...state, action.data];
    case "REMOVED_SONG":
      const songId = action.data.songId;
      const removeItem = state.filter((n) => n.songId !== songId);
      return [...removeItem];

    default:
      return state;
  }
};
export const getFavourite = () => {
  return async (dispatch) => {
    const songs = await songService.getFavourite();
    dispatch({
      type: "GET_SONG",
      data: songs,
    });
  };
};
export const addFavourite = (id) => {
  return async (dispatch) => {
    const songs = await songService.addSong(id);
    dispatch({
      type: "ADD_SONG",
      data: songs,
    });
  };
};
export const removedFavourite = (song) => {
  return async (dispatch) => {
    await songService.removeSong(song.id);
    dispatch({
      type: "REMOVED_SONG",
      data: song,
    });
  };
};
export default favouriteReducer;

import songService from "../services/song";
const initialState = {
  data: [],
  errorMessage: "",
  loadMessage: "",
};
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_SONG":
      return Object.assign({}, state, {
        data: action.data.slice(
          action.data.length[0],
          action.data.length[action.data.length - 1]
        ),
        errorMessage: action.data.length > 0 ? "" : "Song Not Found",
        loadMessage: "",
      });
    case "MORE_SONG":
      return Object.assign({}, state, {
        data: state.data.concat(
          action.data.slice(
            action.data.length[0],
            action.data.length[action.data.length - 1]
          )
        ),
        errorMessage: "",
        loadMessage: action.data.length > 0 ? "" : "All Songs are loaded",
      });
    default:
      return state;
  }
};

export const intializeSong = (song, level) => {
  return async (dispatch) => {
    const songs = await songService.getFirst(song, level);
    dispatch({
      type: "INIT_SONG",
      data: songs,
    });
  };
};
export const moreSong = (start, song, level) => {
  return async (dispatch) => {
    const songs = await songService.loadMore(start, song, level);
    dispatch({
      type: "MORE_SONG",
      data: songs,
    });
  };
};

export default songReducer;

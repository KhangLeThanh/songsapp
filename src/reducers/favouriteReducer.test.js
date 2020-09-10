import deepFreeze from "deep-freeze";
import favouriteReducer from "./favouriteReducer";

const favourite = [
  {
    songId: "5b8e47deb3984c68ed8192e3",
    id: "ECYlgTl",
  },
];
describe("favouriteReducer()", () => {
  test("GET_SONG replaces state with action payload", () => {
    const state = [];
    const action = {
      type: "GET_SONG",
      data: favourite,
    };
    deepFreeze(state);

    const newState = favouriteReducer(state, action);
    expect(newState).toEqual(favourite);
  });
  test("ADD_SONG purely adds a new anecdote", () => {
    const newSong = { songId: "5b8e447eb3984c68ed8190bf", id: "BTSmhTk" };

    const action = {
      type: "ADD_SONG",
      data: newSong,
    };
    const state = [];

    deepFreeze(state);
    const newState = favouriteReducer(state, action);
    expect(newState).toContainEqual(newSong);
  });
  test("REMOVED_SONG updates the state of the given anecdote", () => {
    const songToRemove = favourite[0];

    const action = {
      type: "REMOVED_SONG",
      data: songToRemove,
    };
    const state = favourite;

    deepFreeze(state);
    const newState = favouriteReducer(state, action);
    expect(newState).not.toContainEqual(songToRemove);
  });
});

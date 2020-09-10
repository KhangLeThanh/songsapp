import deepFreeze from "deep-freeze";
import songReducer, { initialState } from "./songReducer";

const songs = [
  {
    id: "5b8e47deb3984c68ed8192e3",
    title: "Easter Oratorio (in Am)",
    artist: "Johann Sebastian Bach",
    images:
      "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/586a75fa-99df-4ce0-af71-55f6a474c404.jpg",
    level: 6,
    search: "johann sebastian bach easter oratorio (in am)",
  },
  {
    id: "5b8f736fb3984c13548374af",
    title: "Fysyoni (in Bm)",
    artist: "Traditional",
    images:
      "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/2524751a-c107-40e5-8de8-08e68b9d8ca8.jpg",
    level: 10,
    search: "traditional fysyoni (in bm)",
  },
];
describe("songReducer()", () => {
  test("INIT_SONG replaces state with action payload", () => {
    const state = { initialState };
    const action = {
      type: "INIT_SONG",
      data: songs,
    };
    deepFreeze(state);
    const currentState = songReducer(state, action);
    const newState = songReducer(state, action);
    expect(newState).toEqual(currentState);
  });
  test("MORE_SONG replaces state with action payload", () => {
    const moreSong = [
      {
        id: "5b8e471cb3984c68ed81926d",
        title: "Gettin' Along",
        artist: "The Yousicians",
        images:
          "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/90c50bda-6935-49df-b5db-bbb493af4fed.jpg",
        level: 12,
        search: "the yousicians gettin' along",
      },
      {
        id: "5b8e447eb3984c68ed8190bf",
        title: "Fysouni (in Bm)",
        artist: "Traditional",
        images:
          "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/4c08e106-c82e-4c61-ae7c-18068023297c.jpg",
        level: 3,
        search: "traditional fysouni (in bm)",
      },
    ];
    const action = {
      type: "MORE_SONG",
      data: moreSong,
    };
    const state = initialState;
    deepFreeze(state);
    const newState = songReducer(state, action);
    expect(newState.data).toEqual(moreSong);
  });
});

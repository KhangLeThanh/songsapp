import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import songReducer from "./reducers/songReducer";
import favouriteReducer from "./reducers/favouriteReducer";
const reducer = combineReducers({
  songs: songReducer,
  favourite:favouriteReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

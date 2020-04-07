import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const bumpifyStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default bumpifyStore;
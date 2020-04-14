/*
This file is going to initialize our store, setup our thunk middleware, 
call our verifyAuth() action, and export our function so we can provide it to the root of our app. 
 */

import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());
  return store;
}

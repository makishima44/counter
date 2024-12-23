import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { counterReducer } from "../counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

// @ts-ignore
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof rootReducer>;

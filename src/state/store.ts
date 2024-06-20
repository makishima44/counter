import { create } from "domain";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
});

//@ts-ignore
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>;

import { ThunkDispatch } from "redux-thunk";
import { RootStateType } from "../store/store";
import { AnyAction, Dispatch } from "redux";
import { ActionsType } from "./types";

export type DispatchType = ThunkDispatch<RootStateType, void, AnyAction>;

export type AppThunk<ReturnType = void> = (
  dispatch: Dispatch<ActionsType>,
  getState: () => RootStateType
) => ReturnType;

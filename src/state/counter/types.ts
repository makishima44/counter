import {
  incrementCountAC,
  resetCountAC,
  setErrorAC,
  setMaxValueAC,
  setMinValueAC,
  setValueFromLSAC,
} from "./counterActions";

export type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
export type IncrementCountActionType = ReturnType<typeof incrementCountAC>;
export type SetErrorActionType = ReturnType<typeof setErrorAC>;
export type ResetCountActionType = ReturnType<typeof resetCountAC>;
export type SetValueFromLSActionType = ReturnType<typeof setValueFromLSAC>;

export type ActionsType =
  | SetMinValueActionType
  | SetMaxValueActionType
  | IncrementCountActionType
  | SetErrorActionType
  | ResetCountActionType
  | SetValueFromLSActionType;

export type CounterStateType = {
  minValue: number;
  maxValue: number;
  count: number;
  error: boolean;
};

import { AnyAction, Dispatch } from "redux";
import { RootStateType } from "./store";
import { ThunkDispatch } from "redux-thunk";

//----------------------КОНСТАНТЫ------------------------------------------------//

export const SET_MIN_VALUE = "SET-MIN-VALUE";
export const SET_MAX_VALUE = "SET-MAX-VALUE";
export const INCREMENT_COUNT = "INCREMENT-COUNT";
export const SET_ERROR = "SET-ERROR";
export const RESET_COUNT = "RESET-COUNT";
export const SET_VALUE_FROM_LS = "SET-VALUE-FROM-LOCAL-STORAGE";

//------------------------ТИПЫ--------------------------------------------------//

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

//----------------------------------------------------------------------//

let initialState: CounterStateType = {
  minValue: 0,
  maxValue: 5,
  count: 0,
  error: false,
};

export const counterReducer = (
  state: CounterStateType = initialState,
  action: ActionsType
): CounterStateType => {
  switch (action.type) {
    case SET_MIN_VALUE: {
      const newMinValue = action.minValue;
      return { ...state, minValue: newMinValue, count: newMinValue };
    }

    case SET_MAX_VALUE: {
      const newMaxValue = action.maxValue;
      return { ...state, maxValue: newMaxValue };
    }

    case INCREMENT_COUNT: {
      return { ...state, count: state.count + 1 };
    }

    case RESET_COUNT: {
      return {
        ...state,
        count: state.minValue,
      };
    }

    case SET_ERROR: {
      return { ...state, error: action.error };
    }

    case SET_VALUE_FROM_LS: {
      return { ...state, count: action.count };
    }

    default:
      return state;
  }
};

//----------------------------------------AC------------------------------------------//

export const setMinValueAC = (minValue: number) =>
  ({
    type: SET_MIN_VALUE,
    minValue,
  } as const);

export const setMaxValueAC = (maxValue: number) =>
  ({
    type: SET_MAX_VALUE,
    maxValue,
  } as const);

export const incrementCountAC = () =>
  ({
    type: INCREMENT_COUNT,
  } as const);

export const setErrorAC = (error: boolean) =>
  ({
    type: SET_ERROR,
    error,
  } as const);

export const resetCountAC = () =>
  ({
    type: RESET_COUNT,
  } as const);

export const setValueFromLSAC = (count: number) =>
  ({ type: SET_VALUE_FROM_LS, count } as const);

//---------------------------------------------------Thunk---------------------------------

export type DispatchType = ThunkDispatch<RootStateType, void, AnyAction>;

export type AppThunk<ReturnType = void> = (
  dispatch: Dispatch<ActionsType>,
  getState: () => RootStateType
) => ReturnType;

export const IncValuesTC = (): AppThunk => (dispatch, getState) => {
  const currentCount = getState().counter.count;
  localStorage.setItem("counterValue", JSON.stringify(currentCount + 1));
  dispatch(incrementCountAC());
};

export const SetValuesTC = (): AppThunk => (dispatch, getState) => {
  const savedValue = localStorage.getItem("counterValue");
  if (savedValue) {
    const parsedValue = JSON.parse(savedValue);
    dispatch(setValueFromLSAC(parsedValue));
    dispatch(setMaxValueAC(parsedValue));
  }
};

import { INCREMENT_COUNT, RESET_COUNT, SET_ERROR, SET_MAX_VALUE, SET_MIN_VALUE, SET_VALUE_FROM_LS } from "./constants";
import { ActionsType, CounterStateType } from "./types";

let initialState: CounterStateType = {
  minValue: 0,
  maxValue: 5,
  count: 0,
  error: false,
};

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
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

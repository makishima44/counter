//----------------------КОНСТАНТЫ------------------------------------------------//

export const SET_MIN_VALUE = "SET-MIN-VALUE";
export const SET_MAX_VALUE = "SET-MAX-VALUE";
export const INCREMENT_COUNT = "INCREMENT-COUNT";
export const SET_ERROR = "SET-ERROR";
export const RESET_COUNT = "RESET-COUNT";

//------------------------ТИПЫ--------------------------------------------------//

export type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
export type IncrementCountActionType = ReturnType<typeof incrementCountAC>;
export type SetErrorActionType = ReturnType<typeof setErrorAC>;
export type resetCountActionType = ReturnType<typeof resetCountAC>;

export type ActionsType =
  | SetMinValueActionType
  | SetMaxValueActionType
  | IncrementCountActionType
  | SetErrorActionType
  | resetCountActionType;

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

      // делаем копию state,  устанавливаем обновленный minValue и устанавливаем count равным minValue;
      const stateCopy = { ...state, minValue: newMinValue, count: newMinValue };

      // проверка ошибки;
      if (newMinValue < 0 || newMinValue >= state.maxValue) {
        return { ...stateCopy, error: true }; //если условия верны то ставим ошибку;
      }
      return stateCopy;
    }

    case SET_MAX_VALUE: {
      const newMaxValue = action.maxValue;

      // проверка ошибки;
      if (newMaxValue <= state.minValue || newMaxValue < 0) {
        return { ...state, error: true }; //если условия верны то ставим ошибку;
      }
      const newCount = state.count > newMaxValue ? newMaxValue : state.count;
      return { ...state, maxValue: newMaxValue, count: newCount }; // возвращаем обновленный стейт;
    }

    case INCREMENT_COUNT: {
      if (state.count < state.maxValue) {
        return { ...state, count: state.count + 1 };
      } else {
        return state;
      }
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

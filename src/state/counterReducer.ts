//----------------------КОНСТАНТЫ------------------------------------------------//

export const SET_MIN_VALUE = "SET-MIN-VALUE";

//------------------------ТИПЫ--------------------------------------------------//

export type SetMinValueActionType = ReturnType<typeof setMinValueAC>;

export type ActionsType = SetMinValueActionType;

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
      return { ...state, minValue: action.minValue };
    }
    default:
      return state;
  }
};

//----------------------------------------AC------------------------------------------//

export const setMinValueAC = (minValue: number) => ({
  type: SET_MIN_VALUE,
  minValue,
});

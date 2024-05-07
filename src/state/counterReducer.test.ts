import {
  CounterStateType,
  counterReducer,
  setMinValueAC,
} from "./counterReducer";

let startState: CounterStateType;

beforeEach(() => {
  startState = {
    minValue: 0,
    maxValue: 5,
    count: 0,
    error: false,
  };
});

test("counterReducer setMinValue", () => {
  const newValue = 3;
  const action = setMinValueAC(newValue);
  const endState = counterReducer(startState, action);

  expect(endState.minValue).toEqual(3);
  expect(endState.maxValue).toEqual(5);
});

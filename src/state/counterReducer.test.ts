import {
  CounterStateType,
  counterReducer,
  incrementCountAC,
  setMaxValueAC,
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

test("counterReducer setMaxValue", () => {
  const newValue = 10;
  const action = setMaxValueAC(newValue);
  const endState = counterReducer(startState, action);

  expect(endState.minValue).toEqual(0);
  expect(endState.maxValue).toEqual(10);
});

test("counterReducer incrementCount", () => {
  const action = incrementCountAC();
  const endState = counterReducer(startState, action);

  expect(endState.minValue).toEqual(0);
  expect(endState.maxValue).toEqual(5);
  expect(endState.count).toEqual(1);
  expect(endState.error).toEqual(false);
});

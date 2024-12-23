import { incrementCountAC, setMaxValueAC, setMinValueAC, setValueFromLSAC } from "./counterActions";
import { AppThunk } from "./thunkTypes";

export const IncValuesTC = (): AppThunk => (dispatch, getState) => {
  const { count, minValue, maxValue } = getState().counter;
  localStorage.setItem("counterValues", JSON.stringify({ minValue, maxValue, count: count + 1 }));
  dispatch(incrementCountAC());
};

export const SetValuesTC = (): AppThunk => (dispatch) => {
  const counterValues = localStorage.getItem("counterValues");
  if (counterValues) {
    const { minValue, maxValue, count } = JSON.parse(counterValues);
    dispatch(setMinValueAC(minValue));
    dispatch(setMaxValueAC(maxValue));
    dispatch(setValueFromLSAC(count));
  }
};

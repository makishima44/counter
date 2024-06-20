import { useDispatch, useSelector } from "react-redux";
import { Button } from "./components/Button";
import {
  CounterStateType,
  DispatchType,
  IncValuesTC,
  resetCountAC,
} from "./state/counterReducer";
import { RootStateType } from "./state/store";

export const CounterWithRedux = () => {
  const dispatch = useDispatch<DispatchType>();
  //@ts-ignore
  const { count, maxValue, minValue, error } = useSelector<
    RootStateType,
    CounterStateType
  >((state) => state.counter)
  console.log(count, maxValue, minValue, error )
  const incrementCounterHandler = () => {
    if (count < maxValue) {
      dispatch(IncValuesTC());
    }
  };

  const resetCounterHandler = () => {
    dispatch(resetCountAC());
  };

  const isCountEqulalMaxValue = count === maxValue;
  const incButtonDisabled = isCountEqulalMaxValue || error;
  const resetButtonDisabled = count === minValue || error;

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <span className={isCountEqulalMaxValue ? "counterMax" : ""}>
          {error ? <span className="errorText">Incorrect value!</span> : count}
        </span>
      </div>

      <div className="buttonBlock">
        <Button
          disabled={incButtonDisabled}
          onClick={incrementCounterHandler}
          name="inc"
        />
        <Button
          disabled={resetButtonDisabled}
          onClick={resetCounterHandler}
          name="reset"
        />
      </div>
    </div>
  );
};

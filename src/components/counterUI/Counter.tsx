import { useDispatch, useSelector } from "react-redux";

import { IncValuesTC } from "../../state/counter/counterThunks";
import { DispatchType } from "../../state/counter/thunkTypes";
import { RootStateType } from "../../state/store/store";
import { resetCountAC } from "../../state/counter/counterActions";
import { CounterStateType } from "../../state/counter/types";
import { Button } from "../Button";

export const Counter = () => {
  const dispatch = useDispatch<DispatchType>();
  const { count, maxValue, minValue, error } = useSelector<RootStateType, CounterStateType>((state) => state.counter);

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
        <Button disabled={incButtonDisabled} onClick={incrementCounterHandler} name="inc" />
        <Button disabled={resetButtonDisabled} onClick={resetCounterHandler} name="reset" />
      </div>
    </div>
  );
};

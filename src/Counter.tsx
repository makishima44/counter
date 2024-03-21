import { useState } from "react";
import { Button } from "./components/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const maxValue = 5;

  const incrementCounterHandler = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const resetCounterHandler = () => {
    setCount(0);
  };

  const isCountEqulalMaxValue = count === maxValue;
  const incButtonDisabled = isCountEqulalMaxValue;

  const resetButtonDisabled = count === 0;

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <span className={isCountEqulalMaxValue ? "counterMax" : ""}>
          {count}
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

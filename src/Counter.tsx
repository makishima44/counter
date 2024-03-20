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

  const incButtonDisabled = count === maxValue;
  const resetButtonDisabled = count === 0;

  return (
    <div className="counterBlock">
      <div className={count === maxValue ? "counterMax" : "counter"}>
        {count}
      </div>
      <div>
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

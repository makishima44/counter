import { Button } from "./components/Button";

export type CounterPropsType = {
  count: number;
  maxValue: number;
  setCount: (count: number) => void;
};

export const Counter = ({ count, maxValue, setCount }: CounterPropsType) => {
  //----------------------------------------------------------------------------------------------

  //увеличивает счетчик
  const incrementCounterHandler = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  //Обнуляет счетчик
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

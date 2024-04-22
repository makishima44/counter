import { Button } from "./components/Button";

export type CounterPropsType = {
  count: number;
  error: boolean;
  maxValue: number;
  minValue: number;
  setCount: (count: number) => void;
};

export const Counter = ({
  count,
  error,
  maxValue,
  minValue,
  setCount,
}: CounterPropsType) => {
  //------------------------------------------------------------------------------------/

  //увеличивает счетчик
  const incrementCounterHandler = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  //Обнуляет счетчик(устанавливает минимальное заданное значение )
  const resetCounterHandler = () => {
    setCount(minValue);
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

import { useState } from "react";
import { Button } from "./components/Button";

export type CounterPropsType = {
  count: number;
  maxValue: number;
  minValue: number;
  setCount: (count: number) => void;
};

export const Counter = ({
  count,
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

  const incorrectValue = minValue < 0 || maxValue < 0 || maxValue < minValue; // проверка на корректность значения
  const isCountEqulalMaxValue = count === maxValue;
  const incButtonDisabled = isCountEqulalMaxValue || incorrectValue;
  const resetButtonDisabled = count === minValue || incorrectValue;

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <span className={isCountEqulalMaxValue ? "counterMax" : ""}>
          {incorrectValue ? (
            <span className="errorText">Incorrect value!</span>
          ) : (
            count
          )}
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

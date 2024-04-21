import { ChangeEvent, useState } from "react";
import { Button } from "./components/Button";

export type CounterMenuPropsType = {
  updateMaxValue: (maxValue: number) => void;
  updateMinValue: (minValue: number) => void;
  maxValue: number;
  minValue: number;
};

export const CounterMenu = ({
  updateMaxValue,
  updateMinValue,
  maxValue,
  minValue,
}: CounterMenuPropsType) => {
  const [newMaxValue, setNewMaxValue] = useState<number>(maxValue);
  const [newMinValue, setNewMinValue] = useState<number>(minValue);
  //------------------------------- ---------------------------------------------------------------

  const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(event.target.value); //Преобразуем значение из value в числовой тип;
    setNewMaxValue(newMaxValue); // обновляем локальный стейт
  };

  const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(event.target.value); //Преобразуем значение из value в числовой тип;
    setNewMinValue(newMinValue); // обновляем локальный стейт
  };

  const onButtonHandler = () => {
    updateMaxValue(newMaxValue);
    updateMinValue(newMinValue);
  };

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <div className="inputBlock">
          <span>max value:</span>
          <input
            type="number"
            value={newMaxValue}
            onChange={onChangeMaxHandler}
          />
        </div>
        <div className="inputBlock">
          <span>min value:</span>
          <input
            type="number"
            value={newMinValue}
            onChange={onChangeMinHandler}
          />
        </div>
      </div>

      <div className="buttonBlock">
        <Button name={"Set"} disabled={false} onClick={onButtonHandler} />
      </div>
    </div>
  );
};

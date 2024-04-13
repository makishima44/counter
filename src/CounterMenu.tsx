import { ChangeEvent, useState } from "react";
import { Button } from "./components/Button";

export type CounterMenuPropsType = {
  updateMaxValue: (maxValue: number) => void;
  maxValue: number; // передаем , что бы отображалось стартовое значение
};

export const CounterMenu = ({
  updateMaxValue,
  maxValue,
}: CounterMenuPropsType) => {
  const [newMaxValue, setNewMaxValue] = useState<number>(maxValue);
  //------------------------------- ---------------------------------------------------------------

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(event.target.value); //Преобразуем значение из value в числовой тип;
    setNewMaxValue(newMaxValue); // обновляем локальный стейт
  };

  //
  const onButtonHandler = () => {
    updateMaxValue(newMaxValue);
  };

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <div className="inputBlock">
          <span>max value:</span>
          <input type="number" value={newMaxValue} onChange={onChangeHandler} />
        </div>
      </div>

      <div className="buttonBlock">
        <Button name={"Set"} disabled={false} onClick={onButtonHandler} />
      </div>
    </div>
  );
};

import { ChangeEvent, useState } from "react";
import { Button } from "./components/Button";

export type CounterMenuPropsType = {
  updateMaxValue: (maxValue: number) => void;
  updateMinValue: (minValue: number) => void;
  updateErrorStatus: (error: boolean) => void;
  maxValue: number;
  minValue: number;
};

export const CounterMenu = ({
  updateMaxValue,
  updateMinValue,
  updateErrorStatus,
  maxValue,
  minValue,
}: CounterMenuPropsType) => {
  const [newMaxValue, setNewMaxValue] = useState<number>(maxValue); //локальный  стейт максимального значения;
  const [newMinValue, setNewMinValue] = useState<number>(minValue); //локальный стейт минимального значения;
  const [disabled, setDisabled] = useState<boolean>(true); // стейт дизейбла кнопки , стартовое значение дизейблит кнопку;

  //------------------------------- ---------------------------------------------------------------

  const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(event.target.value); //Преобразуем значение из value в числовой тип;
    setNewMaxValue(newMaxValue); // обновляем локальный стейт;
    const errorCheck =
      newMinValue < 0 || newMaxValue < 0 || newMinValue >= newMaxValue;
    setDisabled(errorCheck); //проверка на ошибку , дизейблить кнопку если неправильное значение
    updateErrorStatus(errorCheck); // передаем статус об ошибке в родительский компонент;
  };

  const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(event.target.value); //Преобразуем значение из value в числовой тип;
    setNewMinValue(newMinValue); // обновляем локальный стейт минимального значения;
    const errorCheck =
      newMinValue < 0 || newMaxValue < 0 || newMinValue >= newMaxValue;
    setDisabled(errorCheck); //проверка на ошибку , дизейблить кнопку если неправильное значение
    updateErrorStatus(errorCheck); // передаем статус об ошибке в родительский компонент;
  };

  const onButtonHandler = () => {
    updateMaxValue(newMaxValue); // передаем максимальное значение в родительский компонент;
    updateMinValue(newMinValue); // передаем минимальное значение в родительский компонент;
    setDisabled(true); //  обновляем локальный стейт, дизейблим кнопку после нажатия;
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
        <Button name={"Set"} disabled={disabled} onClick={onButtonHandler} />
      </div>
    </div>
  );
};

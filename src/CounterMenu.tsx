import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { InputBlock } from "./components/Input";

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

  //используем useEffect для проверки ошибок
  useEffect(() => {
    const errorCheck =
      newMinValue < 0 || newMaxValue < 0 || newMinValue >= newMaxValue;
    setDisabled(errorCheck);
    updateErrorStatus(errorCheck);
  }, [newMaxValue, newMinValue]); // Зависимости

  const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMaxValue(Number(event.target.value)); // обновляем локальный стейт;
  };

  const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMinValue(Number(event.target.value)); // обновляем локальный стейт минимального значения;
  };

  const onButtonHandler = () => {
    updateMaxValue(newMaxValue); // передаем максимальное значение в родительский компонент;
    updateMinValue(newMinValue); // передаем минимальное значение в родительский компонент;
    setDisabled(true); //  обновляем локальный стейт, дизейблим кнопку после нажатия;
    localStorage.setItem("maxValue", JSON.stringify(newMaxValue)); // сохраняем в LocalStorage значение переменной newMaxValue
    localStorage.setItem("minValue", JSON.stringify(newMinValue)); // сохраняем в LocalStorage значение переменной newMinValue
  };

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <InputBlock
          title={"max value:"}
          value={newMaxValue}
          onChange={onChangeMaxHandler}
        />
        <InputBlock
          title={"min value:"}
          value={newMinValue}
          onChange={onChangeMinHandler}
        />
      </div>

      <div className="buttonBlock">
        <Button name={"Set"} disabled={disabled} onClick={onButtonHandler} />
      </div>
    </div>
  );
};

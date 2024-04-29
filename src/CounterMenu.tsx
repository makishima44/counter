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

  // const onChangeHandler = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   minOrMax: string
  // ) => {
  //   const newValue = Number(event.target.value);
  //   if (minOrMax === "min") {
  //     setNewMinValue(newValue);
  //     setNewMaxValue((currentMaxValue) => {
  //       const errorCheck =
  //         newValue < 0 || currentMaxValue < 0 || newValue >= currentMaxValue;
  //       setDisabled(errorCheck);
  //       updateErrorStatus(errorCheck);
  //       return currentMaxValue; // Возвращаем неизмененное текущее максимальное значение
  //     });
  //   } else if (minOrMax === "max") {
  //     setNewMaxValue(newValue);
  //     setNewMinValue((currentMinValue) => {
  //       const errorCheck =
  //         currentMinValue < 0 || newValue < 0 || currentMinValue >= newValue;
  //       setDisabled(errorCheck);
  //       updateErrorStatus(errorCheck);
  //       return currentMinValue; // Возвращаем неизмененное текущее минимальное значение
  //     });
  //   }
  // };

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

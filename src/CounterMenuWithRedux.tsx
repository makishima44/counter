import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { InputBlock } from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./state/store";
import {
  CounterStateType,
  setMaxValueAC,
  setMinValueAC,
} from "./state/counterReducer";

export const CounterMenuWithRedux = () => {
  const dispatch = useDispatch();
  const { maxValue, minValue } = useSelector<RootStateType, CounterStateType>(
    (state) => state.counter
  );
  const [newMaxValue, setNewMaxValue] = useState<number>(maxValue); //локальный  стейт максимального значения;
  const [newMinValue, setNewMinValue] = useState<number>(minValue); //локальный стейт минимального значения;

  //------------------------------- ---------------------------------------------------------------

  const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMaxValue(Number(event.target.value)); // обновляем локальный стейт;
  };

  const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMinValue(Number(event.target.value)); // обновляем локальный стейт минимального значения;
  };

  const onButtonHandler = () => {
    dispatch(setMinValueAC(newMinValue));
    dispatch(setMaxValueAC(newMaxValue));
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
        <Button name={"Set"} onClick={onButtonHandler} />
      </div>
    </div>
  );
};

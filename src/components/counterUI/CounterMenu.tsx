import { ChangeEvent, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../state/store/store";
import { CounterStateType } from "../../state/counter/types";
import { setErrorAC, setMaxValueAC, setMinValueAC } from "../../state/counter/counterActions";
import { InputBlock } from "../Input";
import { Button } from "../Button";

export const CounterMenu = () => {
  const dispatch = useDispatch();

  const { maxValue, minValue } = useSelector<RootStateType, CounterStateType>(
    (state) => state.counter
  );
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const errorCheck = minValue < 0 || maxValue < 0 || minValue >= maxValue;
    dispatch(setErrorAC(errorCheck));
    setDisabled(errorCheck);
  }, [maxValue, minValue]);

  const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAC(Number(event.target.value)));
  };

  const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinValueAC(Number(event.target.value)));
  };

  const onButtonHandler = () => {
    dispatch(setMinValueAC(minValue));
    dispatch(setMaxValueAC(maxValue));
    setDisabled(true);
    localStorage.setItem("counterValues", JSON.stringify({ minValue, maxValue, count: minValue }));
  };

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <InputBlock label={"max value:"} value={String(maxValue)} onChange={onChangeMaxHandler} />
        <InputBlock label={"min value:"} value={String(minValue)} onChange={onChangeMinHandler} />
      </div>

      <div className="buttonBlock">
        <Button disabled={disabled} onClick={onButtonHandler}>
          Set
        </Button>
      </div>
    </div>
  );
};

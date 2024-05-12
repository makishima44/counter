import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { InputBlock } from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./state/store";
import {
  CounterStateType,
  setErrorAC,
  setMaxValueAC,
  setMinValueAC,
} from "./state/counterReducer";

export const CounterMenuWithRedux = () => {
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

  //----------------------------------------------------------------------------------------------

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
  };

  //-------------------------------------------------------------------------------------------------//

  return (
    <div className="mainBlock">
      <div className="counterBlock">
        <InputBlock
          title={"max value:"}
          value={maxValue}
          onChange={onChangeMaxHandler}
        />
        <InputBlock
          title={"min value:"}
          value={minValue}
          onChange={onChangeMinHandler}
        />
      </div>

      <div className="buttonBlock">
        <Button name={"Set"} disabled={disabled} onClick={onButtonHandler} />
      </div>
    </div>
  );
};

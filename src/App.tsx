import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterMenu } from "./CounterMenu";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [count, setCount] = useState(minValue);
  const [error, setError] = useState(false);

  const updateErrorStatus = (error: boolean) => {
    setError(error); // обновляет состояние ошибки
  };

  const updateMaxValue = (newMaxValue: number) => {
    setMaxValue(newMaxValue);
  };

  const updateMinValue = (newMinValue: number) => {
    setMinValue(newMinValue);
    setCount(newMinValue); // устанавливает новое минимальное значение в count в качестве стартового значения
  };

  return (
    <div className="App">
      <CounterMenu
        maxValue={maxValue}
        minValue={minValue}
        updateMaxValue={updateMaxValue}
        updateMinValue={updateMinValue}
        updateErrorStatus={updateErrorStatus}
      />
      <Counter
        count={count}
        maxValue={maxValue}
        minValue={minValue}
        setCount={setCount}
        error={error}
      />
    </div>
  );
}

export default App;

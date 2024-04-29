import React, { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterMenu } from "./CounterMenu";

function App() {
  const getInitialValue = (key: string, defaultValue: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue);
    }
    return defaultValue;
  }; // в зависимости от ключа , получаем значение из localStorage;

  //---------------------------------------------------------------//

  const [maxValue, setMaxValue] = useState(
    () => getInitialValue("maxValue", 5) // вызываем функцию  для установки начального значения, которое получаем из localstorage
  );
  const [minValue, setMinValue] = useState(
    () => getInitialValue("minValue", 0) // вызываем функцию  для установки начального значения, которое получаем из localstorage
  );
  const [count, setCount] = useState(minValue);
  const [error, setError] = useState(false);

  //----------------------------------------------------------------------//

  const updateErrorStatus = (error: boolean) => {
    setError(error); // обновляет состояние ошибки;
  };

  const updateMaxValue = (newMaxValue: number) => {
    setMaxValue(newMaxValue);
  };

  const updateMinValue = (newMinValue: number) => {
    setMinValue(newMinValue);
    setCount(newMinValue); // устанавливает новое минимальное значение в count в качестве стартового значения;
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

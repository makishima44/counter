import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterMenu } from "./CounterMenu";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [count, setCount] = useState(minValue);

  const updateMaxValue = (newMaxValue: number) => {
    setMaxValue(newMaxValue);
  };

  const updateMinValue = (newMinValue: number) => {
    setMinValue(newMinValue);
    setCount(newMinValue);
  };

  return (
    <div className="App">
      <CounterMenu
        maxValue={maxValue}
        minValue={minValue}
        updateMaxValue={updateMaxValue}
        updateMinValue={updateMinValue}
      />
      <Counter
        count={count}
        maxValue={maxValue}
        minValue={minValue}
        setCount={setCount}
      />
    </div>
  );
}

export default App;

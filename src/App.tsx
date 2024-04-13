import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterMenu } from "./CounterMenu";

function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  const updateMaxValue = (newMaxValue: number) => {
    setMaxValue(newMaxValue);
  };

  return (
    <div className="App">
      <CounterMenu maxValue={maxValue} updateMaxValue={updateMaxValue} />
      <Counter count={count} maxValue={maxValue} setCount={setCount} />
    </div>
  );
}

export default App;

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { DispatchType } from "./state/counter/thunkTypes";
import { SetValuesTC } from "./state/counter/counterThunks";
import { Counter } from "./components/counterUI/Counter";
import { CounterMenu } from "./components/counterUI/CounterMenu";

import "./App.css";

function App() {
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    dispatch(SetValuesTC());
  }, [dispatch]);

  return (
    <div className="App">
      <CounterMenu />
      <Counter />
    </div>
  );
}

export default App;

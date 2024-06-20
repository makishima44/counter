import { useDispatch } from "react-redux";
import "./App.css";
import { CounterMenuWithRedux } from "./CounterMenuWithRedux";
import { CounterWithRedux } from "./CounterWithRedux";
import { useEffect } from "react";
import { DispatchType, SetValuesTC } from "./state/counterReducer";

function AppWithRedux() {
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    dispatch(SetValuesTC());
  }, [dispatch]);

  return (
    <div className="App">
      <CounterMenuWithRedux />
      <CounterWithRedux />
    </div>
  );
}

export default AppWithRedux;

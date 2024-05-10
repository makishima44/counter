import "./App.css";

import { CounterMenuWithRedux } from "./CounterMenuWithRedux";
import { CounterWithRedux } from "./CounterWithRedux";

function AppWithRedux() {
  return (
    <div className="App">
      <CounterMenuWithRedux />
      <CounterWithRedux />
    </div>
  );
}

export default AppWithRedux;

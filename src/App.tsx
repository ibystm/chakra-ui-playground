import React from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Loading } from "./features/loading/Loading";

function App() {
  return (
    <div className="App">
      <Counter />
      <div style={{}}>
        <Loading />
      </div>
    </div>
  );
}

export default App;

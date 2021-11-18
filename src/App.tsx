import React from "react";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import { Counter } from "./features/counter/Counter";
import { selectLoadingStatus } from "./features/counter/counterSlice";
import { Loading } from "./features/loading/Loading";

function App() {
  const loadingState = useAppSelector(selectLoadingStatus);
  return (
    <div className="App">
      {loadingState === "loading" ? <Loading /> : <Counter />}
    </div>
  );
}

export default App;

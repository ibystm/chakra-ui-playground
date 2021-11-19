import React from "react";
import "./App.css";
import { useSelector } from "./app/hooks";
import { Counter } from "./features/counter/Counter";
import { selectLoadingStatus } from "./features/counter/counterSlice";
import { Loading } from "./features/loading/Loading";

function App() {
  const loadingState = useSelector(selectLoadingStatus);
  const loading = loadingState === "loading";
  function detectClassName(loading: boolean): string {
    let className = "App";
    if (loading) {
      className += " app-loading";
    }
    return className;
  }
  return (
    <div className={detectClassName(loading)}>
      <Counter />
      {loading && <Loading />}
    </div>
  );
}

export default App;

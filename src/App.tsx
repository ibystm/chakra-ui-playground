import React from "react";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import { Counter } from "./features/counter/Counter";
import { Loading } from "./features/loading/Loading";
import { selectLoading } from "./features/loading/loadingSlice";

function App() {
  const loadingState = useAppSelector(selectLoading);
  return (
    <div className="App">
      {loadingState.loading ? <Loading /> : <Counter />}
    </div>
  );
}

export default App;

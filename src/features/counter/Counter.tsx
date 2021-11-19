import React, { useState } from "react";
import { useAppDispatch, useSelector } from "../../app/hooks";
import styles from "./Counter.module.css";
import {
  counterValueSelecter,
  decrement,
  increment,
  incrementAsync,
  substractAsync,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => counterValueSelecter(state));
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const incrementWithAsync = () => {
    dispatch(incrementAsync(incrementValue));
  };
  const substractWithAsync = () => {
    dispatch(substractAsync(incrementValue));
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={substractWithAsync}>
          Substract Async
        </button>
        <button className={styles.asyncButton} onClick={incrementWithAsync}>
          Add Async
        </button>
      </div>
    </div>
  );
}

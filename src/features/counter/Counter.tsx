import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Counter.module.css";
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  substractAsync,
} from "./counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
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
        <button
          className={styles.button}
          onClick={() => dispatch(substractWithAsync)}
        >
          Substract Async
        </button>
        <button className={styles.asyncButton} onClick={incrementWithAsync}>
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

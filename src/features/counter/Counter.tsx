import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch, useSelector } from "../../app/hooks";
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
    <Box>
      <Flex align="center" justify="center" marginBottom={4}>
        <Button
          fontSize={24}
          color="rgb(112, 76, 182)"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          marginLeft={3}
          marginRight={3}
        >
          -
        </Button>
        <Box as="span">{count}</Box>
        <Button
          color="rgb(112, 76, 182)"
          fontSize={24}
          // className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          marginLeft={3}
          marginRight={3}
        >
          +
        </Button>
      </Flex>
      <Flex align="center" justify="center">
        <Input
          w={12}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          color="rgb(112, 76, 182)"
          onClick={substractWithAsync}
          marginLeft={3}
          marginRight={3}
        >
          Substract Async
        </Button>
        <Button
          color="rgb(112, 76, 182)"
          onClick={incrementWithAsync}
          marginLeft={3}
          marginRight={3}
        >
          Add Async
        </Button>
      </Flex>
    </Box>
  );
}

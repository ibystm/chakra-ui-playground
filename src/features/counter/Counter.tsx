import { Box, Button, Flex, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch, useSelector } from "../../app/hooks";
import {
  counterValueSelecter,
  decrement,
  increment,
  incrementAsync,
  substractAsync,
} from "./counterSlice";

export function Counter(): JSX.Element {
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
    <VStack spacing={8}>
      <Flex align="center" justify="center">
        <Button
          fontSize="32px"
          color="rgb(112, 76, 182)"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          marginLeft={8}
          marginRight={8}
          h="80px"
          w="80px"
        >
          -
        </Button>
        <Box as="span" fontSize="40px">
          {count}
        </Box>
        <Button
          color="rgb(112, 76, 182)"
          h="80px"
          w="80px"
          marginLeft={8}
          marginRight={8}
          fontSize="3xl"
          // className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Flex>
      <Flex align="center" justify="center">
        <Input
          aria-label="Set increment amount"
          value={incrementAmount}
          h="80px"
          w="80px"
          textAlign="center"
          fontSize="24px"
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          color="rgb(112, 76, 182)"
          onClick={substractWithAsync}
          marginLeft={4}
          marginRight={4}
          w="200px"
          h="80px"
          fontSize="24px"
        >
          Substract Async
        </Button>
        <Button
          color="rgb(112, 76, 182)"
          onClick={incrementWithAsync}
          marginLeft={4}
          marginRight={4}
          w="200px"
          h="80px"
          fontSize="24px"
        >
          Add Async
        </Button>
      </Flex>
    </VStack>
  );
}

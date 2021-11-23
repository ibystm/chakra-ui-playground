import { Box, Input } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./toDoListSlice";

const TodoInputArea = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      if (!input.length) return;

      // deprecated
      if (e.keyCode === 13) {
        console.log("inputは！", input);
        dispatch(addTodo(input));
        setInput("");
      }
    },
    [dispatch, input]
  );
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  }, []);
  return (
    <Box w="300px">
      <Input
        variant="flushed"
        placeholder="New Todo"
        size="lg"
        focusBorderColor="purple.400"
        onKeyDown={onKeyDown}
        value={input}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TodoInputArea;

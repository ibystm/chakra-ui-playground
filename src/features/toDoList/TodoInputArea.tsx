import { Box, Input, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useInputError } from "./hooks/useInputError";
import { addTodo } from "./toDoListSlice";

const TodoInputArea: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const { errorObject, handleError } = useInputError();
  const dispatch = useDispatch();
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      if (!input.length) return;

      // deprecated
      if (e.keyCode === 13) {
        dispatch(addTodo(input));
        setInput("");
      }
    },
    [dispatch, input]
  );
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setInput(e.currentTarget.value);
      handleError(e.currentTarget.value);
    },
    [handleError]
  );

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
        isInvalid={errorObject.error}
      />
      {errorObject.message && (
        <Text color="crimson" mt={4}>
          {errorObject.message}
        </Text>
      )}
    </Box>
  );
};

export default TodoInputArea;

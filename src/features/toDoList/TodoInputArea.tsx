import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { MotionBox } from "../../components/Motions";
import { useKeyboardEvents } from "../../utils/hooks/useKeyboardEvents";
import { useInputError } from "./hooks/useInputError";
import { addTodo } from "./toDoListSlice";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: "1",
    },
  },
};

const TodoInputArea: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const { errorObject, handleError } = useInputError();
  const { handlePressEnter } = useKeyboardEvents();

  const dispatch = useDispatch();
  const createTodo = useCallback(() => {
    if (!input.length) return;
    dispatch(addTodo(input));
    setInput("");
  }, [dispatch, input]);
  const onPressEnter = useCallback(
    (e: React.KeyboardEvent) => {
      handlePressEnter(e, createTodo);
    },
    [createTodo, handlePressEnter]
  );
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setInput(e.currentTarget.value);
      handleError(e.currentTarget.value);
    },
    [handleError]
  );

  const onClickReset = useCallback(() => {
    alert("こらー！");
  }, []);

  return (
    <MotionBox
      w="320px"
      variants={variants}
      initial="hidden"
      animate="visible"
      display="flex"
      justifyContent="space-between"
    >
      <Box width="75%">
        <Input
          aria-label="todo-input-area"
          variant="flushed"
          placeholder="New Todo"
          size="lg"
          focusBorderColor="purple.400"
          onKeyDown={onPressEnter}
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
      <Button bg="none" onClick={onClickReset}>
        <RepeatIcon />
      </Button>
    </MotionBox>
  );
};

export default TodoInputArea;

import { Checkbox, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "../../app/hooks";
import { selectTodoList } from "./toDoListSlice";

const ToDoList: React.FC = () => {
  const todoList = useSelector((state) => selectTodoList(state));
  return (
    <Stack
      spacing={10}
      direction="column"
      align="start"
      justify="center"
      w="300px"
    >
      {todoList.map((t, idx) => (
        <Checkbox key={idx} size="lg" colorScheme="purple" checked={t.isDone}>
          {t.todo}
        </Checkbox>
      ))}
    </Stack>
  );
};

export default ToDoList;

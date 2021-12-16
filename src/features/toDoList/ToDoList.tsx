import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "../../app/hooks";
import { TodoItem } from "./TodoItem";
import { selectTodoList } from "./toDoListSlice";

const ToDoList: React.FC = () => {
  const todoList = useSelector((state) => selectTodoList(state));
  return (
    <Stack
      spacing={2}
      direction="column"
      align="start"
      justify="center"
      w="300px"
    >
      {todoList.map((t) => {
        return (
          <TodoItem
            key={t.key}
            storeKey={t.key}
            todo={t.todo}
            isDone={t.isDone}
          />
        );
      })}
    </Stack>
  );
};

export default ToDoList;

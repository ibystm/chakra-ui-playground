import { useEffect, useState } from "react";
import { useSelector } from "../../../app/hooks";
import { selectTodoList, ToDoListState } from "../toDoListSlice";

export type UseTodoItemFilterType = {
  filteredTodo: ToDoListState[];
};

export const useTodoItemFilter = (condition: number): UseTodoItemFilterType => {
  const todoList = useSelector((state) => selectTodoList(state));
  const [filteredTodo, setFilterdTodo] = useState<ToDoListState[]>(todoList);

  useEffect(() => {
    const filterFn = () => {
      switch (condition) {
        case 1:
          return setFilterdTodo(todoList.filter((t) => !t.isDone));
        case 2:
          return setFilterdTodo(todoList.filter((t) => t.isDone));
        default:
          return setFilterdTodo(todoList);
      }
    };
    filterFn();
  }, [condition, todoList]);

  return {
    filteredTodo,
  };
};

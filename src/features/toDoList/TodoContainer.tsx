import React from "react";
import TodoInputArea from "./TodoInputArea";
import ToDoList from "./ToDoList";

export const TodoContainer: React.VFC = () => {
  return (
    <>
      <TodoInputArea />
      <ToDoList />
    </>
  );
};

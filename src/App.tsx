import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "./app/hooks";
import { selectLoadingStatus } from "./features/counter/counterSlice";
import { Loading } from "./features/loading/Loading";
import TodoInputArea from "./features/toDoList/TodoInputArea";
import ToDoList from "./features/toDoList/ToDoList";

function App() {
  const loadingState = useSelector(selectLoadingStatus);
  const loading = loadingState === "loading";
  return (
    <VStack
      spacing={10}
      mt="120px"
      ml="120px"
      position="relative"
      bg={loading ? "#E7F3FA" : undefined}
    >
      <Heading>Todo list of the day.</Heading>
      <TodoInputArea />
      <ToDoList />
      {loading && <Loading />}
    </VStack>
  );
}

export default App;

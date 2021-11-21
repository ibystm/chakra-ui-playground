import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "./app/hooks";
import { selectLoadingStatus } from "./features/counter/counterSlice";
import { Loading } from "./features/loading/Loading";
import ToDoList from "./features/toDoList/ToDoList";

function App() {
  const loadingState = useSelector(selectLoadingStatus);
  const loading = loadingState === "loading";
  return (
    <Stack
      spacing={8}
      mt="120px"
      ml="120px"
      direction="column"
      position="relative"
      bg={loading ? "#E7F3FA" : undefined}
    >
      <Heading>Todo list of the day.</Heading>
      <ToDoList />
      {loading && <Loading />}
    </Stack>
  );
}

export default App;

import {Box} from "@chakra-ui/react";
import React from "react";
import {useSelector} from "./app/hooks";
import {selectLoadingStatus} from "./features/counter/counterSlice";
import {Loading} from "./features/loading/Loading";
import ToDoList from './features/toDoList/ToDoList';

function App() {
  const loadingState = useSelector(selectLoadingStatus);
  const loading = loadingState === "loading";
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bg={loading ? "#E7F3FA" : undefined}
    >
      <ToDoList />
      {loading && <Loading />}
    </Box>
  );
}

export default App;

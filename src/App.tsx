import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "./app/hooks";
import { Counter } from "./features/counter/Counter";
import { selectLoadingStatus } from "./features/counter/counterSlice";
import { Loading } from "./features/loading/Loading";

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
      bg={loading ? "#000" : undefined}
    >
      <Counter />
      {loading && <Loading />}
    </Box>
  );
}

export default App;

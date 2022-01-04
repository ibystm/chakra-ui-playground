import { VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "./app/hooks";
import { Header } from "./components/header/Header";
import { selectLoadingStatus } from "./features/counter/counterSlice";
import { Loading } from "./features/loading/Loading";
import { TodoContainer } from "./features/toDoList/TodoContainer";

const App: React.FC = () => {
  const loadingState = useSelector(selectLoadingStatus);
  const loading = loadingState === "loading";
  return (
    <VStack
      spacing={10}
      mt="8px"
      position="relative"
      bg={loading ? "#E7F3FA" : undefined}
    >
      <Header />
      <TodoContainer />
      {loading && <Loading />}
    </VStack>
  );
};

export default App;

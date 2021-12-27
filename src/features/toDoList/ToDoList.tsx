import { Stack, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
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
      <Tabs
        width="100%"
        variant="soft-rounded"
        colorScheme="purple"
        align="center"
      >
        <TabList mb={4}>
          <Tab>All</Tab>
          <Tab>ToDo</Tab>
          <Tab>Done</Tab>
        </TabList>
        {todoList.length ? (
          todoList.map((t) => {
            return (
              <TodoItem
                key={t.key}
                storeKey={t.key}
                todo={t.todo}
                isDone={t.isDone}
              />
            );
          })
        ) : (
          <Text fontSize="xl">No Todo Found</Text>
        )}
      </Tabs>
    </Stack>
  );
};

export default ToDoList;

import { Stack, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import { useTodoItemFilter } from "./hooks/useTodoItemFilter";
import { TodoItem } from "./TodoItem";

const ToDoList: React.FC = () => {
  // const todoList = useSelector((state) => selectTodoList(state));
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const { filteredTodo } = useTodoItemFilter(tabIndex);
  const onChangeTab = (idx: number) => {
    setTabIndex(idx);
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      align="start"
      justify="center"
      w="300px"
    >
      <Tabs
        tabIndex={tabIndex}
        onChange={onChangeTab}
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
        {filteredTodo.length ? (
          filteredTodo.map((t) => {
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

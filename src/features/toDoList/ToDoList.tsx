import { Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

const ToDoList = () => {
  return (
    <Stack
      spacing={10}
      direction="column"
      align="start"
      justify="center"
      w="300px"
    >
      <Checkbox size="lg" colorScheme="purple">
        Checkbox
      </Checkbox>
      <Checkbox size="lg" colorScheme="purple">
        Checkbox
      </Checkbox>
      <Checkbox size="lg" colorScheme="purple">
        Checkbox
      </Checkbox>
    </Stack>
  );
};

export default ToDoList;

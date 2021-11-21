import { Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

const ToDoList = () => {
  return (
    <Stack spacing={10} direction="column">
      <Checkbox size="lg" colorScheme="purple" iconSize="2rem">
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

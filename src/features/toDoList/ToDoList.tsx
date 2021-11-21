import { Checkbox, VStack } from "@chakra-ui/react";
import React from "react";

const ToDoList = () => {
  return (
    <VStack spacing={10} direction="row">
      <Checkbox size="lg">Checkbox</Checkbox>
      <Checkbox size="lg" defaultIsChecked>
        Checkbox
      </Checkbox>
      <Checkbox size="lg" defaultIsChecked>
        Checkbox
      </Checkbox>
    </VStack>
  );
};

export default ToDoList;

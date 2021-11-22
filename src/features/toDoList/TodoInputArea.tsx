import { Box, Input } from "@chakra-ui/react";
import React from "react";

const TodoInputArea = () => {
  return (
    <Box w="300px">
      <Input
        variant="flushed"
        placeholder="New Todo"
        size="lg"
        focusBorderColor="purple.400"
      />
    </Box>
  );
};

export default TodoInputArea;

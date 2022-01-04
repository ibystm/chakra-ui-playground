import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type P = {};

export const Header: React.FC<P> = () => {
  return (
    <Box
      h="64px"
      w="100%"
      borderBottom="1px"
      borderColor="#E2E8F0"
      display="flex"
    >
      <Box display="flex">
        <CheckCircleIcon ml="100px" w="40px" h="40px" mr="16px" />
        <Heading>Todo List</Heading>
      </Box>
    </Box>
  );
};

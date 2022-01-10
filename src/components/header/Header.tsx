import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-types
type P = {};

export const Header: React.FC<P> = () => {
  const navigate = useNavigate();
  const onClickTitle = () => {
    navigate("/");
  };
  return (
    <Box
      h="64px"
      w="100%"
      borderBottom="1px"
      borderColor="#E2E8F0"
      display="flex"
    >
      <Button display="flex" ml="100px" bg="#fff" onClick={onClickTitle}>
        <CheckCircleIcon w="40px" h="40px" mr="16px" />
        <Heading>Todo List</Heading>
      </Button>
    </Box>
  );
};

import { Button } from "@chakra-ui/button";
import {
  Box,
  BoxProps,
  ButtonProps,
  Checkbox,
  CheckboxProps,
  Flex,
  FlexProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionCheckbox = motion<CheckboxProps>(Checkbox);
export const MotionButton = motion<ButtonProps>(Button);

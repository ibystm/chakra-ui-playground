import {
  Box,
  BoxProps,
  Checkbox,
  CheckboxProps,
  Flex,
  FlexProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionCheckbox = motion<CheckboxProps>(Checkbox);

import { EditIcon } from "@chakra-ui/icons";
import { useAnimation } from "framer-motion";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  MotionBox,
  MotionButton,
  MotionCheckbox,
} from "../../components/Motions";
import { changeStatus } from "./toDoListSlice";

type ITodoItem = {
  storeKey: string;
  todo: string;
  isDone: boolean;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: "1",
    },
  },
  fade: {
    opacity: 0.3,
    transition: {
      duration: "1.5",
    },
  },
};

const TodoItem: React.FC<ITodoItem> = ({ storeKey, todo, isDone }) => {
  const dispatch = useAppDispatch();
  const controls = useAnimation();
  const onCheck = useCallback(() => {
    dispatch(changeStatus({ key: storeKey }));
  }, []);

  useEffect(() => {
    console.log("isDone", isDone);
    if (isDone) {
      controls.start("fade");
    }
    if (!isDone) {
      controls.start("animate");
    }
  }, [isDone]);
  return (
    <MotionBox
      variants={variants}
      initial="initial"
      animate={controls}
      display="flex"
      justifyContent="space-between"
      w="100%"
    >
      <MotionCheckbox
        size="lg"
        colorScheme="purple"
        isChecked={isDone}
        onChange={onCheck}
      >
        {todo}
      </MotionCheckbox>
      <MotionButton size="lg" bg="none" whileHover={{ scale: 1.2 }}>
        <EditIcon />
      </MotionButton>
    </MotionBox>
  );
};

export default TodoItem;
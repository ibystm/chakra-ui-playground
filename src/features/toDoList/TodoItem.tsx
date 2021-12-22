import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  MotionBox,
  MotionButton,
  MotionCheckbox,
} from "../../components/Motions";
import { useKeyboardEvents } from "../../utils/hooks/useKeyboardEvents";
import { changeStatus, deleteTodo, updateTodo } from "./toDoListSlice";

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

export const TodoItem: React.FC<ITodoItem> = ({ storeKey, todo, isDone }) => {
  const dispatch = useAppDispatch();
  const controls = useAnimation();
  const { handlePressEnter } = useKeyboardEvents();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo);
  const closeModal = () => setModalOpen(false);
  const openModal = useCallback(() => {
    setEditTodo(todo);
    setModalOpen(true);
  }, [todo]);
  const onCheck = useCallback(() => {
    dispatch(changeStatus({ key: storeKey }));
  }, [dispatch, storeKey]);
  const onChangeTodo = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setEditTodo(e.currentTarget.value);
  }, []);
  const onSaveEditTodo = useCallback(() => {
    dispatch(updateTodo({ key: storeKey, todo: editTodo }));
    setEditTodo("");
    closeModal();
  }, [dispatch, editTodo, storeKey]);
  const onKeyDownEnter = useCallback(
    (e: React.KeyboardEvent) => {
      handlePressEnter(e, onSaveEditTodo);
    },
    [handlePressEnter, onSaveEditTodo]
  );
  const onDeleteTodo = useCallback(() => {
    dispatch(deleteTodo({ key: storeKey }));
  }, [dispatch, storeKey]);

  useEffect(() => {
    if (isDone) {
      controls.start("fade");
    }
    if (!isDone) {
      controls.start("animate");
    }
  }, [controls, isDone]);
  return (
    <>
      <MotionBox
        variants={variants}
        initial="initial"
        animate={controls}
        display="flex"
        justifyContent="space-between"
        w="100%"
      >
        <Box
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          width="200px"
          overflow="hidden"
          display="inline-block"
        >
          <MotionCheckbox
            size="lg"
            colorScheme="purple"
            isChecked={isDone}
            onChange={onCheck}
          >
            {todo}
          </MotionCheckbox>
        </Box>

        <Box w="30%" display="flex">
          <MotionButton
            size="lg"
            bg="none"
            whileHover={{ scale: 1.1 }}
            onClick={openModal}
          >
            <EditIcon />
          </MotionButton>
          <MotionButton
            size="lg"
            bg="none"
            whileHover={{ scale: 1.1 }}
            onClick={onDeleteTodo}
          >
            <DeleteIcon />
          </MotionButton>
        </Box>
      </MotionBox>
      <Modal
        closeOnOverlayClick={false}
        isOpen={modalOpen}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              value={editTodo}
              onChange={onChangeTodo}
              onKeyDown={onKeyDownEnter}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSaveEditTodo}>
              Save
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

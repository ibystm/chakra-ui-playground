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

const TodoItem: React.FC<ITodoItem> = ({ storeKey, todo, isDone }) => {
  const dispatch = useAppDispatch();
  const controls = useAnimation();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo);
  const closeModal = () => setModalOpen(false);
  const onCheck = useCallback(() => {
    dispatch(changeStatus({ key: storeKey }));
  }, []);
  const onChangeTodo = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setEditTodo(e.currentTarget.value);
  }, []);
  const onSaveEditTodo = useCallback(() => {
    dispatch(updateTodo({ key: storeKey, todo: editTodo }));
    setEditTodo("");
    closeModal();
  }, [editTodo]);
  const onDeleteTodo = useCallback(() => {
    dispatch(deleteTodo({ key: storeKey }));
  }, []);

  useEffect(() => {
    if (isDone) {
      controls.start("fade");
    }
    if (!isDone) {
      controls.start("animate");
    }
  }, [isDone]);
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
        <MotionCheckbox
          size="lg"
          colorScheme="purple"
          isChecked={isDone}
          onChange={onCheck}
        >
          {todo}
        </MotionCheckbox>
        <Box>
          <MotionButton
            size="lg"
            bg="none"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <EditIcon />
          </MotionButton>
          <MotionButton
            size="lg"
            bg="none"
            whileHover={{ scale: 1.2 }}
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
            <Input value={editTodo} onChange={onChangeTodo} />
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

export default TodoItem;

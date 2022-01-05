import { RepeatIcon } from "@chakra-ui/icons";
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
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MotionBox } from "../../components/Motions";
import { useKeyboardEvents } from "../../utils/hooks/useKeyboardEvents";
import { useInputError } from "./hooks/useInputError";
import { addTodo, deleteAll } from "./toDoListSlice";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: "1",
    },
  },
};

const TodoInputArea: React.FC = () => {
  const { errorObject, handleError } = useInputError();
  const { handlePressEnter } = useKeyboardEvents();
  const [resetModalOpen, setResetModalOpen] = useState<boolean>(false);
  const opneModal = () => setResetModalOpen(true);
  const closeModal = () => setResetModalOpen(false);

  const dispatch = useDispatch();
  const createTodo = () => {
    const input = formik.values.input;
    if (!input.length) return;
    dispatch(addTodo(input));
    formik.resetForm();
  };
  const onPressEnter = (e: React.KeyboardEvent) => {
    if (errorObject.error) return;
    handlePressEnter(e, createTodo);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    handleError(e.currentTarget.value);
  };

  const onClickReset = () => {
    dispatch(deleteAll());
  };

  const onPressAllDelete = () => {
    onClickReset();
    closeModal();
  };
  const formik = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: () => {
      console.log("submit!");
    },
  });

  return (
    <>
      <MotionBox
        w="320px"
        variants={variants}
        initial="hidden"
        animate="visible"
        display="flex"
        justifyContent="space-between"
      >
        <Box width="75%">
          <Input
            name="input"
            aria-label="todo-input-area"
            variant="flushed"
            placeholder="New Todo"
            size="lg"
            focusBorderColor="purple.400"
            onKeyDown={onPressEnter}
            value={formik.values.input}
            onChange={handleChange}
            isInvalid={errorObject.error}
          />
          {errorObject.error && errorObject.message && (
            <Text color="crimson" mt={2}>
              {errorObject.message}
            </Text>
          )}
        </Box>
        <Button bg="none" onClick={opneModal}>
          <RepeatIcon />
        </Button>
      </MotionBox>
      <Modal isOpen={resetModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete All Todo. </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Delete all todo. Is it Okay?</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button variant="ghost" onClick={onPressAllDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoInputArea;

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
import * as Yup from "yup";
import { MotionBox } from "../../components/Motions";
import { useKeyboardEvents } from "../../utils/hooks/useKeyboardEvents";
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

const inputValidationScheme = {
  initialValues: {
    input: "",
  },
  validationSchema: Yup.object({
    input: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, { message: "半角英数字をご入力ください" })
      .max(15, "15文字以内にしてください")
      .required("必須項目です"),
  }),
  onSubmit: () => {
    console.log("submit!");
  },
};

const TodoInputArea: React.FC = () => {
  const { handlePressEnter } = useKeyboardEvents();
  const formik = useFormik(inputValidationScheme);
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
    if (!formik.isValid) return;
    handlePressEnter(e, createTodo);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const onClickReset = () => {
    dispatch(deleteAll());
  };

  const onPressAllDelete = () => {
    onClickReset();
    closeModal();
  };

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
            isInvalid={!formik.isValid}
          />
          {formik.errors.input && (
            <Text color="crimson" mt={2}>
              {formik.errors.input}
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

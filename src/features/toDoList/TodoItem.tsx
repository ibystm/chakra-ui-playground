import { EditIcon } from "@chakra-ui/icons";
import {
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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => setModalOpen(false);
  const onCheck = useCallback(() => {
    dispatch(changeStatus({ key: storeKey }));
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
            <Input defaultValue={todo} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
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

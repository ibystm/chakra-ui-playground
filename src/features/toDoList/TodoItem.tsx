import React, { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { MotionCheckbox } from "../../components/Motions";
import { changeStatus } from "./toDoListSlice";

type ITodoItem = {
  storeKey: string;
  todo: string;
  isDone: boolean;
};

const TodoItem: React.FC<ITodoItem> = ({ storeKey, todo, isDone }) => {
  const dispatch = useAppDispatch();

  const onCheck = useCallback(() => {
    dispatch(changeStatus({ key: storeKey }));
  }, []);
  return (
    <MotionCheckbox
      size="lg"
      colorScheme="purple"
      isChecked={isDone}
      onChange={onCheck}
    >
      {todo}
    </MotionCheckbox>
  );
};

export default TodoItem;

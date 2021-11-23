import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export type ToDoListState = {
  key: string;
  todo: string;
  isDone: boolean;
  // finishedAt: number
};

const initialState: ToDoListState[] = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newValue: ToDoListState = {
        key: nanoid(),
        todo: action.payload,
        isDone: false,
      };
      console.log(newValue);
      state.push(newValue);
    },
  },
});

export const { addTodo } = todoListSlice.actions;
export const selectTodoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;

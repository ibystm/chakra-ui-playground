import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type ToDoListState = {
  todo: string;
  isDone: boolean;
  // finishedAt: number
};

const initialState: ToDoListState = {
  todo: "",
  isDone: false,
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo = action.payload;
    },
  },
});

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
      state.push(newValue);
    },
    updateTodo: (
      state,
      action: PayloadAction<Omit<ToDoListState, "isDone">>
    ) => {
      const { key, todo } = action.payload;
      console.log("結果", todo);
      const index = state.findIndex((e) => e.key === action.payload.key);
      state[index].todo = action.payload.todo;
    },
    changeStatus: (
      state,
      action: PayloadAction<Pick<ToDoListState, "key">>
    ) => {
      const index = state.findIndex((e) => e.key === action.payload.key);
      state[index].isDone = !state[index].isDone;
    },
  },
});

export const { addTodo, changeStatus, updateTodo } = todoListSlice.actions;
export const selectTodoList = (state: RootState): ToDoListState[] =>
  state.todoList;

export default todoListSlice.reducer;

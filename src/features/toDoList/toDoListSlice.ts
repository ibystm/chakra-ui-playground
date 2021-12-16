import { createSlice, current, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type ToDoListState = {
  key: string;
  todo: string;
  isDone: boolean;
  // finishedAt: number
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [] as ToDoListState[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // currentを使えば、現在のstateを除くことが可能。なければ、logged instance proxy objの形で出力されてします。
      console.log(current(state));
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
      const index = state.findIndex((e) => e.key === key);
      if (!state[index]) {
        return;
      }
      state[index].todo = todo;
    },
    deleteTodo: (state, action: PayloadAction<Pick<ToDoListState, "key">>) => {
      const { key } = action.payload;
      return state.filter((e) => e.key !== key);
    },
    changeStatus: (
      state,
      action: PayloadAction<Pick<ToDoListState, "key">>
    ) => {
      const index = state.findIndex((e) => e.key === action.payload.key);
      if (!state[index]) {
        return;
      }
      state[index].isDone = !state[index].isDone;
    },
  },
});

export const { addTodo, changeStatus, updateTodo, deleteTodo } =
  todoListSlice.actions;
export const selectTodoList = (state: RootState): ToDoListState[] =>
  state.todoList;

export default todoListSlice.reducer;

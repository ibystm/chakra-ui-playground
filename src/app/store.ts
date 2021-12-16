import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loadingReducer from "../features/loading/loadingSlice";
import todoListReducer from "../features/toDoList/toDoListSlice";

export const reducer = {
  counter: counterReducer,
  loading: loadingReducer,
  todoList: todoListReducer,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

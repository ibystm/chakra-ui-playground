import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as rawUseSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

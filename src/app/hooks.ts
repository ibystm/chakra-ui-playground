import { Dispatch } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as rawUseSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = (): Dispatch<AppDispatch> =>
  useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

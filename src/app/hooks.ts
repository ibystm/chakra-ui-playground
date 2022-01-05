import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as rawUseSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

import { configureStore, PreloadedState, Store } from "@reduxjs/toolkit";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { reducer, RootState } from "../app/store";

type StoreRelatedObject = {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
  renderOption?: RenderOptions[];
};

function render(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  }: StoreRelatedObject = {}
): RenderResult {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-exporting everything
export * from "@testing-library/react";
// override render method
export { render };

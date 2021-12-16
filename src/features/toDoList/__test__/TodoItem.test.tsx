import userEvent from "@testing-library/user-event";
import React from "react";
import { render } from "../../../utils/test-utils";
import { TodoItem } from "../TodoItem";

it("the todo props render correctly", () => {
  const { getByText } = render(
    <TodoItem storeKey="id_aiuio" todo="test" isDone={false} />
  );
  expect(getByText(/test/i)).toBeInTheDocument();
});

it("click the todo done check", () => {
  const { debug, getByText } = render(
    <TodoItem storeKey="id_aiuio" todo="test2" isDone={false} />
  );
  userEvent.click(getByText("test2"));
  // expect(screen.getByLabelText('test2')).
  debug();
});

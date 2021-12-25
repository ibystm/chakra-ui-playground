import todoListReducer, { addTodo, ToDoListState } from "../toDoListSlice";

describe("toDoListSlice", () => {
  test("initial", () => {
    expect(todoListReducer(undefined, { type: "NO_TYPE" })).toEqual([]);
  });

  test("Add Todo test", () => {
    const previousState: ToDoListState[] = [];
    expect(todoListReducer(previousState, addTodo("new todo"))).toEqual([
      {
        key: expect.any(String),
        todo: "new todo",
        isDone: false,
      },
    ]);
  });
});

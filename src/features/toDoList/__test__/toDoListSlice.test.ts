import todoListReducer, {
  addTodo,
  changeStatus,
  deleteAll,
  deleteTodo,
  ToDoListState,
  updateTodo,
} from "../toDoListSlice";

const singlePreviousState: ToDoListState[] = [
  {
    key: "key1",
    todo: "previous todo",
    isDone: false,
  },
];

describe("toDoListSlice", () => {
  test("Initial state", () => {
    expect(todoListReducer(undefined, { type: "NO_TYPE" })).toEqual([]);
  });

  test("Add Todo", () => {
    const previousState: ToDoListState[] = [];
    expect(todoListReducer(previousState, addTodo("new todo"))).toEqual([
      {
        key: expect.any(String),
        todo: "new todo",
        isDone: false,
      },
    ]);
  });

  test("Change state to Done", () => {
    expect(
      todoListReducer(singlePreviousState, changeStatus({ key: "key1" }))
    ).toEqual([
      {
        key: "key1",
        todo: "previous todo",
        isDone: true,
      },
    ]);
  });

  test("Update todo", () => {
    const expectations = expect(
      todoListReducer(
        singlePreviousState,
        updateTodo({ key: "key1", todo: "new todo" })
      )
    );

    expectations.not.toEqual([
      {
        key: "key1",
        todo: "previous todo",
        isDone: false,
      },
    ]);
    expectations.toEqual([
      {
        key: "key1",
        todo: "new todo",
        isDone: false,
      },
    ]);
  });

  test("Delete todo", () => {
    const expectations = expect(
      todoListReducer(singlePreviousState, deleteTodo({ key: "key1" }))
    );
    expectations.toEqual([]);
  });

  test("Delete all todo", () => {
    const previousState: ToDoListState[] = [
      {
        key: "key1",
        todo: "previous todo1",
        isDone: false,
      },
      {
        key: "key2",
        todo: "previous todo2",
        isDone: false,
      },
      {
        key: "key2",
        todo: "previous todo3",
        isDone: false,
      },
    ];
    const expectations = expect(todoListReducer(previousState, deleteAll()));
    expectations.toEqual([]);
  });
});

import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../../../app/store";
import { useTodoItemFilter } from "../../hooks/useTodoItemFilter";
import { ToDoListState } from "../../toDoListSlice";

describe("useToToItemFilter", () => {
  const setUp = () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      todoList: [
        {
          key: "key1",
          todo: "key1",
          isDone: false,
        },
        {
          key: "key2",
          todo: "key2",
          isDone: true,
        },
        {
          key: "key3",
          todo: "key3",
          isDone: false,
        },
      ],
    } as Partial<RootState>);

    const wrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    return { wrapper };
  };

  it("Empty todo test", () => {
    const state: ToDoListState[] = [
      {
        key: "key1",
        todo: "key1",
        isDone: false,
      },
      {
        key: "key2",
        todo: "key2",
        isDone: true,
      },
      {
        key: "key3",
        todo: "key3",
        isDone: false,
      },
    ];

    const { wrapper } = setUp();
    const { result } = renderHook(() => useTodoItemFilter(0), { wrapper });
    expect(result.current.filteredTodo).toEqual(state);
  });

  it("No filter test", () => {
    const { wrapper } = setUp();
    const { result } = renderHook(() => useTodoItemFilter(0), { wrapper });
    expect(result.current.filteredTodo).toEqual([
      {
        key: "key1",
        todo: "key1",
        isDone: false,
      },
      {
        key: "key2",
        todo: "key2",
        isDone: true,
      },
      {
        key: "key3",
        todo: "key3",
        isDone: false,
      },
    ]);
  });

  it("Only Todo status test", () => {
    const { wrapper } = setUp();
    const { result } = renderHook(() => useTodoItemFilter(1), { wrapper });
    expect(result.current.filteredTodo).toEqual([
      {
        key: "key1",
        todo: "key1",
        isDone: false,
      },
      {
        key: "key3",
        todo: "key3",
        isDone: false,
      },
    ]);
  });

  it("Only isDone status test", () => {
    const { wrapper } = setUp();
    const { result } = renderHook(() => useTodoItemFilter(2), { wrapper });
    expect(result.current.filteredTodo).toEqual([
      {
        key: "key2",
        todo: "key2",
        isDone: true,
      },
    ]);
  });
});

import { configureStore } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { reducer } from "../../../../app/store";
import { useTodoItemFilter } from "../../hooks/useTodoItemFilter";

describe("useToToItemFilter", () => {
  const store = configureStore({ reducer });
  const wrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  it("Empty todo test", () => {
    const { result } = renderHook(() => useTodoItemFilter(0), { wrapper });
    expect(result.current.filteredTodo).toEqual([]);
  });
});

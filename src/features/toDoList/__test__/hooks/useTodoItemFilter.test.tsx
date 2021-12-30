import { renderHook } from "@testing-library/react-hooks";
import * as redux from "react-redux";
import * as utils from "../../../../app/hooks";
import { useTodoItemFilter } from "../../hooks/useTodoItemFilter";

describe("useToToItemFilter", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    // Mock useSelector hook
    spyOnUseSelector = jest.spyOn(utils, "useSelector");
    spyOnUseSelector.mockReturnValue([]);

    // Mock useDispatch hook
    spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    // Mock dispatch function returned from useDispatch
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
  });

  it("Empty todo test", () => {
    const { result } = renderHook(() => useTodoItemFilter(0));
    expect(result.current.filteredTodo).toEqual([]);
  });

  it("No filter test", () => {
    const { result } = renderHook(() => useTodoItemFilter(0));
    expect(result.current.filteredTodo).toEqual([]);
  });

  it("Only Todo status test", () => {
    const { result } = renderHook(() => useTodoItemFilter(1));
    expect(result.current.filteredTodo).toEqual([]);
  });

  it("Only isDone status test", () => {
    const { result } = renderHook(() => useTodoItemFilter(2));
    expect(result.current.filteredTodo).toEqual([]);
  });
});

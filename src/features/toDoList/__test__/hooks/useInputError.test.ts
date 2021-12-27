import { renderHook, RenderResult } from "@testing-library/react-hooks";
import {
  InputErrorObject,
  useInputError,
  UseInputErrorReturnType,
} from "../../hooks/useInputError";

describe("useInputError test", () => {
  let result: RenderResult<UseInputErrorReturnType>;
  beforeEach(() => {
    result = renderHook(() => useInputError()).result;
  });

  test("No Error test", () => {
    result.current.handleError("test");
    expect(result.current.errorObject).toEqual({
      error: false,
      message: "エラーなし",
    } as InputErrorObject);
  });

  test("Full width inputs test", () => {
    result.current.handleError("テストです");
    expect(result.current.errorObject).toEqual({
      error: true,
      message: "半角文字でご入力ください",
    } as InputErrorObject);
  });

  test("No Inputs Test", () => {
    result.current.handleError("");
    expect(result.current.errorObject).toEqual({
      error: true,
      message: "一文字以上入力してください",
    } as InputErrorObject);
  });
});

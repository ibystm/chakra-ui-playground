import { fireEvent, render } from "../../../utils/test-utils";
import TodoInputArea from "../TodoInputArea";

const setUp = () => {
  // render funcがなぜか返り値がanyになってしまう問題
  const utils = render(<TodoInputArea />);
  const input = utils.getByLabelText("todo-input-area");
  return {
    input,
    ...utils,
  };
};

describe("TodoInputArea Comopnent Test !!!", () => {
  it("check input value", () => {
    const { input, getByDisplayValue } = setUp();
    fireEvent.change(input, { target: { value: "32" } });
    getByDisplayValue("32");

    fireEvent.change(input, { target: { value: "changed" } });
    getByDisplayValue("changed");
  });

  it("Check placeholder Text renders correctly", () => {
    const { getByRole, getByPlaceholderText } = setUp();
    // ↓ debugと同じ
    // console.log(prettyDOM(baseElement));
    expect(getByPlaceholderText("New Todo")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("Check errorMessage is shown when Input value is full width", () => {
    const { input, getByText } = setUp();
    fireEvent.change(input, { target: { value: "日本語を入力してみた" } });
    expect(getByText("半角文字でご入力ください")).toBeInTheDocument();
  });

  it("Check error message shown when input is empty", () => {
    const { input, getByText } = setUp();
    // 一文字入力
    fireEvent.change(input, { target: { value: "test test test" } });
    // 一文字削除
    fireEvent.change(input, { target: { value: "" } });
    expect(getByText("一文字以上入力してください")).toBeInTheDocument();
  });

  it("Check new list is added correctly", async () => {
    const { input, debug, getByDisplayValue } = setUp();
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "hello world" } });
    fireEvent.keyDown(input, { keyCode: 13 });

    const inputValue = getByDisplayValue("");
    expect(inputValue.getAttribute("value")).toEqual("");

    debug();
  });
});

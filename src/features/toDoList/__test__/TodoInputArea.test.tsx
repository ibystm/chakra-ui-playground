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

  it("check errorMessage is shown when Input value is full width", () => {
    const { input, getByText } = setUp();
    fireEvent.change(input, { target: { value: "日本語を入力してみた" } });
    expect(getByText("Not use full width string")).toBeInTheDocument();
  });

  it("check error message shown when input is empty", () => {
    const { input, getByText } = setUp();
    // 一文字入力
    fireEvent.change(input, { target: { value: "test test test" } });
    // 一文字削除
    fireEvent.change(input, { target: { value: "" } });
    expect(getByText("一文字以上入力してください")).toBeInTheDocument();
  });

  it("check placeholder Text renders correctly", () => {
    const { getByRole, getByPlaceholderText } = setUp();
    // ↓ debugと同じ
    // console.log(prettyDOM(baseElement));
    expect(getByPlaceholderText("New Todo")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
  });
});

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
    const { input, debug, getByDisplayValue } = setUp();
    fireEvent.change(input, { target: { value: "32" } });
    getByDisplayValue("32");

    fireEvent.change(input, { target: { value: "changed" } });
    getByDisplayValue("changed");
  });

  it("check placeholder Text renders correctly", () => {
    const { getByRole, getByPlaceholderText } = setUp();
    // ↓ debugと同じ
    // console.log(prettyDOM(baseElement));
    expect(getByPlaceholderText("New Todo")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
  });
});

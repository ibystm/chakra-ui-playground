import { useCallback, useState } from "react";

const InputErrorMessage = {
  DoNotUseFullWidth: "半角文字でご入力ください",
  InputMoreThanOneString: "一文字以上入力してください",
  None: "エラーなし",
} as const;
export type InputErrorMessage =
  typeof InputErrorMessage[keyof typeof InputErrorMessage];

type ErrorObject = {
  error: boolean;
  message: InputErrorMessage;
};
export type UseInputErrorReturnType = {
  errorObject: ErrorObject;
  handleError: (parm: string) => void;
};

const initialErrorInfo: ErrorObject = {
  error: false,
  message: "エラーなし",
};
export const useInputError = (): UseInputErrorReturnType => {
  const [errorObject, setErrorObject] = useState(initialErrorInfo);
  const handleError = useCallback((input: string) => {
    if (input.length === 0) {
      setErrorObject({
        error: true,
        message: InputErrorMessage.InputMoreThanOneString,
      });
      return;
    }
    if (input.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
      setErrorObject({
        error: true,
        message: "半角文字でご入力ください",
      });
      return;
    }
    setErrorObject(initialErrorInfo);
  }, []);

  return { errorObject, handleError };
};

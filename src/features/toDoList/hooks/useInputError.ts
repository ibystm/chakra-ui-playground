import { useCallback, useState } from "react";

type ErrorObject = {
  error: boolean;
  message: string;
};
// type UseInputErrorReturn = {
//   errorObject: ErrorObject;
//   handleError: (parm: string) => void;
// };

const initialErrorInfo = {
  error: false,
  message: "",
};
export const useInputError = () => {
  const [errorObject, setErrorObject] = useState(initialErrorInfo);
  const handleError = useCallback((input: string) => {
    if (!input.length) {
      setErrorObject({
        error: true,
        message: "一文字以上入力してください",
      });
    }
    if (input.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
      setErrorObject({
        error: true,
        message: "Not use full width string",
      });
    }
  }, []);
  return { errorObject, handleError };
};

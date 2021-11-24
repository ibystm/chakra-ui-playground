import { useCallback, useState } from "react";

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
  }, []);
  return { errorObject, handleError };
};

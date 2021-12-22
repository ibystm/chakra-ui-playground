type ResponseUseKeybaordEventsHook = {
  handlePressEnter: (e: React.KeyboardEvent, fn: () => void) => void;
};

/** onPress keybaordを扱う */
export const useKeyboardEvents = (): ResponseUseKeybaordEventsHook => {
  const handlePressEnter = (e: React.KeyboardEvent, fn: () => void) => {
    if (e.keyCode !== 13) {
      return;
    }
    fn();
  };

  return {
    handlePressEnter,
  };
};

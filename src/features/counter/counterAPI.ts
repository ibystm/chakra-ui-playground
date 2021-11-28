/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 2000)
  );
}

export function fetchSubstractCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 3000)
  );
}

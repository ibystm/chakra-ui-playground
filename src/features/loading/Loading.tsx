import Loader from "react-loader-spinner";

export function Loading() {
  return (
    <Loader
      type="ThreeDots"
      color="rgb(112, 76, 182)"
      height={150}
      width={150}
      // timeout={3000}
    />
  );
}

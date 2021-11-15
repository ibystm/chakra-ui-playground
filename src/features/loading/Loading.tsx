import Loader from "react-loader-spinner";

export function Loading() {
  const isLoading = true;
  return isLoading ? (
    <Loader
      type="ThreeDots"
      color="rgb(112, 76, 182)"
      height={100}
      width={100}
      // timeout={3000}
    />
  ) : null;
}

import React from "react";
import Loader from "react-loader-spinner";
import style from "./Loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Loader
        type="ThreeDots"
        color="rgb(112, 76, 182)"
        height={150}
        width={150}
        // timeout={3000}
      />
    </div>
  );
};

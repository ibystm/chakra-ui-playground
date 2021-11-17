import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface LoadingState {
  loading: boolean;
  message: string;
}

const initialState: LoadingState = {
  loading: false,
  message: "",
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    onLoading: (state, action) => {
      console.log("@@@@@来てる？？？");
      state.loading = true;
      state.message = action.payload;
    },
    offLoading: (state) => {
      console.log("@@@@@終わり？？？");
      state.loading = false;
    },
  },
});

export const { onLoading, offLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

export const selectLoading = (state: RootState) => state.loading;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAlertState {
  message: string | null;
}

const initialState: IAlertState = {
  message: null,
};

const alertSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    deleteAlert: (state) => {
      state.message = null;
    },
  },
});

export default alertSlice.reducer;

export const { setAlert, deleteAlert } = alertSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../model/IUser";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      localStorage.setItem("userRole", action.payload.role);
      localStorage.setItem(
        "userName",
        action.payload.firstName + " " + action.payload.lastName
      );
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("userRole");
      localStorage.removeItem("userName");
    },
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;

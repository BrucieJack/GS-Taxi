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
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;

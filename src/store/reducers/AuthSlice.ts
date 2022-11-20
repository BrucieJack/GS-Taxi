import { UserResponse } from "./../../services/AuthService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | undefined | null;
  expirationTime: number | undefined | null;
  refreshToken: string | undefined | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    expirationTime: null,
    refreshToken: null,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { accessToken, expirationTime, refreshToken },
      }: PayloadAction<UserResponse>
    ) => {
      state.accessToken = accessToken;
      state.expirationTime = expirationTime;
      state.refreshToken = refreshToken;
    },
  },
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;

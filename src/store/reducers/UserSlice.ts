import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../model/IUser";

// type UserState = {
//   firstName: string | null | undefined;
//   lastName: string | null | undefined;
//   email: string | null | undefined;
//   role: string | null | undefined;
//   id: string | null | undefined;
//   currentOrder?: string | null | undefined;
//   car?: {
//     make: string | null | undefined;
//     model: string | null | undefined;
//     year: number | null | undefined;
//     color: string | null | undefined;
//     photo: string | null | undefined;
//   };
// };

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
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
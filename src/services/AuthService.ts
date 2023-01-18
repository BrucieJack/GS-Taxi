import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
import { LoginInput1 } from "../pages/login/Login";
import { RegisterInput } from "../pages/register/Register";
import { userApi } from "./UserService";

import { setUser } from "../store/reducers/UserSlice";

export interface UserResponse {
  accessToken: string | undefined;
  expirationTime: number | undefined;
  refreshToken: string | undefined;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://taxi-server.onrender.com`,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, RegisterInput>({
      query(data) {
        return {
          url: "register",
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation<IGenericResponse, { email: string }>({
      query(data) {
        return {
          url: "resetPassword",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<UserResponse, LoginInput1>({
      query(data) {
        return {
          url: "login",
          method: "POST",
          body: data,
          // credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          const data = await dispatch(userApi.endpoints.getMe.initiate(null));
          if ("data" in data) {
            dispatch(setUser(data.data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;

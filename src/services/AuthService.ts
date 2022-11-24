import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
import { LoginInput1 } from "../pages/login/Login";
import { RegisterInput } from "../pages/register/Register";
import { RootState } from "../store/store";

export interface UserResponse {
  accessToken: string | undefined;
  expirationTime: number | undefined;
  refreshToken: string | undefined;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://young-dusk-13958.herokuapp.com`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.accessToken;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
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
    loginUser: builder.mutation<UserResponse, LoginInput1>({
      query(data) {
        return {
          url: "login",
          method: "POST",
          body: data,
          // credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;

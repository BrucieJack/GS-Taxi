import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
// import { LoginInput } from "../pages/login/Login";
import { RegisterInput } from "../pages/register/Register";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://young-dusk-13958.herokuapp.com`,
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
    // loginUser: builder.mutation<
    //   { access_token: string; status: string },
    //   LoginInput
    // >({
    //   query(data) {
    //     return {
    //       url: "login",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),
  }),
});

export const { useRegisterUserMutation } = authApi;

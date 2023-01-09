import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../model/IUser";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://taxi-server.onrender.com/user`,
    prepareHeaders: (headers, { endpoint }) => {
      // const token = (getState() as RootState).auth.accessToken;
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        if (endpoint === "setPhoto") {
          console.log("photo");
          // headers.set("Access-Control-Allow-Origin", "*");
        }
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.mutation<IUser, null>({
      query() {
        return {
          url: "me",
        };
      },
    }),
    setPhoto: builder.mutation<null, { id: string; data: { file: FormData } }>({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query(args: any) {
        const { id, data } = args;
        return {
          url: `${id}/photo`,
          method: "POST",
          body: data,
        };
      },
    }),
    setRating: builder.mutation<
      null,
      { id: string; data: { rating: number; tripId: string } }
    >({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query(args: any) {
        const { id, data } = args;
        return {
          url: `${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetMeMutation, useSetPhotoMutation } = userApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../model/IUser";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://taxi-server.onrender.com`,
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
          url: "user/me",
        };
      },
    }),
    setPhoto: builder.mutation<null, { id: string; data: { file: FormData } }>({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query(args: any) {
        const { id, data } = args;
        return {
          url: `user/${id}/photo`,
          method: "POST",
          body: data,
        };
      },
    }),
    getUsers: builder.query<
      { items: IUser[]; total: number },
      { role: string; page: number; size: number }
    >({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query(args: any) {
        const { role, page, size } = args;
        return {
          url: `user?role=${role}&page=${page}&size=${size}`,
          method: "GET",
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
          url: `user/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    blockUser: builder.mutation<
      null,
      { id: string; data: { blocked: boolean; blockedUntil?: number } }
    >({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query(args: any) {
        const { id, data } = args;
        return {
          url: `user/${id}/blocked`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetMeMutation, useSetPhotoMutation, useLazyGetUsersQuery } =
  userApi;

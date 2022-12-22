import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../model/IUser";
import { setUser } from "../store/reducers/UserSlice";
import { RootState } from "../store/store";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: `https://taxi-server.onrender.com/user`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        if (endpoint === "setPhoto") {
          console.log("photo");
          // headers.set("Access-Control-Allow-Origin", "*");
        }
=======
    baseUrl: `https://young-dusk-13958.herokuapp.com/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
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
<<<<<<< HEAD
    }),
    setPhoto: builder.mutation<null, { id: any; data: { file: FormData } }>({
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
      query(args: any) {
        const { id, data } = args;
        return {
          url: `${id}`,
          method: "PATCH",
          body: data,
        };
=======
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          console.log("kek");
          const { data } = await queryFulfilled;
          console.log("kak");
          console.log(data);
          dispatch(setUser(data));
          console.log("kak");
        } catch (error) {
          console.log(error);
        }
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
      },
    }),
  }),
});

<<<<<<< HEAD
export const { useGetMeMutation, useSetPhotoMutation } = userApi;
=======
export const { useGetMeMutation } = userApi;
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../model/IUser";
import { setUser } from "../store/reducers/UserSlice";
import { RootState } from "../store/store";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://young-dusk-13958.herokuapp.com/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
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
      },
    }),
  }),
});

export const { useGetMeMutation } = userApi;

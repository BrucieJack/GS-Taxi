import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
import { OrderInput } from "../pages/createOrder/CreateOrder";
import { RootState } from "../store/store";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://young-dusk-13958.herokuapp.com`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendOrder: builder.mutation<IGenericResponse, OrderInput>({
      query(data) {
        return {
          url: "order",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useSendOrderMutation } = orderApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
import { IOrder } from "../model/IOrder";
import { OrderInput } from "../pages/createOrder/CreateOrder";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://taxi-server.onrender.com`,
    prepareHeaders: (headers) => {
      // const token = (getState() as RootState).auth.accessToken;
      const token = localStorage.getItem("accessToken");
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
    clientOrder: builder.mutation<IOrder, null>({
      query() {
        return {
          url: "order",
          method: "GET",
        };
      },
    }),
    driverOrder: builder.mutation<Array<IOrder>, void>({
      query() {
        return {
          url: "order",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useSendOrderMutation, useDriverOrderMutation } = orderApi;

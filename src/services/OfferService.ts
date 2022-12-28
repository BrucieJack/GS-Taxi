import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
import { IOffer } from "../model/IOffer";
import { OfferInput } from "../pages/activeOrders/ActiveOrders";

export const offerApi = createApi({
  reducerPath: "offerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://taxi-server.onrender.com`,
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.accessToken;
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    clientOffer: builder.mutation<Array<IOffer>, string>({
      query(id) {
        console.log(id);
        return {
          url: `offer?orderId=${id}`,
          method: "GET",
        };
      },
    }),
    offerPrice: builder.mutation<IGenericResponse, OfferInput>({
      query(data) {
        console.log(data);
        return {
          url: "offer",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useClientOfferMutation } = offerApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";
import { ITrip } from "../model/ITrip";
import { RootState } from "../store/store";

export const tripApi = createApi({
  reducerPath: "tripApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://taxi-server.onrender.com`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        if (endpoint === "finishTrip") {
          headers.set("Access-Control-Allow-Origin", "*");
        }
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    activateTrip: builder.mutation<IGenericResponse, { offerId: string }>({
      query(data) {
        console.log();
        return {
          url: "trip",
          method: "POST",
          body: data,
        };
      },
    }),
    trip: builder.mutation<Array<ITrip>, string>({
      query(active) {
        return {
          url: `trip?active=${active}`,
          method: "GET",
        };
      },
    }),
    finishTrip: builder.mutation<null, string>({
      query(id) {
        return {
          url: `trip/${id}`,
          method: "PATCH",
        };
      },
    }),
  }),
});

export const { useTripMutation } = tripApi;

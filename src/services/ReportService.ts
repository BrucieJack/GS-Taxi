import { IReport } from "./../model/IReport";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGenericResponse } from "../model/IGenericResponse";

export const reportApi = createApi({
  reducerPath: "reportApi",
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
    report: builder.mutation<
      IGenericResponse,
      {
        comment: string;
        tripId: string;
        driverId: string;
      }
    >({
      query(data) {
        return {
          url: "report",
          method: "POST",
          body: data,
        };
      },
    }),
    getReports: builder.query<
      { items: IReport[]; total: number },
      { page: number; size: number }
    >({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query(args: any) {
        const { page, size } = args;
        return {
          url: `report?page=${page}&size=${size}`,
          method: "GET",
        };
      },
    }),
  }),
});

// eslint-disable-next-line no-empty-pattern
export const { useLazyGetReportsQuery } = reportApi;

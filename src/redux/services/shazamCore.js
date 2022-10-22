import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'fbab5eac20msh3b32e2923104f61p135a24jsn03bce9475d92');

      return headers;
    }
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => `/charts/world` })
  })
});

export const { useGetTopChartsQuery } = shazamCoreApi;

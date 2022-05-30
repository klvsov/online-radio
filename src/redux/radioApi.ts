import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IStation {
  country: string;
  favicon: string;
  language: string;
  name: string;
  stationuuid: string;
  url: string;
  url_resolved: string;
}

export const radioApi = createApi({
  reducerPath: 'radioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.132.145.114/json/stations/',
  }),
  endpoints: (build) => ({
    getStations: build.query<
      IStation[],
      [country: string, tag: string, page: number]
    >({
      query: ([country, tag, page]) => ({
        url: 'search',
        params: {
          country: country,
          tag: tag,
          hidebroken: true,
          limit: 10,
          offset: page * 10,
        },
      }),
    }),
  }),
});

export const { useGetStationsQuery } = radioApi;

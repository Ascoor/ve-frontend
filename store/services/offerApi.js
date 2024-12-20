import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const offerApi = createApi({
  reducerPath: 'offerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getOffers: builder.query({
      query: () => '/offers',
    }),
    getOffer: builder.query({
      query: id => `/offers/${id}`,
    }),
  }),
});

export const { useGetOffersQuery, useGetOfferQuery } = offerApi;

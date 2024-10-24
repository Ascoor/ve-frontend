
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store.ve-shop.co/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getCategory: builder.query({
      query: (id) => `/categories/${id}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
} = categoryApi;

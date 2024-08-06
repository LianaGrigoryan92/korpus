import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subCategoriesApi = createApi({
  reducerPath: 'subCategoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL }),
  endpoints: (builder) => ({
    getSubCategories: builder.query<SubCategory[], void>({
      query: () => '/sub-categories?populate=*&sort[0]=id',
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subCategoriesApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subCategoriesApi = createApi({
  reducerPath: 'subCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getSubCategories: builder.query<
      SubCategory[],
      { categoryId: string | number }
    >({
      query: ({ categoryId }) => {
        return {
          url: `/sub-categories?populate=*&sort[0]=id&filters[category][id][$eq]=${categoryId}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subCategoriesApi;

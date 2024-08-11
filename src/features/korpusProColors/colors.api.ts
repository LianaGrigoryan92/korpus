import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const colorsApi = createApi({
  reducerPath: 'colorsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getColors: builder.query<Color[], void>({
      query: () => ({
        url: '/colors?sort[0]=id',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any[] }) =>
        response.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        })),
    }),
  }),
});

export const { useGetColorsQuery } = colorsApi;

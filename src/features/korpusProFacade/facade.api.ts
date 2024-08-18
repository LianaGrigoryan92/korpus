import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const facadeApi = createApi({
  reducerPath: 'facadeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getFacades: builder.query<Facade[], void>({
      query: () => {
        return {
          url: `/facades?sort[0]=id`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any[] }) => {
        console.log(53333, response)
        if (response.data.length) {
          return response.data.map(item => ({
            id: item.id,
            title: item.attributes.title,
            image: item.attributes.image,
          }));
        }
        return [];
      },
    }),
  }),
});

export const { useGetFacadesQuery } = facadeApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getImageUrl} from "@/utils/getImageFullUrl";

export const facadeApi = createApi({
  reducerPath: 'facadeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getFacades: builder.query<Facade[], void>({
      query: () => {
        return {
          url: `/facades?populate=*&sort[0]=id`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any[] }) => {
        if (response.data.length) {
          return response.data.map(item => ({
            id: item.id,
            title: item.attributes.title,
            image: getImageUrl(item.attributes.image),
          }));
        }
        return [];
      },
    }),
  }),
});

export const { useGetFacadesQuery } = facadeApi;

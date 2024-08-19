import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getImageUrl} from "@/utils/getImageFullUrl";

export const facadeMaterialApi = createApi({
  reducerPath: 'facadeMaterialApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getFacadeMaterialsByFacadeId: builder.query<FacadeMaterial[], { facadeId: string | number }>({
      query: ({ facadeId}) => {
        return {
          url: `/facade-materials?populate=*&sort[0]=id&filters[facade][id][$eq]=${facadeId}`,
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
            image: getImageUrl(item.attributes.image),
          }));
        }
        return [];
      },
    }),
  }),
});

export const { useGetFacadeMaterialsByFacadeIdQuery } = facadeMaterialApi;

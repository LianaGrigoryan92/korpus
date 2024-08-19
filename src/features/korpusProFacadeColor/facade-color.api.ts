import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getImageUrl} from "@/utils/getImageFullUrl";

export const facadeColorApi = createApi({
  reducerPath: 'facadeColorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getFacadeColorByFacadeMaterialId: builder.query<FacadeColor[], { facadeMaterialId: string | number }>({
      query: ({ facadeMaterialId }) => {
        return {
          url: `/facade-color-types?populate[0]=lacquerpercentages&populate[1]=facadeColors&populate[2]=image&sort[0]=id&filters[facade_material][id][$eq]=${facadeMaterialId}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any[] }) => {
        console.log(1233, response.data)
        if (response.data.length) {
          return response.data.map(item => ({
            id: item.id,
            title: item.attributes.title,
            image: getImageUrl(item.attributes.image),
            lacquerPercentages: item.attributes.lacquerpercentages,
            facadeColors: item.attributes.facadeColors,
          }));
        }
        return [];
      },
    }),
  }),
});

export const { useGetFacadeColorByFacadeMaterialIdQuery } = facadeColorApi;
